import Image from "next/image"

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="/why-choose-us-luxury-service.jpg" alt="Luxury service" fill className="object-cover" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-light tracking-tight mb-6">Why Choose Luxe</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Every piece is carefully selected for its superior craftsmanship and materials.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Luxury Experience</h3>
                <p className="text-muted-foreground">
                  From browsing to delivery, we ensure an exceptional experience every step of the way.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Timeless Design</h3>
                <p className="text-muted-foreground">
                  Our collection features pieces that transcend trends and seasons.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Sustainable Fashion</h3>
                <p className="text-muted-foreground">
                  We believe in responsible luxury with ethical sourcing and production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
