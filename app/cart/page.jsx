"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/useCart"
import { Trash2, Plus, Minus } from "lucide-react"
import { useState, useEffect } from "react"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()
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
        <h1 className="text-5xl font-light tracking-tight mb-12">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-6">Your cart is empty</p>
            <Link
              href="/collection"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-secondary rounded-lg p-6 flex gap-6">
                  <div className="relative w-32 h-32 bg-muted rounded overflow-hidden flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-light mb-1">{item.name}</h3>
                    <p className="text-muted-foreground mb-4">${item.price}</p>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-muted-foreground hover:text-foreground"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-1 border-l border-r border-border">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-muted-foreground hover:text-foreground"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <span className="text-primary font-light">${item.price * item.quantity}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive/80 transition-colors flex-shrink-0"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-secondary rounded-lg p-8 h-fit sticky top-24">
              <h2 className="text-2xl font-light mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-primary">FREE</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl mb-6">
                <span className="font-light">Total</span>
                <span className="text-primary">${(cartTotal * 1.1).toFixed(2)}</span>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-primary text-primary-foreground py-3 hover:opacity-90 transition-opacity">
                  Proceed to Checkout
                </button>
                <button className="w-full border border-primary text-primary hover:bg-primary/10 transition-colors py-3">
                  Cash on Delivery
                </button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                Free shipping on orders over $500. Delivery within 5-7 business days.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
