"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function LocationsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Our Locations
            </h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80">
              Serving luxury Asian weddings across the UK with the same exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={location.href}>
                  <div className="premium-card p-8 group cursor-pointer">
                    <MapPin className="w-12 h-12 text-luxury-gold mb-4" />
                    <h3 className="text-2xl font-display font-semibold text-luxury-charcoal mb-3">
                      {location.name}
                    </h3>
                    <p className="text-luxury-charcoal/70 mb-4">
                      {location.description}
                    </p>
                    <div className="flex items-center text-luxury-gold font-medium group-hover:translate-x-2 transition-transform">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Plan Your Wedding?
          </h2>
          <Button variant="luxury" size="xl" asChild>
            <Link href="/contact">
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const locations = [
  {
    name: "Leicester",
    description: "Our home base serving Leicester and the East Midlands with premium wedding services.",
    href: "/locations/leicester",
  },
  {
    name: "Birmingham",
    description: "Luxury Asian wedding decor across Birmingham and the West Midlands.",
    href: "/locations/birmingham",
  },
  {
    name: "London",
    description: "Premium wedding services for London's vibrant Asian community.",
    href: "/locations/london",
  },
  {
    name: "Nottingham",
    description: "Elegant wedding celebrations throughout Nottingham and surrounding areas.",
    href: "/locations/nottingham",
  },
  {
    name: "Derby",
    description: "Bespoke wedding decor services for Derby and Derbyshire.",
    href: "/locations/derby",
  },
  {
    name: "Coventry",
    description: "Luxury mandap hire and wedding services across Coventry.",
    href: "/locations/coventry",
  },
];

// Made with Bob
