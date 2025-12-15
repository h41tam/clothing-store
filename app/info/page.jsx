"use client"

import StoreMap from "@/components/store-map"

export default function InfoPage() {


  return (
    <div className="pt-20 pb-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-semibold font-cinzel-decorative tracking-tight mb-4">About Luxe Collections</h1>
          <p className="text-lg text-foreground/80 mx-auto font-ghrathe font-light max-w-2xl">
            Since 2015, we've been dedicated to bringing luxury fashion to discerning customers worldwide. Every piece
            in our collection represents our commitment to quality, elegance, and timeless style.
          </p>
        </div>

        {/* Store Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-cinzel text-primary font-semibold mb-4">Visit Our Store</h2>
          <StoreMap />
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-cinzel text-foreground font-semibold">Our Story</h2>
            <p className="text-foreground/70 text-justify text-lg hyphens-auto font-ghrathe leading-relaxed">
              Manal Store began with a vision: to create a curated space where fashion enthusiasts could find
              premium clothing crafted with exceptional attention to detail. We believe that luxury is not about excess,
              but about quality, craftsmanship, and timeless elegance.
            </p>
            <p className="text-foreground/70 text-justify text-lg hyphens-auto font-ghrathe leading-relaxed">
              Each piece in our collection is carefully selected from designers and brands that share our values of
              sustainability, craftsmanship, and innovation. We work directly with artisans and manufacturers who
              prioritize quality over quantity.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-cinzel text-foreground font-semibold">Our Mission</h2>
            <p className="text-foreground/70 text-justify text-lg hyphens-auto font-ghrathe leading-relaxed">
              To empower individuals to express their unique style through premium, sustainably-crafted clothing that
              transcends trends and seasons.
            </p>
            <div className="bg-secondary/40 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-primary font-boston-caps text-2xl font-semibold mb-2">Quality</h3>
                <p className="text-sm font-ghrathe text-foreground/70">
                  Every fabric is tested and every stitch is inspected to ensure the highest standards.
                </p>
              </div>
              <div>
                <h3 className="text-primary font-boston-caps text-2xl font-semibold mb-2">Sustainability</h3>
                <p className="text-sm font-ghrathe text-foreground/70">
                  We partner with ethical manufacturers and source materials responsibly.
                </p>
              </div>
              <div>
                <h3 className="text-primary font-boston-caps text-2xl font-semibold mb-2">Service</h3>
                <p className="text-sm font-ghrathe text-foreground/70">
                  Your satisfaction is our priority. Exceptional customer service in every interaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Loyalty Program */}
        <div className="mb-20">
          <h2 className="text-3xl font-cinzel font-semibold mb-10 text-center">
            Loyalty Rewards Program
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-secondary/40 rounded-2xl p-8 text-center hover:cursor-pointer group hover:bg-foreground duration-200 transition-colors">
              <span className="text-4xl font-light text-primary font-ghrathe group-hover:text-background">01</span>
              <h3 className="mt-4 mb-2 text-xl font-ghrathe font-light group-hover:text-background">Shop & Spend</h3>
              <p className="text-foreground/70 text-sm font-ghrathe group-hover:text-background"> 
                For every <span className="text-primary font-ghrathe font-medium">300 DH</span> spent in-store or online, you earn a reward.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-secondary/40 rounded-2xl p-8 text-center hover:cursor-pointer group hover:bg-foreground duration-200 transition-colors">
              <span className="text-4xl font-light text-primary font-ghrathe group-hover:text-background">02</span>
              <h3 className="mt-4 mb-2 text-xl font-ghrathe font-light group-hover:text-background">Earn Coupons</h3>
              <p className="text-foreground/70 text-sm font-ghrathe group-hover:text-background"> 
                Receive a <span className="text-primary font-ghrathe font-medium">50 DH coupon</span> automatically added to your account.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-secondary/40 rounded-2xl p-8 text-center hover:cursor-pointer group hover:bg-foreground duration-200 transition-colors">
              <span className="text-4xl font-light text-primary font-ghrathe group-hover:text-background">03</span>
              <h3 className="mt-4 mb-2 text-xl font-ghrathe font-light group-hover:text-background">Save on Your Next Order</h3>
              <p className="text-foreground/70 text-sm font-ghrathe group-hover:text-background">
                Use your coupon on your next purchase and enjoy exclusive savings.
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            * Coupons are cumulative and valid according to store conditions.
          </p>
        </div>


        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">Crafted with Care</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team consists of passionate fashion professionals, designers, and style experts dedicated to providing
            you with an exceptional experience.
          </p>
        </div>
      </div>
    </div>
  )
}
