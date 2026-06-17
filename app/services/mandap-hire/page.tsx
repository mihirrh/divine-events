"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function MandapHirePage() {
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
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/30 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-luxury-gold" />
              <span className="text-luxury-cream font-medium">Premium Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Luxury Mandap Hire
            </h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80 leading-relaxed mb-8">
              Exquisite handcrafted mandaps that honor tradition while embracing contemporary elegance. 
              Each piece is meticulously designed to create the perfect sacred space for your ceremony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="luxury" size="xl" asChild>
                <Link href="/contact">
                  Request Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-luxury-cream text-luxury-cream hover:bg-luxury-cream hover:text-luxury-charcoal"
                asChild
              >
                <Link href="/portfolio">View Gallery</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative h-[600px] bg-luxury-gold/20">
        {/* Image Prompt: Ultra luxury Hindu wedding mandap, handcrafted ivory pillars with intricate gold filigree detailing, royal gold carved columns, lavish white and gold floral installations with roses and orchids, elegant wedding aisle with rose petals, crystal chandeliers hanging from mandap ceiling, luxury UK wedding venue, cinematic lighting, editorial wedding photography, Vogue Weddings aesthetic, ultra realistic, 8k quality, timeless luxury */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-cream to-transparent" />
      </section>

      {/* Mandap Styles */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-luxury-charcoal mb-6">
              Our Mandap Collection
            </h2>
            <p className="text-xl text-luxury-charcoal/70 leading-relaxed">
              From traditional designs to contemporary masterpieces, each mandap is crafted 
              with exceptional attention to detail and premium materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mandapStyles.map((style, index) => (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="premium-card overflow-hidden group"
              >
                <div className="aspect-[4/3] bg-luxury-gold/20 relative overflow-hidden">
                  {/* Image Prompt: {style.imagePrompt} */}
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/30 to-luxury-burgundy/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-semibold text-luxury-charcoal mb-3">
                    {style.title}
                  </h3>
                  <p className="text-luxury-charcoal/70 leading-relaxed mb-4">
                    {style.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-luxury-gold font-semibold text-lg">
                      {style.price}
                    </span>
                    <Button variant="ghost" size="sm" className="text-luxury-gold" asChild>
                      <Link href="/contact">
                        Enquire
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                What Makes Our Mandaps Exceptional
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-luxury-cream/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="aspect-[4/3] bg-luxury-gold/20 rounded-lg overflow-hidden">
                {/* Image Prompt: Close-up of luxury mandap pillar detail, intricate gold filigree work, handcrafted ivory column with royal gold detailing, premium craftsmanship, macro photography, editorial style, ultra realistic, 8k quality */}
                <div className="w-full h-full bg-gradient-to-br from-luxury-gold/30 to-luxury-burgundy/30" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-6 text-center">
                  <div className="text-4xl font-display font-bold text-luxury-gold mb-2">
                    50+
                  </div>
                  <div className="text-luxury-cream/80">Mandap Designs</div>
                </div>
                <div className="bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-6 text-center">
                  <div className="text-4xl font-display font-bold text-luxury-gold mb-2">
                    100%
                  </div>
                  <div className="text-luxury-cream/80">Customizable</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-luxury-charcoal mb-6">
              Our Process
            </h2>
            <p className="text-xl text-luxury-charcoal/70 leading-relaxed">
              From initial consultation to final installation, we ensure every step 
              is seamless and stress-free.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white text-2xl font-display font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-display font-semibold text-luxury-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-luxury-charcoal/70 leading-relaxed">
                  {step.description}
                </p>
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
            <Star className="w-16 h-16 text-luxury-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Create Your Perfect Mandap?
            </h2>
            <p className="text-xl text-luxury-cream/80 mb-8">
              Let's discuss your vision and create a bespoke mandap that reflects 
              your style and honors your traditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl" asChild>
                <Link href="/contact">
                  Request Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-luxury-cream text-luxury-cream hover:bg-luxury-cream hover:text-luxury-charcoal"
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

const mandapStyles = [
  {
    title: "Classic Ivory",
    description:
      "Timeless elegance with handcrafted ivory pillars, intricate gold detailing, and traditional design elements.",
    price: "From £2,500",
    imagePrompt:
      "Classic ivory mandap with gold detailing, traditional Hindu wedding setup, elegant pillars, luxury venue",
  },
  {
    title: "Royal Gold",
    description:
      "Opulent gold mandap featuring ornate carvings, crystal accents, and luxurious fabric draping.",
    price: "From £3,500",
    imagePrompt:
      "Royal gold mandap, ornate carvings, crystal chandeliers, luxury Asian wedding, premium setup",
  },
  {
    title: "Contemporary White",
    description:
      "Modern minimalist design with clean lines, white pillars, and subtle gold accents for a sophisticated look.",
    price: "From £2,800",
    imagePrompt:
      "Contemporary white mandap, modern design, clean lines, minimalist luxury wedding setup",
  },
  {
    title: "Floral Paradise",
    description:
      "Stunning mandap adorned with fresh floral installations, creating a romantic garden-inspired ceremony space.",
    price: "From £4,000",
    imagePrompt:
      "Floral mandap with roses and orchids, luxury flower installations, romantic wedding setup",
  },
  {
    title: "Crystal Palace",
    description:
      "Glamorous mandap featuring crystal pillars, LED lighting, and contemporary design for a show-stopping ceremony.",
    price: "From £4,500",
    imagePrompt:
      "Crystal mandap with LED lighting, modern luxury wedding, glamorous setup, contemporary design",
  },
  {
    title: "Bespoke Design",
    description:
      "Completely custom mandap designed specifically for your vision, incorporating your chosen colors, materials, and style.",
    price: "From £5,000",
    imagePrompt:
      "Bespoke luxury mandap, custom design, unique wedding setup, premium craftsmanship",
  },
];

const features = [
  {
    title: "Handcrafted Excellence",
    description:
      "Each mandap is meticulously handcrafted by skilled artisans using premium materials and traditional techniques.",
  },
  {
    title: "Complete Customization",
    description:
      "Personalize every aspect from colors and fabrics to floral arrangements and lighting to match your vision perfectly.",
  },
  {
    title: "Professional Installation",
    description:
      "Our experienced team handles delivery, setup, and breakdown with precision, ensuring everything is perfect.",
  },
  {
    title: "Premium Materials",
    description:
      "We use only the finest materials including solid wood, premium fabrics, fresh flowers, and quality hardware.",
  },
];

const process = [
  {
    title: "Consultation",
    description:
      "We discuss your vision, venue, budget, and cultural requirements to understand your needs.",
  },
  {
    title: "Design",
    description:
      "Our team creates a bespoke design with 3D visualizations and detailed specifications.",
  },
  {
    title: "Confirmation",
    description:
      "Review and approve the final design, materials, and timeline before production begins.",
  },
  {
    title: "Installation",
    description:
      "Professional setup at your venue, ensuring everything is perfect for your ceremony.",
  },
];

// Made with Bob
