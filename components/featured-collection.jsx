"use client"

import Link from "next/link"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"
import { CoatHanger } from "@phosphor-icons/react"

export default function FeaturedCollection() {
  const featured = [products[0], products[1], products[3], products[7]]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light font-cinzel-decorative tracking-tight mb-4">This Week's Theme</h2>
          <p className="text-foreground/70 font-cinzel max-w-2xl mx-auto">Flex your style with our latest collection.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/collection"
            className="group px-6 py-3 relative text-lg border rounded-xl border-foreground text-foreground hover:border-primary duration-300 transition-colors text-center hover:text-background font-cinzel-decorative font-semibold hover:bg-primary"
          >
              <CoatHanger size={23} className="relative inline-block mr-3 mb-0.5" />
            More
            
          </Link>
        </div>
      </div>
    </section>
  )
}
