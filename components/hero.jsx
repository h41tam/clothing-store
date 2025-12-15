"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-screen">
          {/* Left: Title & Description */}
          <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1 animate-fadeInUp lg:pr-12">
            <div>
              <h1 className="text-5xl lg:text-6xl font-cinzel-decorative font-semibold tracking-tight mb-4 text-balance">
                Wear <span className="text-primary">Fancy</span>
                <br />
                With <span className="text-primary">Manal</span>
              </h1>
              <div className="text-center hyphens-auto max-w-[29ch] lg:max-w-[36ch]">
                <p className="font-ghrathe text-xl text-foreground/80">
                  Welcome To Manal's Official Store.
                  Where Fashion and Comfort Come Together.
                  Style Your Pride.
                </p>
              </div>
            </div>

            <div className="flex gap-4 font-cinzel-decorative font-bold text-sm lg:text-xl">
              <Link
                href="/collection"
                className="px-6 py-3 border border-foreground bg-background rounded-xl text-foreground hover:bg-primary hover:text-background hover:border-primary transition-colors duration-400 inline-block"
              >
                Our Collection
              </Link>
              <Link
                href="/info"
                className="px-6 py-3 border border-foreground bg-background rounded-xl text-foreground hover:bg-primary hover:text-background hover:border-primary transition-colors duration-400 inline-block"
              >
                Find Us
              </Link>
            </div>
          </div>

          {/* Right: Slideshow */}
          <div className="relative h-96 lg:h-full min-h-screen rounded-lg overflow-hidden group order-1 lg:order-2">
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
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-primary p-2 rounded-full transition-colors z-10"
            >
              <ChevronRight size={24} />
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
