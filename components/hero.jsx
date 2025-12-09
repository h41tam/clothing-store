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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left: Title & Description */}
          <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1 animate-fadeInUp">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light tracking-tight mb-4 text-balance">
                Timeless
                <br />
                <span className="text-primary">Elegance</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover our curated collection of premium luxury clothing, crafted with meticulous attention to detail.
                Each piece embodies sophistication and timeless style.
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                href="/collection"
                className="px-8 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity inline-block"
              >
                Explore Collection
              </Link>
              <Link
                href="/info"
                className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: Slideshow */}
          <div className="relative h-96 lg:h-full min-h-screen rounded-lg overflow-hidden group order-1 lg:order-2">
            {bestSellers.map((product, index) => (
              <div
                key={product.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
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
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? "bg-primary" : "bg-primary/30"
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
