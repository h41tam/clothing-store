import Link from "next/link"
import {
  XLogo, Mailbox, FacebookLogo,
  InstagramLogo, MapPinArea,
  CoatHanger, Phone, Info,
  HouseLine, ShoppingCart
} from "@phosphor-icons/react"
export default function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-20 lg:px-20 py-5 lg:py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-rodfat tracking-wider text-foreground/90 mb-4 text-center">
              1<span className="font-ghrathe"> | </span>Number One
            </h3>
            <p className="text-lg lg:text-xl font-boston-caps text-muted-foreground text-center hover:text-primary hover:cursor-pointer transition-colors duration-400">
              on fait partie du marche depuis 2016 et nos clients nous faient confience
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-foreground/90 mb-4 font-rodfat tracking-wider text-center">
              Navigation
            </h4>
            <div className="space-y-3 font-boston-caps font-light">
              <Link href="/" className="group relative block text-lg text-muted-foreground transition-colors md:pl-8 text-center hover:text-primary duration-400">
                <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-transform duration-400 -translate-x-2 group-hover:translate-x-0 group-hover:text-primary">
                  <HouseLine size={20} />
                </span>
                Acceuil
              </Link>
              <Link href="/collection" className="group relative block text-lg text-muted-foreground transition-colors md:pl-8 text-center  hover:text-primary duration-400">
                <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-transform duration-400 -translate-x-2 group-hover:translate-x-0 group-hover:text-primary">
                  <CoatHanger size={20} />
                </span>
                Collection
              </Link>
              <Link href="/contact" className="group relative block text-lg text-muted-foreground transition-colors md:pl-8 text-center hover:text-primary duration-400">
                <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-transform duration-400 -translate-x-2 group-hover:translate-x-0 group-hover:text-primary">
                  <Phone size={20} />
                </span>
                Contact
              </Link>
              <Link href="/info" className="group relative block text-lg text-muted-foreground transition-colors md:pl-8 text-center hover:text-primary duration-400">
                <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -muted-foreground transition-transform duration-400 -translate-x-2 group-hover:translate-x-0 group-hover:text-primary">
                  <Info size={20} />
                </span>
                Info
              </Link>
              <Link href="/cart" className="group relative block text-lg text-muted-foreground transition-colors md:pl-8 text-center hover:text-primary duration-400">
                <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -muted-foreground transition-transform duration-400 -translate-x-2 group-hover:translate-x-0 group-hover:text-primary">
                  <ShoppingCart size={20} />
                </span>
                Panier
              </Link>
            </div>
          </div>

          {/* More */}
          <div>
            <h4 className="text-xl font-bold font-rodfat text-foreground/90 mb-4 tracking-wider text-center">Plus</h4>
            <div className="space-y-3 font-boston-caps font-light">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:h41tam.business@gmail.com"
                className="group relative block text-lg text-muted-foreground transition-colors md:pl-8 text-center hover:text-primary duration-400"
              >
                <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-transform duration-400 -translate-x-2 group-hover:translate-x-0 group-hover:text-primary">
                  <Mailbox size={20} />
                </span>
                numberone<span className="font-ghrathe">@</span>store.com
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://maps.app.goo.gl/U81axV33EifsTBQ1A"
                className="group relative block text-lg text-muted-foreground transition-colors md:pl-8 text-center hover:text-primary duration-400"
              >
                <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-transform duration-400 -translate-x-2 group-hover:translate-x-0 group-hover:text-primary">
                  <MapPinArea size={20} />
                </span>
                Visitez-Nous
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-bold font-rodfat text-foreground/90 mb-4 tracking-wider text-center">Reseaux Sociaux</h4>
            <div className="flex gap-4 justify-center">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-400">
                <InstagramLogo size={30} className="hover:scale-110 duration-400" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-400">
                <FacebookLogo size={30} className="hover:scale-110 duration-400" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-400">
                <XLogo size={30} className="hover:scale-110 duration-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Luxe Collections. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Designed with elegance by Creative Studio</p>
        </div>
      </div>
    </footer>
  )
}
