"use client"

import { useState, useEffect } from "react"

export function useCart() {
  const [cart, setCart] = useState([])
  const [mounted, setMounted] = useState(false)
  const buildKey = (id, size = "", color = "") => `${id}|${size}|${color}`

  // Load cart from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart, mounted])

  const addToCart = (product, options = {}, quantity = 1) => {
    const size = options.size ?? (Array.isArray(product.sizes) && product.sizes.length ? product.sizes[0] : "")
    const color = options.color ?? (Array.isArray(product.colors) && product.colors.length ? product.colors[0] : "")
    const key = buildKey(product.id, size, color)
    setCart((prev) => {
      const existing = prev.find((item) => item.key === key)
      if (existing) {
        return prev.map((item) => (item.key === key ? { ...item, quantity: item.quantity + quantity } : item))
      }
      return [
        ...prev,
        {
          ...product,
          quantity,
          selectedSize: size,
          selectedColor: color,
          key,
        },
      ]
    })
  }

  const removeFromCart = (key) => {
    setCart((prev) => prev.filter((item) => item.key !== key))
  }

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      removeFromCart(key)
    } else {
      setCart((prev) => prev.map((item) => (item.key === key ? { ...item, quantity } : item)))
    }
  }

  const updateItemVariant = (key, size, color) => {
    setCart((prev) => {
      const item = prev.find((i) => i.key === key)
      if (!item) return prev
      const newKey = buildKey(item.id, size, color)
      const existing = prev.find((i) => i.key === newKey)
      if (existing) {
        return prev
          .filter((i) => i.key !== key && i.key !== newKey)
          .concat({
            ...existing,
            quantity: existing.quantity + item.quantity,
          })
      }
      return prev.map((i) =>
        i.key === key
          ? {
              ...i,
              selectedSize: size,
              selectedColor: color,
              key: newKey,
            }
          : i
      )
    })
  }

  const clearCart = () => {
    setCart([])
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateItemVariant,
    clearCart,
    cartCount,
    cartTotal,
  }
}
