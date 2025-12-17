"use client"

import Image from "next/image"
import { useCart } from "@/lib/useCart"
import { ShoppingCart } from "@phosphor-icons/react"
import { useState } from "react"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [addedNotif, setAddedNotif] = useState(false)
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  const [size, setSize] = useState(
    Array.isArray(product.sizes) && product.sizes.length ? product.sizes[0] : ""
  )
  const [color, setColor] = useState(
    Array.isArray(product.colors) && product.colors.length ? product.colors[0] : ""
  )

  const handleAddToCart = () => {
    addToCart(product, { size, color }, 1)
    setAddedNotif(true)
    setTimeout(() => setAddedNotif(false), 2000)
  }

  return (
    <div className="bg-secondary/60 hover:cursor-pointer rounded-lg overflow-hidden hover:bg-primary transition-colors duration-300 group animate-fadeInUp">
      <div className="relative font-kastroo h-64 bg-muted overflow-hidden" onClick={() => setQuickViewOpen(true)}>
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
          <button
            onClick={() => setQuickViewOpen(true)}
            className=" text-foreground/80 group-hover:text-background group-hover:border-background group-hover:bg-primary hover:cursor-pointer p-2 rounded-lg hover:bg-background hover:text-primary transition-colors duration-400 relative border-2 border-foreground/80"
          >
            <ShoppingCart size={20} />
            {addedNotif && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap animate-bounce font-light font-ghrathe">
                Added to cart
              </span>
            )}
          </button>
        </div>
      </div>
      {quickViewOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-background rounded-xl w-full max-w-lg overflow-hidden">
            <div className="relative w-full h-56 bg-secondary/40">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-6 space-y-4">
              <h4 className="text-2xl font-cinzel font-semibold">{product.name}</h4>
              <p className="text-sm font-cinzel text-muted-foreground">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-kastroo">{product.price} MAD</span>
                <span className={`text-sm font-ghrathe ${product.stock > 0 ? "text-primary" : "text-destructive"}`}>
                  {product.stock > 0 ? "en stock" : "non Disponible"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-cinzel text-sm mb-1">Taille</label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full bg-secondary/50 border border-border font-rodfat rounded px-3 py-2"
                  >
                    {(product.sizes && product.sizes.length ? product.sizes : [""]).map((s) => (
                      <option key={s} value={s}>
                        {s || "Unique"}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-cinzel text-sm mb-1">Couleur</label>
                  <select
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full bg-secondary/50 border border-border font-rodfat rounded px-3 py-2"
                  >
                    {(product.colors && product.colors.length ? product.colors : [""]).map((c) => (
                      <option key={c} value={c}>
                        {c || "Standard"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setQuickViewOpen(false)}
                  className="px-4 py-2 font-rodfat hover:cursor-pointer border-2 border-primary rounded-xl text-primary hover:border-foreground transition-colors duration-400 hover:bg-foreground hover:text-background"
                >
                  Fermer
                </button>
                <button
                  onClick={() => {
                    handleAddToCart()
                    setQuickViewOpen(false)
                  }}
                  disabled={product.stock <= 0}
                  className="px-4 py-2 bg-primary border-2 border-primary hover:cursor-pointer font-rodfat text-primary-foreground rounded-xl disabled:bg-secondary/50 disabled:border-secondary/10"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
