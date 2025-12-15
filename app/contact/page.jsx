  "use client"

import { useState } from "react"
import { PhoneCall, EnvelopeSimple, MapPinArea } from "@phosphor-icons/react"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-semibold font-cinzel-decorative tracking-tight mb-4">Get in Touch</h1>
          <p className="text-lg text-foreground/70 mx-auto font-ghrathe font-light max-w-2xl">
            Have a question or business inquiry? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl text-primary font-cinzel font-semibold mb-6">Our Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <EnvelopeSimple className="text-foreground flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-light text-foreground font-boston-caps mb-1">Email</h3>
                    <a
                      href="mailto:info@luxecollections.com"
                      className="text-foreground/70 font-ghrathe hover:text-primary duration-400 transition-colors"
                    >
                      info@luxecollections.com
                    </a>
                    <br />
                    <a
                      href="mailto:business@luxecollections.com"
                      className="text-foreground/70 font-ghrathe hover:text-primary duration-400 transition-colors"
                    >
                      business@luxecollections.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <PhoneCall className="text-foreground flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-light font-boston-caps mb-1">Phone</h3>
                    <a href="tel:+212693772445" className="font-ghrathe text-foreground/70 hover:text-primary duration-400 transition-colors">
                      +212 693 772-445
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPinArea className="text-foreground flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-light font-boston-caps mb-1">Address</h3>
                    <a href="https://maps.app.goo.gl/U81axV33EifsTBQ1A" className="text-foreground/70 font-ghrathe hover:text-primary transition-colors duration-400">5th Avenue, Suite 1000 New York, NY 10001</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-primary text-2xl font-cinzel mb-6">Business Hours</h3>
              <div className="space-y-2 font-ghrathe text-xl text-foreground/70">
                <p><span className="text-foreground">Monday - Friday:</span> 9:00 AM - 6:00 PM EST</p>
                <p><span className="text-foreground">Saturday:</span> 10:00 AM - 4:00 PM EST</p>
                <p><span className="text-foreground">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary/40 rounded-4xl p-8 max-w-auto">
            <h2 className="text-2xl font-cinzel font-semibold mb-6">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 font-cinzel font-semibold text-center bg-primary text-background rounded-xl animate-pulse">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-md font-boston-caps font-medium -ml-2 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="font-boston-caps text-primary w-full bg-background rounded-xl px-4 py-1 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-md font-boston-caps font-medium -ml-2 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="font-boston-caps text-primary w-full bg-background rounded-xl px-4 py-1 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-md font-boston-caps font-medium -ml-2 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="font-boston-caps text-primary w-full bg-background rounded-xl px-4 py-1 focus:outline-none"
                  placeholder="Inquiry subject"
                />
              </div>

              <div>
                <label className="block text-md font-boston-caps font-medium -ml-2 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="font-boston-caps text-primary w-full bg-background rounded-xl px-4 py-1 focus:outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-background border border-foreground text-foreground py-2 rounded-xl hover:bg-primary hover:border-primary hover:text-background transition-colors duration-400 font-cinzel-decorative font-semibold"
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
