"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LocalBusinessSchema, ServiceSchema, FAQSchema } from "@/components/schema-markup";
import { PremiumHero } from "@/components/premium-hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LocalBusinessSchema />
      <ServiceSchema />
      <FAQSchema />
      <Navigation />

      {/* Premium Hero Section */}
      <PremiumHero />

      {/* Services Overview */}
      <section className="section-padding bg-luxury-cream relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-burgundy/5 rounded-full blur-3xl" />
        
        <div className="container-luxury relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-luxury-gold/10 border border-luxury-gold/20 rounded-full px-6 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-luxury-charcoal mb-8 leading-tight">
              Luxury Wedding Services
            </h2>
            <p className="text-xl md:text-2xl text-luxury-charcoal/70 leading-relaxed">
              From intimate ceremonies to grand celebrations, we craft bespoke experiences 
              that honor your traditions and exceed your expectations.
            </p>
          </motion.div>

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
                  <div className="premium-card p-8 h-full group cursor-pointer hover-scale">
                    <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-luxury-gold/20 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="w-8 h-8 text-luxury-gold" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-luxury-charcoal mb-4 group-hover:text-luxury-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-luxury-charcoal/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-luxury-gold font-semibold group-hover:translate-x-2 transition-transform">
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

      {/* Why Choose Us */}
      <section className="section-padding bg-luxury-charcoal text-luxury-cream relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-luxury-gold rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container-luxury relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-luxury-gold/10 border border-luxury-gold/20 rounded-full px-6 py-2 mb-6"
              >
                <Star className="w-4 h-4 text-luxury-gold fill-luxury-gold" />
                <span className="text-luxury-gold font-semibold text-sm uppercase tracking-wider">
                  Why Choose Us
                </span>
              </motion.div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
                Why Divine Events?
              </h2>
              <p className="text-xl md:text-2xl text-luxury-cream/80 leading-relaxed mb-12">
                With over a decade of experience creating luxury Asian weddings, 
                we understand the importance of every detail, every tradition, and every moment.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center group-hover:bg-luxury-gold/20 transition-all duration-300 group-hover:scale-110">
                      <CheckCircle2 className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-luxury-gold transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-luxury-cream/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-10">
                <Button variant="premium" size="xl" className="shadow-2xl" asChild>
                  <Link href="/about">
                    Discover Our Story
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-luxury-gold/20 rounded-lg overflow-hidden">
                {/* Image Prompt: Luxury South Asian wedding mandap setup, elegant ivory and gold pillars, intricate floral arrangements with roses and orchids, premium fabric draping, crystal chandeliers, luxury venue interior, professional event photography, editorial style, ultra realistic, 8k quality */}
                <div className="w-full h-full bg-gradient-to-br from-luxury-gold/30 to-luxury-burgundy/30" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-luxury-gold/10 rounded-lg backdrop-blur-sm border border-luxury-gold/20 p-8">
                <div className="text-center">
                  <div className="text-5xl font-display font-bold text-luxury-gold mb-2">
                    500+
                  </div>
                  <div className="text-luxury-cream/80">
                    Luxury Weddings Created
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="luxury-gradient rounded-2xl p-12 md:p-16 text-center"
          >
            <Heart className="w-16 h-16 text-luxury-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-luxury-charcoal mb-6">
              Ready to Create Your Dream Wedding?
            </h2>
            <p className="text-xl text-luxury-charcoal/70 max-w-2xl mx-auto mb-8">
              Let's bring your vision to life. Request a consultation and discover 
              how we can make your celebration truly unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="shadow-2xl" asChild>
                <Link href="/contact">
                  Request Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white font-semibold"
                asChild
              >
                <Link href="tel:+441234567890">Call Us Now</Link>
              </Button>
            </div>
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

const features = [
  {
    title: "Bespoke Design",
    description:
      "Every element is custom-designed to reflect your unique style, cultural traditions, and personal vision.",
  },
  {
    title: "Premium Quality",
    description:
      "We use only the finest materials, from handcrafted mandaps to luxury fabrics and fresh floral installations.",
  },
  {
    title: "Expert Team",
    description:
      "Our experienced professionals handle every detail with precision, ensuring flawless execution on your special day.",
  },
  {
    title: "Nationwide Coverage",
    description:
      "Serving Leicester, Birmingham, London, and across the UK with the same exceptional service and attention to detail.",
  },
];

// Made with Bob
