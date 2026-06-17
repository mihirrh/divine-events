"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Star, Award, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function AboutPage() {
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
              About Divine Events
            </h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80">
              Creating unforgettable luxury Asian wedding experiences across the UK for over a decade.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <div className="text-4xl font-display font-bold text-luxury-charcoal mb-2">
                  {stat.value}
                </div>
                <div className="text-luxury-charcoal/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury text-center">
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

const stats = [
  { icon: Heart, value: "500+", label: "Weddings Created" },
  { icon: Star, value: "5-Star", label: "Average Rating" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "100%", label: "Client Satisfaction" },
];

// Made with Bob
