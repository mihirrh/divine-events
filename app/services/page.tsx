"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Our Luxury Services
            </h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80 leading-relaxed">
              From bespoke mandaps to complete event production, we create unforgettable 
              celebrations that honor your traditions and exceed your expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="premium-card p-8 h-full group cursor-pointer">
                    <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-luxury-gold/20 transition-colors">
                      <service.icon className="w-8 h-8 text-luxury-gold" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-luxury-charcoal mb-4">
                      {service.title}
                    </h3>
                    <p className="text-luxury-charcoal/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-luxury-gold font-medium group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Heart className="w-16 h-16 text-luxury-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Create Your Dream Wedding?
            </h2>
            <p className="text-xl text-luxury-cream/80 mb-8">
              Let's discuss your vision and create a bespoke celebration that reflects 
              your style and honors your traditions.
            </p>
            <Button variant="luxury" size="xl" asChild>
              <Link href="/contact">
                Request Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const services = [
  {
    title: "Luxury Mandap Hire",
    description:
      "Exquisite handcrafted mandaps featuring intricate designs, premium materials, and bespoke customization for your perfect ceremony.",
    icon: Sparkles,
    href: "/services/mandap-hire",
  },
  {
    title: "Wedding Decor",
    description:
      "Complete venue transformation with luxury floral installations, elegant draping, and sophisticated styling tailored to your vision.",
    icon: Heart,
    href: "/services/wedding-decor",
  },
  {
    title: "Stage Design",
    description:
      "Stunning reception stages with premium backdrops, luxury seating, and dramatic lighting to create unforgettable moments.",
    icon: Star,
    href: "/services/stage-design",
  },
  {
    title: "DJ Entertainment",
    description:
      "Professional DJs with extensive Asian wedding experience, premium sound systems, and curated playlists for every celebration.",
    icon: Sparkles,
    href: "/services/dj-entertainment",
  },
  {
    title: "Lighting Production",
    description:
      "Cinematic lighting design with intelligent fixtures, uplighting, and custom effects to enhance every moment.",
    icon: Star,
    href: "/services/lighting",
  },
  {
    title: "Complete Packages",
    description:
      "All-inclusive wedding packages combining our premium services for a seamless, stress-free celebration.",
    icon: Heart,
    href: "/services/packages",
  },
];

// Made with Bob
