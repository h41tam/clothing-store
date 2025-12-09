"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="pt-20 pb-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-light tracking-tight mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have a question or business inquiry? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@luxecollections.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@luxecollections.com
                    </a>
                    <br />
                    <a
                      href="mailto:business@luxecollections.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      business@luxecollections.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">5th Avenue, Suite 1000 New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-light mb-6">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-primary/10 text-primary rounded-lg animate-pulse">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded px-4 py-2 focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded px-4 py-2 focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded px-4 py-2 focus:outline-none focus:border-primary"
                  placeholder="Inquiry subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-background border border-border rounded px-4 py-2 focus:outline-none focus:border-primary resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded hover:opacity-90 transition-opacity font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
