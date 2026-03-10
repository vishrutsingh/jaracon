import type { Metadata } from "next"
import "./globals.css"
import LenisProvider from "@/providers/LenisProvider"
import GSAPProvider from "@/providers/GSAPProvider"
import TransitionProvider from "@/providers/TransitionProvider"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "JARACON EPC PROJECTS — End-to-End Construction Solutions",
  description: "Leading EPC contracting company in Qatar specializing in residential, commercial, and power plant construction. From excavation to handover.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <GSAPProvider>
            <Navbar />
            <TransitionProvider>
              <main>{children}</main>
            </TransitionProvider>
            <Footer />
          </GSAPProvider>
        </LenisProvider>
      </body>
    </html>
  )
}
