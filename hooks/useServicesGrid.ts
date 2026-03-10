'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { gridSwap } from '@/lib/animations'

const TOTAL_TILES = 16
const CTA_INDEX = 15
const COLS = 4
const ROWS = 4
const DEFAULT_POSITIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const BOTTOM_MARGIN = 64

function getNeighborCells(cellIndex: number): number[] {
  const row = Math.floor(cellIndex / COLS)
  const col = cellIndex % COLS
  const neighbors: number[] = []
  if (row > 0) neighbors.push(cellIndex - COLS)
  if (row < ROWS - 1) neighbors.push(cellIndex + COLS)
  if (col > 0) neighbors.push(cellIndex - 1)
  if (col < COLS - 1) neighbors.push(cellIndex + 1)
  return neighbors
}

function getCellCoords(cellIndex: number, containerW: number, containerH: number) {
  const usableH = containerH - BOTTOM_MARGIN
  const cellW = containerW / COLS
  const cellH = usableH / ROWS
  return {
    x: (cellIndex % COLS) * cellW,
    y: Math.floor(cellIndex / COLS) * cellH,
  }
}

export function useServicesGrid(gridRef: React.RefObject<HTMLDivElement | null>) {
  const tileRefs = useRef<(HTMLDivElement | null)[]>(Array(TOTAL_TILES).fill(null))
  const tilePositions = useRef<number[]>([...DEFAULT_POSITIONS])
  const [isFinePointer, setIsFinePointer] = useState(false)
  const [activeTiles, setActiveTiles] = useState<number[]>(() => {
    const neighborCells = getNeighborCells(DEFAULT_POSITIONS[CTA_INDEX])
    return neighborCells.map(cell => DEFAULT_POSITIONS.indexOf(cell))
  })

  // Detect pointer type (avoids hydration mismatch — starts false)
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    setIsFinePointer(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsFinePointer(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Position all tiles to their current grid cells (instant, no animation)
  const positionAllTiles = useCallback(() => {
    if (!gridRef.current) return
    const { width, height } = gridRef.current.getBoundingClientRect()

    tileRefs.current.forEach((el, tileIndex) => {
      if (!el) return
      const cellIndex = tilePositions.current[tileIndex]
      const { x, y } = getCellCoords(cellIndex, width, height)
      gsap.set(el, { x, y, width: width / COLS, height: (height - BOTTOM_MARGIN) / ROWS })
    })
  }, [gridRef])

  // Initial GSAP layout
  useGSAP(() => {
    if (!isFinePointer) return
    positionAllTiles()
  }, { scope: gridRef, dependencies: [isFinePointer] })

  // Resize observer — recalculate positions instantly on resize
  useEffect(() => {
    if (!isFinePointer || !gridRef.current) return
    const observer = new ResizeObserver(() => positionAllTiles())
    observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [isFinePointer, gridRef, positionAllTiles])

  // Swap: service tile ↔ CTA tile
  const handleTileHover = useCallback((tileIndex: number) => {
    if (tileIndex === CTA_INDEX || !gridRef.current) return

    const hoveredCell = tilePositions.current[tileIndex]
    const ctaCell = tilePositions.current[CTA_INDEX]
    if (hoveredCell === ctaCell) return

    // Swap positions in data
    tilePositions.current[tileIndex] = ctaCell
    tilePositions.current[CTA_INDEX] = hoveredCell

    const { width, height } = gridRef.current.getBoundingClientRect()

    // Animate the service tile to CTA's old position
    const serviceEl = tileRefs.current[tileIndex]
    if (serviceEl) {
      const coords = getCellCoords(ctaCell, width, height)
      gsap.to(serviceEl, {
        x: coords.x,
        y: coords.y,
        duration: gridSwap.duration,
        ease: gridSwap.ease,
        overwrite: true,
      })
    }

    // Animate the CTA tile to hovered position (under cursor)
    const ctaEl = tileRefs.current[CTA_INDEX]
    if (ctaEl) {
      const coords = getCellCoords(hoveredCell, width, height)
      gsap.set(ctaEl, { zIndex: 10 })
      gsap.to(ctaEl, {
        x: coords.x,
        y: coords.y,
        duration: gridSwap.duration,
        ease: gridSwap.ease,
        overwrite: true,
        onComplete: () => { gsap.set(ctaEl, { zIndex: 2 }) },
      })
    }

    // Update active tiles to neighbors of CTA's new position
    const ctaNewCell = tilePositions.current[CTA_INDEX]
    const neighborCells = getNeighborCells(ctaNewCell)
    const newActive = neighborCells
      .map(cell => tilePositions.current.indexOf(cell))
      .filter(idx => idx !== -1 && idx !== CTA_INDEX)
    setActiveTiles(newActive)
  }, [gridRef])

  // Reset: all tiles return to defaults
  const handleGridLeave = useCallback(() => {
    if (!gridRef.current) return
    tilePositions.current = [...DEFAULT_POSITIONS]
    const { width, height } = gridRef.current.getBoundingClientRect()

    tileRefs.current.forEach((el, tileIndex) => {
      if (!el) return
      const { x, y } = getCellCoords(DEFAULT_POSITIONS[tileIndex], width, height)
      gsap.to(el, {
        x,
        y,
        duration: gridSwap.resetDuration,
        ease: gridSwap.resetEase,
        overwrite: true,
      })
    })

    // Reset active tiles to default CTA neighbors
    const neighborCells = getNeighborCells(DEFAULT_POSITIONS[CTA_INDEX])
    setActiveTiles(neighborCells.map(cell => DEFAULT_POSITIONS.indexOf(cell)))
  }, [gridRef])

  // Callback ref setter
  const setTileRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    tileRefs.current[index] = el
  }, [])

  return { isFinePointer, setTileRef, handleTileHover, handleGridLeave, activeTiles }
}
