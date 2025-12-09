"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/useCart"
import { ShoppingBag } from "lucide-react"
import { bestSellers } from "@/lib/products"

export default function FeaturedCollection() {
  const { addToCart } = useCart()

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light tracking-tight mb-4">Our Best Sellers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the pieces our clients love most. Each item is a testament to luxury and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="group bg-secondary rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-light mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-primary">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-primary text-primary-foreground p-2 rounded hover:opacity-90 transition-opacity"
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/collection"
            className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
