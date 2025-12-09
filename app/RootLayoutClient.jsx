"use client"

import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RootLayoutClient({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">{children}</main>
      <Footer />
      <Analytics />
    </>
  )
}
