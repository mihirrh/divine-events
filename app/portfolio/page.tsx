"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function PortfolioPage() {
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
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80">
              Explore our collection of luxury Asian weddings across the UK.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="premium-card overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-luxury-gold/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/30 to-luxury-burgundy/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-luxury-charcoal mb-2">
                    Wedding {item}
                  </h3>
                  <p className="text-luxury-charcoal/70">
                    Luxury celebration in Leicester
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Create Your Story?
          </h2>
          <Button variant="luxury" size="xl" asChild>
            <Link href="/contact">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Made with Bob
