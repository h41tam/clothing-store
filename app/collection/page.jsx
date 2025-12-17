"use client"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"
import { useMemo, useState } from "react"

export default function CollectionPage() {
  const [q, setQ] = useState("")
  const [category, setCategory] = useState("categorie")
  const [sex, setSex] = useState("sex")

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category))
    return ["categorie", ...Array.from(set)]
  }, [])
  const sexes = useMemo(() => {
    const set = new Set(products.map((p) => p.sex || "unisex"))
    return ["sex", ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return products.filter((p) => {
      const matchesName = !query || p.name.toLowerCase().includes(query)
      const matchesCategory = category === "categorie" || p.category === category
      const matchesSex = sex === "sex" || (p.sex || "unisex") === sex
      return matchesName && matchesCategory && matchesSex
    })
  }, [q, category, sex])

  return (
    <div className="pt-20 pb-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-semibold font-cinzel-decorative text-center tracking-tight mb-4">Notre Collection</h1>
          <p className="text-2xl text-foreground/70 mx-auto font-ghrathe font-light max-w-2xl">
            Trouvez ce que vous cherchez d'apres notre vaste collection
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="sm:col-span-2">
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products by name..."
              className="w-full bg-background border border-border rounded px-4 py-2 focus:outline-none focus:border-primary font-ghrathe"
            />
          </div>
          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-background border border-border rounded px-4 py-2 focus:outline-none focus:border-primary font-ghrathe"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className="w-full bg-background border border-border rounded px-4 py-2 focus:outline-none focus:border-primary font-ghrathe"
            >
              {sexes.map((s) => (
                <option key={s} value={s}>
                  {s.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
