"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/useCart"
import { Trash, Plus, Minus } from "@phosphor-icons/react"
import { useState, useEffect } from "react"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, updateItemVariant, cartTotal } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="pt-20 pb-12 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-96 flex items-center justify-center">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 pb-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-semibold font-cinzel-decorative tracking-tight mb-12">Votre Panier</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl text-foreground/70 mb-6 font-ghrathe">Votre panier est vide</p>
            <Link
              href="/collection"
              className="inline-block group px-8 py-3 relative text-lg rounded-xl border border-foreground/80 text-foreground/80 hover:border-primary duration-300 transition-colors text-center hover:text-background font-rodfat font-bold hover:bg-primary"
            >
              Continuer vos achats
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.key} className="bg-secondary/60 rounded-lg overflow-hidden hover:bg-primary transition-colors duration-300 group p-6 flex gap-6">
                  <div className="relative w-32 h-32 bg-muted rounded overflow-hidden flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-cinzel font-semibold mb-1 text-foreground/80 group-hover:text-background transition-colors duration-300">{item.name}</h3>
                    <p className="text-foreground/60 font-kastroo mb-4 group-hover:text-background transition-colors duration-300">${item.price}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <label className="block text-xs mb-1 font-cinzel">Taille</label>
                        <select
                          value={item.selectedSize || ""}
                          onChange={(e) => updateItemVariant(item.key, e.target.value, item.selectedColor || "")}
                          className="bg-background border border-border rounded px-2 py-1 font-kastroo"
                        >
                          {(item.sizes && item.sizes.length ? item.sizes : [""]).map((s) => (
                            <option key={s} value={s}>
                              {s || "Unique"}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs mb-1 font-cinzel">Couleur</label>
                        <select
                          value={item.selectedColor || ""}
                          onChange={(e) => updateItemVariant(item.key, item.selectedSize || "", e.target.value)}
                          className="bg-background border border-border rounded px-2 py-1 font-kastroo"
                        >
                          {(item.colors && item.colors.length ? item.colors : [""]).map((c) => (
                            <option key={c} value={c}>
                              {c || "Standard"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1 text-muted-foreground hover:text-foreground"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-1 border-l border-r border-border font-kastroo">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1 text-muted-foreground hover:text-foreground"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <span className="text-primary font-kastroo">${item.price * item.quantity}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.key)}
                    className="text-destructive hover:text-destructive/80 transition-colors flex-shrink-0"
                  >
                    <Trash size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-secondary/60 rounded-lg p-8 h-fit sticky top-24">
              <h2 className="text-3xl font-cinzel font-semibold mb-6 text-foreground/80">Recapitulatif</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-muted-foreground font-cinzel">
                  <span>Sous-total</span>
                  <span className="font-kastroo">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground font-cinzel">
                  <span>Livraison</span>
                  <span className="text-primary font-rodfat">GRATUIT</span>
                </div>
                <div className="flex justify-between text-muted-foreground font-cinzel">
                  <span>Taxe</span>
                  <span className="font-kastroo">${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl mb-6 font-cinzel">
                <span className="font-light">Total</span>
                <span className="text-primary font-kastroo">${(cartTotal * 1.1).toFixed(2)}</span>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-primary text-primary-foreground py-3 hover:opacity-90 transition-opacity font-rodfat rounded-lg">
                  Passer au paiement
                </button>
                <button className="w-full border border-primary text-primary hover:bg-primary/10 transition-colors py-3 font-rodfat rounded-lg">
                  Paiement à la livraison
                </button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                Livraison gratuite pour les commandes de plus de $500. Délai 5-7 jours ouvrables.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
