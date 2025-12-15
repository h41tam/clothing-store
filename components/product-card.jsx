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
    <div className="bg-secondary/60 hover:cursor-pointer rounded-lg overflow-hidden hover:bg-primary transition-colors duration-300 group animate-fadeInUp">
      <div className="relative font-kastroo h-64 bg-muted overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <p className="text-xs -ml-2 -mt-2 font-semibold text-primary group-hover:text-background transition-colors font-cinzel tracking-wider transition-colors duration-300 mb-2">{product.category.toUpperCase()}</p>
        <h3 className="text-lg text-center font-bold mb-2 text-foreground/80 font-cinzel group-hover:text-background transition-colors font-cinzel duration-300">{product.name}</h3>
        <p className="text-foreground/50 group-hover:text-background font-semibold text-center transition-colors font-cinzel text-xs mb-4 duration-300">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl lg:text-3xl xs:-ml-4 font-light group-hover:text-background transition-colors font-kastroo text-foreground/80 duration-300">{product.price} MAD</span>
          <select className="w-8 text-center py-2 mx-2 border-2 font-ghrathe border-foreground/80 rounded-md bg-secondary"
          >
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="S">S</option>
          </select>
          <button
            onClick={handleAddToCart}
            className=" text-foreground/80 group-hover:text-background group-hover:border-background group-hover:bg-primary hover:cursor-pointer p-2 rounded-lg hover:bg-background hover:text-primary transition-colors duration-400 relative border-2 border-foreground/80"
          >
            <ShoppingBag size={20} />
            {addedNotif && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap animate-bounce font-light font-ghrathe">
                Added to cart
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
