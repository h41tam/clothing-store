"use client"

import Image from "next/image"
import { useCart } from "@/lib/useCart"
import { ShoppingBag } from "lucide-react"
import { useState } from "react"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [addedNotif, setAddedNotif] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setAddedNotif(true)
    setTimeout(() => setAddedNotif(false), 2000)
  }

  return (
    <div className="bg-secondary rounded-lg overflow-hidden hover:shadow-xl transition-shadow group animate-fadeInUp">
      <div className="relative h-64 bg-muted overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <p className="text-xs text-primary tracking-wider mb-2">{product.category.toUpperCase()}</p>
        <h3 className="text-lg font-light mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-light text-primary">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-primary text-primary-foreground p-2 rounded hover:opacity-90 transition-opacity relative"
          >
            <ShoppingBag size={20} />
            {addedNotif && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap animate-pulse">
                Added to cart
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
