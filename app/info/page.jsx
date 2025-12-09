"use client"

import { Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

export default function InfoPage() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <div className="pt-20 pb-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-light tracking-tight mb-4">About Luxe Collections</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Since 2015, we've been dedicated to bringing luxury fashion to discerning customers worldwide. Every piece
            in our collection represents our commitment to quality, elegance, and timeless style.
          </p>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-light">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Luxe Collections began with a vision: to create a curated space where fashion enthusiasts could find
              premium clothing crafted with exceptional attention to detail. We believe that luxury is not about excess,
              but about quality, craftsmanship, and timeless elegance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each piece in our collection is carefully selected from designers and brands that share our values of
              sustainability, craftsmanship, and innovation. We work directly with artisans and manufacturers who
              prioritize quality over quantity.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-light">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower individuals to express their unique style through premium, sustainably-crafted clothing that
              transcends trends and seasons.
            </p>
            <div className="bg-secondary rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-primary font-semibold mb-2">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Every fabric is tested and every stitch is inspected to ensure the highest standards.
                </p>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  We partner with ethical manufacturers and source materials responsibly.
                </p>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-2">Service</h3>
                <p className="text-sm text-muted-foreground">
                  Your satisfaction is our priority. Exceptional customer service in every interaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-light mb-6">Visit Us</h2>
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-2">Flagship Store</h3>
                <p className="text-muted-foreground">
                  5th Avenue, Suite 1000
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-8900
                  </a>
                  <br />
                  <a href="mailto:info@luxecollections.com" className="hover:text-primary transition-colors">
                    info@luxecollections.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-light mb-6">Follow Our Journey</h2>
            <p className="text-muted-foreground mb-6">
              Stay updated with new collections, style tips, and exclusive offers by following us on social media.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
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
