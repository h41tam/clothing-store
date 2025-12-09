import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function CollectionPage() {
  return (
    <div className="pt-20 pb-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-light tracking-tight mb-4">Our Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our complete collection of premium luxury clothing, each piece selected for its exceptional quality
            and timeless appeal.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
