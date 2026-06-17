"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    venue: "",
    guestCount: "",
    services: [] as string[],
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-luxury-charcoal text-luxury-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold to-luxury-burgundy" />
        </div>
        <div className="container-luxury relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Let's Create Something Beautiful
            </h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80 leading-relaxed">
              Share your vision with us and let's start planning your unforgettable celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-luxury-charcoal mb-6">
                  Get In Touch
                </h2>
                <p className="text-luxury-charcoal/70 leading-relaxed mb-8">
                  We'd love to hear about your wedding plans. Contact us today for a free consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-luxury-charcoal mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+441234567890"
                      className="text-luxury-charcoal/70 hover:text-luxury-gold transition-colors"
                    >
                      +44 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-luxury-charcoal mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@divineevents.co.uk"
                      className="text-luxury-charcoal/70 hover:text-luxury-gold transition-colors"
                    >
                      info@divineevents.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-luxury-charcoal mb-1">
                      Location
                    </h3>
                    <p className="text-luxury-charcoal/70">
                      Leicester, United Kingdom
                      <br />
                      Serving UK Nationwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-luxury-charcoal mb-1">
                      Hours
                    </h3>
                    <p className="text-luxury-charcoal/70">
                      Monday - Friday: 9am - 6pm
                      <br />
                      Saturday: 10am - 4pm
                      <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-luxury-gold/10 rounded-lg p-6 border border-luxury-gold/20">
                <h3 className="font-display font-semibold text-luxury-charcoal mb-3">
                  Prefer WhatsApp?
                </h3>
                <p className="text-luxury-charcoal/70 mb-4">
                  Get instant responses to your queries
                </p>
                <Button
                  variant="luxury"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://wa.me/441234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="premium-card p-8 md:p-12">
                <h2 className="text-3xl font-display font-bold text-luxury-charcoal mb-8">
                  Request Your Free Consultation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-luxury-charcoal font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-luxury-gold/20 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-luxury-charcoal font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-luxury-gold/20 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-luxury-charcoal font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-luxury-gold/20 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-colors"
                      placeholder="+44"
                    />
                  </div>

                  <div>
                    <label className="block text-luxury-charcoal font-medium mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-luxury-gold/20 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-luxury-charcoal font-medium mb-2">
                      Event Type *
                    </label>
                    <select
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-luxury-gold/20 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-colors"
                    >
                      <option value="">Select event type</option>
                      <option value="hindu-wedding">Hindu Wedding</option>
                      <option value="sikh-wedding">Sikh Wedding</option>
                      <option value="muslim-wedding">Muslim Wedding</option>
                      <option value="engagement">Engagement</option>
                      <option value="reception">Reception</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-luxury-charcoal font-medium mb-2">
                      Venue Location
                    </label>
                    <input
                      type="text"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-luxury-gold/20 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-colors"
                      placeholder="Leicester, Birmingham, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-luxury-charcoal font-medium mb-2">
                      Guest Count
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-luxury-gold/20 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-colors"
                    >
                      <option value="">Select guest count</option>
                      <option value="0-100">0-100 guests</option>
                      <option value="100-200">100-200 guests</option>
                      <option value="200-300">200-300 guests</option>
                      <option value="300-500">300-500 guests</option>
                      <option value="500+">500+ guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-luxury-charcoal font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-luxury-gold/20 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="5000-10000">£5,000 - £10,000</option>
                      <option value="10000-20000">£10,000 - £20,000</option>
                      <option value="20000-50000">£20,000 - £50,000</option>
                      <option value="50000+">£50,000+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-luxury-charcoal font-medium mb-3">
                    Services Required *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-5 h-5 rounded border-luxury-gold/20 text-luxury-gold focus:ring-luxury-gold/20"
                        />
                        <span className="text-luxury-charcoal/80">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-luxury-charcoal font-medium mb-2">
                    Additional Details
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-luxury-gold/20 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-colors resize-none"
                    placeholder="Tell us about your vision, special requirements, or any questions you have..."
                  />
                </div>

                <Button type="submit" variant="luxury" size="xl" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Enquiry
                </Button>

                <p className="text-luxury-charcoal/60 text-sm text-center mt-4">
                  We'll respond within 24 hours. Your information is kept confidential.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const services = [
  "Mandap Hire",
  "Wedding Decor",
  "Stage Design",
  "DJ Entertainment",
  "Lighting",
  "Floral Design",
  "Dance Floor",
  "LED Screens",
  "Complete Package",
];

// Made with Bob
