export interface Project {
  title: string
  location: string
  status: 'ongoing' | 'upcoming'
  year: string
  client: string
  description: string
}

export const projects: Project[] = [
  {
    title: '800MW Solar Power Project',
    location: 'Al Kharsaa, Qatar',
    status: 'ongoing',
    year: '2024',
    client: 'Sinohydro Corporation',
    description: 'A landmark renewable energy project focused on sustainable solar power generation, contributing 800MW to the grid. JARACON EPC PROJECTS ensures precision engineering, quality construction, and timely execution of this mega green initiative.',
  },
  {
    title: '500MW Picking Unit Project',
    location: 'Ras Bu Fantas, Qatar',
    status: 'ongoing',
    year: '2024',
    client: 'PowerChina Guizhou Engineering Co. Ltd',
    description: 'This large-scale industrial project delivers 500MW with advanced infrastructure. Our team provides complete construction solutions, ensuring safety, efficiency, and durability to support the region\'s growing demand for reliable power generation facilities.',
  },
  {
    title: 'Samsung Facility — E IWPP',
    location: 'Qatar',
    status: 'upcoming',
    year: 'Soon',
    client: 'Samsung',
    description: 'An upcoming Independent Water and Power Plant project, combining advanced utilities for energy and water supply. JARACON EPC PROJECTS is committed to building sustainable, world-class infrastructure meeting international safety and quality standards.',
  },
]
