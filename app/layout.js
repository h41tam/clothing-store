import localFont from "next/font/local"
import "./globals.css"
import RootLayoutClient from "./RootLayoutClient"

const cinzel = localFont({
  src: [
    { path: "../public/fonts/Cinzel-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Cinzel-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Cinzel-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-cinzel",
  display: "swap",
})

const cinzelDecorative = localFont({
  src: [
    { path: "../public/fonts/CinzelDecorative-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/CinzelDecorative-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/CinzelDecorative-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-cinzel-decorative",
  display: "swap",
})

const angelwish = localFont({
  src: [{ path: "../public/fonts/AngelWish.woff2", weight: "400", style: "normal" }],
  variable: "--font-angelwish",
  display: "swap",
})

const ghrathe = localFont({
  src: [{ path: "../public/fonts/Ghrathe.woff2", weight: "400", style: "normal" }],
  variable: "--font-ghrathe",
  display: "swap",
})

const graffitiYouth = localFont({
  src: [{ path: "../public/fonts/GraffitiYouth-Regular.woff2", weight: "400", style: "normal" }],
  variable: "--font-graffiti-youth",
  display: "swap",
})

const heavitas = localFont({
  src: [{ path: "../public/fonts/Heavitas.woff2", weight: "700", style: "normal" }],
  variable: "--font-heavitas",
  display: "swap",
})

const kastroo = localFont({
  src: [{ path: "../public/fonts/KASTROO.woff2", weight: "700", style: "normal" }],
  variable: "--font-kastroo",
  display: "swap",
})

const karina = localFont({
  src: [{ path: "../public/fonts/Karina.woff2", weight: "400", style: "normal" }],
  variable: "--font-karina",
  display: "swap",
})

const minecraft = localFont({
  src: [{ path: "../public/fonts/Minecraft.woff2", weight: "400", style: "normal" }],
  variable: "--font-minecraft",
  display: "swap",
})

const stormlight = localFont({
  src: [{ path: "../public/fonts/Stormlight.woff2", weight: "400", style: "normal" }],
  variable: "--font-stormlight",
  display: "swap",
})

const superCrawler = localFont({
  src: [{ path: "../public/fonts/SuperCrawler.woff2", weight: "700", style: "normal" }],
  variable: "--font-supercrawler",
  display: "swap",
})

const bostonCaps = localFont({
  src: [{ path: "../public/fonts/boston-caps.woff2", weight: "700", style: "normal" }],
  variable: "--font-boston-caps",
  display: "swap",
})

const docallisme = localFont({
  src: [{ path: "../public/fonts/docallismeonstreet.woff2", weight: "400", style: "normal" }],
  variable: "--font-docallisme",
  display: "swap",
})

const dsDigi = localFont({
  src: [
    { path: "../public/fonts/ds-digi.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/ds-digi-ita.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/ds-digi-bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/ds-digi-bold-ita.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-ds-digi",
  display: "swap",
})

const rodfat = localFont({
  src: [{ path: "../public/fonts/rodfat.woff2", weight: "700", style: "normal" }],
  variable: "--font-rodfat",
  display: "swap",
})

const technoHideo = localFont({
  src: [
    { path: "../public/fonts/techno-hideo.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/techno-hideo-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-techno-hideo",
  display: "swap",
})

export const metadata = {
  title: "Luxe Collections - Premium Clothing",
  description: "Discover premium luxury clothing with timeless elegance",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cinzelDecorative.variable} ${angelwish.variable} ${ghrathe.variable} ${graffitiYouth.variable} ${heavitas.variable} ${kastroo.variable} ${karina.variable} ${minecraft.variable} ${stormlight.variable} ${superCrawler.variable} ${bostonCaps.variable} ${docallisme.variable} ${dsDigi.variable} ${rodfat.variable} ${technoHideo.variable} font-sans antialiased`}
      >
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  )
}
