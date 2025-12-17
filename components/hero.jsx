"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { bestSellers } from "@/lib/products"

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bestSellers.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % bestSellers.length)
  const prev = () => setCurrent((prev) => (prev - 1 + bestSellers.length) % bestSellers.length)

  return (
    <div className="pt-20 pb-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-22">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:-mt-10 gap-6 lg:gap-12 items-center min-h-screen">
          {/* Left: Title & Description */}
          <div className="flex flex-col justify-center space-y-8 order-1 lg:order-1 animate-fadeInUp lg:pr-12">
            <div>
              <div className="max-w-[40ch] lg:max-w-[36ch]">
                <h1 className="text-4xl lg:text-4xl font-cinzel-decorative font-semibold tracking-tight mb-4 text-center">
                  Bienvenue Chez
                  <br />
                  <span className="text-primary lg:text-6xl">numberONE</span>
                </h1>
                <p className="text-center font-light font-rodfat text-2sm text-foreground/80">
                  Trouvez votre style prefere parmi notre vaste collection de vetements.
                </p>
              </div>
            </div>

            <div className="flex gap-4 font-cinzel-decorative ml-8 lg:ml-2 font-bold max-w-[41ch] lg:max-w-[34ch] text-sm lg:text-lg">
              <Link
                href="/collection"
                className="px-6 py-3 border border-foreground/80 bg-background rounded-xl text-foreground/80 hover:bg-primary hover:text-background hover:border-primary transition-colors duration-400 inline-block"
              >
                Collection
              </Link>
              <Link
                href="/info"
                className="px-6 py-3 border border-foreground/80 bg-background rounded-xl text-foreground/80 hover:bg-primary hover:text-background hover:border-primary transition-colors duration-400 inline-block"
              >
                En Savoir Plus
              </Link>
            </div>
          </div>

          {/* Right: Slideshow */}
          <div className="relative h-10 lg:h-12 min-h-100 rounded-lg animate-fadeInUp overflow-hidden group order-2 lg:order-1">
            {bestSellers.map((product, index) => (
              <div
                key={product.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                  }`}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <span className="absolute bottom-10 left-5 font-cinzel text-foreground text-lg font-medium">
                  {product.name}
                </span>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-primary p-2 rounded-full transition-colors z-10"
            >
              <CaretLeft size={24} className="hover:cursor-pointer" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-primary p-2 rounded-full transition-colors z-10"
            >
              <CaretRight size={24} className="hover:cursor-pointer" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {bestSellers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-primary" : "bg-primary/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
