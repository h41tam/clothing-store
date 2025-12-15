"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCart } from "@/lib/useCart"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"
import { Info, HouseLine, CoatHanger, Phone } from "@phosphor-icons/react"

export default function Navbar() {
  const pathname = usePathname()
  const { cartCount } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/collection", label: "Collection" },
    { href: "/contact", label: "Contact" },
    { href: "/info", label: "Info" },
  ]

  const isActive = (href) => pathname === href

  return (
    <nav className="fixed top-0 w-full bg-background border-b border-border z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex hover:scale-105 transition-transform duration-500 items-center gap-2 group">
            <div className="w-10 h-10 bg-background rounded-sm flex items-center justify-center">
              <span className="text-foreground group-hover:text-primary font-rodfat font-bold transition-colors duration-400 text-4xl">M</span>
            </div>
            <span className="hidden sm:inline-block text-xl font-semibold font-kastroo tracking-wide leading-none text-foreground group-hover:text-primary transition-colors duration-400">
              MANAL <br />
              STORE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon =
                link.label === "Home" ? HouseLine :
                  link.label === "Collection" ? CoatHanger :
                    link.label === "Contact" ? Phone :
                      Info
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-lg font-boston-caps tracking-wide transition-colors md:pl-8 ${isActive(link.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                  <span className="hidden md:inline-block mx-2 align-middle relative" suppressHydrationWarning>
                    <Icon size={16} className="absolute left-[-12px] top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100" />
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Cart Icon and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative text-foreground hover:text-primary transition-colors">
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground font-ghrathe w-5 h-5 rounded-full flex items-center justify-center text-xs font-light">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 text-center border-t border-border animate-slideDown">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 font-boston-caps text-2xl tracking-wide transition-colors ${isActive(link.href)
                  ? "text-primary bg-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
