import type { Metadata } from "next"
import "./globals.css"
import {
  Playfair_Display,
  Cormorant_Garamond,
  EB_Garamond,
  Syne,
  Fraunces,
  Space_Grotesk,
  DM_Sans,
  Outfit,
  Inter,
  IBM_Plex_Sans,
  Manrope,
  Bodoni_Moda,
  Instrument_Serif,
  Libre_Caslon_Display,
  Bricolage_Grotesque,
  Libre_Franklin,
  Geist,
  Karla,
  Plus_Jakarta_Sans,
} from "next/font/google"
import LenisProvider from "@/providers/LenisProvider"
import GSAPProvider from "@/providers/GSAPProvider"
import TransitionProvider from "@/providers/TransitionProvider"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

/* ── Google Fonts for design-system brand combos ── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
})
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
})
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
})
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["700", "800"],
})
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["700"],
  style: ["normal", "italic"],
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "700"],
})
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600"],
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
})
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  display: "swap",
  weight: ["400", "500", "600"],
})
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
})
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
})
const libreCaslonDisplay = Libre_Caslon_Display({
  subsets: ["latin"],
  variable: "--font-libre-caslon",
  display: "swap",
  weight: ["400"],
  style: ["normal"],
})
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "700", "800"],
})
const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})
const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const fontVars = [
  playfair, cormorant, ebGaramond, syne, fraunces, spaceGrotesk,
  dmSans, outfit, inter, ibmPlexSans, manrope,
  bodoniModa, instrumentSerif, libreCaslonDisplay, bricolageGrotesque,
  libreFranklin, geist, karla, plusJakartaSans,
].map(f => f.variable).join(" ")

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
    <html lang="en" className={fontVars}>
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
