"use client"

import { useEffect, useState, useMemo } from "react"
import Image from "next/image"
import { ShoppingCart } from "@phosphor-icons/react"
import { products } from "@/lib/products"

const storyVideos = [
  { productId: 1, src: "/videos/gown.mp4" },
  { productId: 2, src: "/videos/coat.mp4" },
  { productId: 3, src: "/videos/sweater.mp4" },
  { productId: 4, src: "/videos/blazer.mp4" },
]

export default function ProductStory() {
  const [current, setCurrent] = useState(0)

  // Auto-play / loop stories
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % storyVideos.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // Current product synced with video
  const currentProduct = useMemo(() => {
    return products.find(
      (p) => p.id === storyVideos[current].productId
    )
  }, [current])

  if (!currentProduct) return null

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — Video Player */}
        <div className="relative aspect-[9/16] max-h-[520px] rounded-2xl overflow-hidden shadow-soft">
          <video
            key={storyVideos[current].src}
            src={storyVideos[current].src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT — Product Card */}
        <div className="bg-surface border border-border rounded-2xl p-8 shadow-soft transition-all duration-500 animate-fadeInUp">

          {/* Image */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
            <Image
              src={currentProduct.image}
              alt={currentProduct.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <h3 className="text-2xl font-cinzel-decorative font-semibold mb-2">
            {currentProduct.name}
          </h3>

          <p className="text-foreground/70 mb-4">
            {currentProduct.description}
          </p>

          {/* Price */}
          <p className="text-xl font-semibold text-primary mb-6">
            {currentProduct.price} MAD
          </p>

          {/* Colors */}
          <div className="mb-4">
            <span className="text-sm font-medium">Couleurs</span>
            <div className="flex gap-2 mt-2">
              {currentProduct.colors.map((color) => (
                <span
                  key={color}
                  className="px-3 py-1 text-xs rounded-full border border-border bg-background"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Sizes */}
          {currentProduct.sizes.length > 0 && (
            <div className="mb-6">
              <span className="text-sm font-medium">Tailles</span>
              <div className="flex gap-2 mt-2 flex-wrap">
                {currentProduct.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1 text-xs rounded-full border border-border bg-background"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <button
            disabled={currentProduct.stock === 0}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-primary text-background font-medium hover:bg-primaryMuted transition disabled:opacity-50"
          >
            <ShoppingCart size={22} />
            {currentProduct.stock === 0 ? "Rupture de stock" : "Ajouter au panier"}
          </button>
        </div>
      </div>
    </section>
  )
}
