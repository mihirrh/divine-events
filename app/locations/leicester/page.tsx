"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function LeicesterPage() {
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
              <MapPin className="w-5 h-5 text-luxury-gold" />
              <span className="text-luxury-cream font-medium">Leicester & East Midlands</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Luxury Asian Wedding Decor in Leicester
            </h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80 leading-relaxed mb-8">
              Leicester's premier luxury Asian wedding decor and mandap hire service. 
              Creating unforgettable Hindu, Sikh, and Muslim wedding celebrations across 
              Leicester, Leicestershire, and the East Midlands.
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
                <Link href="tel:+441234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services in Leicester */}
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
              Our Leicester Services
            </h2>
            <p className="text-xl text-luxury-charcoal/70 leading-relaxed">
              Comprehensive luxury wedding services for Leicester's vibrant Asian community. 
              From intimate ceremonies to grand celebrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leicesterServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="premium-card p-8"
              >
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-luxury-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="text-luxury-charcoal/70 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button variant="ghost" className="text-luxury-gold p-0" asChild>
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in Leicester */}
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
                Why Leicester Trusts Divine Events
              </h2>
              <div className="space-y-6">
                {whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={reason.title}
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
                        {reason.title}
                      </h3>
                      <p className="text-luxury-cream/70 leading-relaxed">
                        {reason.description}
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
                {/* Image Prompt: Luxury Asian wedding at Leicester venue, elegant mandap setup, beautiful Indian bride and groom, Leicester wedding venue interior, professional photography, editorial style, ultra realistic */}
                <div className="w-full h-full bg-gradient-to-br from-luxury-gold/30 to-luxury-burgundy/30" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-6 text-center">
                  <div className="text-4xl font-display font-bold text-luxury-gold mb-2">
                    200+
                  </div>
                  <div className="text-luxury-cream/80">Leicester Weddings</div>
                </div>
                <div className="bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-luxury-gold fill-luxury-gold" />
                    ))}
                  </div>
                  <div className="text-luxury-cream/80">5-Star Reviews</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leicester Venues */}
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
              Leicester Venues We Serve
            </h2>
            <p className="text-xl text-luxury-charcoal/70 leading-relaxed">
              We have extensive experience working with Leicester's finest wedding venues, 
              ensuring seamless setup and stunning results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leicesterVenues.map((venue, index) => (
              <motion.div
                key={venue}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <span className="text-luxury-charcoal font-medium">{venue}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="section-padding bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Areas We Cover
            </h2>
            <p className="text-xl text-luxury-cream/80 leading-relaxed">
              Serving Leicester and surrounding areas with the same exceptional service and attention to detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-4 text-center hover:bg-luxury-gold/20 transition-colors"
              >
                <MapPin className="w-5 h-5 text-luxury-gold mx-auto mb-2" />
                <span className="text-luxury-cream/90">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="luxury-gradient rounded-2xl p-12 md:p-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-luxury-charcoal mb-6">
              Ready to Plan Your Leicester Wedding?
            </h2>
            <p className="text-xl text-luxury-charcoal/70 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and discover how we can make 
              your Leicester wedding truly unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl" asChild>
                <Link href="/contact">
                  Request Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
                asChild
              >
                <Link href="tel:+441234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Leicester Team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const leicesterServices = [
  {
    title: "Mandap Hire Leicester",
    description:
      "Exquisite handcrafted mandaps for Hindu, Sikh, and Muslim weddings. Custom designs available.",
    icon: Star,
    href: "/services/mandap-hire",
  },
  {
    title: "Wedding Decor Leicester",
    description:
      "Complete venue transformation with luxury floral installations and elegant styling.",
    icon: Star,
    href: "/services/wedding-decor",
  },
  {
    title: "Stage Design Leicester",
    description:
      "Stunning reception stages with premium backdrops and dramatic lighting.",
    icon: Star,
    href: "/services/stage-design",
  },
  {
    title: "DJ Services Leicester",
    description:
      "Professional Asian wedding DJs with extensive experience in Leicester venues.",
    icon: Star,
    href: "/services/dj-entertainment",
  },
  {
    title: "Lighting Production",
    description:
      "Cinematic lighting design to enhance every moment of your Leicester celebration.",
    icon: Star,
    href: "/services/lighting",
  },
  {
    title: "Complete Packages",
    description:
      "All-inclusive wedding packages for stress-free Leicester wedding planning.",
    icon: Star,
    href: "/services/packages",
  },
];

const whyChooseUs = [
  {
    title: "Local Leicester Expertise",
    description:
      "Based in Leicester with deep knowledge of local venues, suppliers, and the vibrant Asian community.",
  },
  {
    title: "Cultural Understanding",
    description:
      "Extensive experience with Hindu, Sikh, Muslim, Gujarati, Punjabi, and Bengali wedding traditions.",
  },
  {
    title: "Premium Quality",
    description:
      "Only the finest materials and craftsmanship for Leicester's most discerning couples.",
  },
  {
    title: "Proven Track Record",
    description:
      "Over 200 successful Leicester weddings with consistently outstanding reviews.",
  },
];

const leicesterVenues = [
  "Leicester Marriott Hotel",
  "Maher Centre Leicester",
  "Athena Leicester",
  "Hilton Leicester",
  "Ramada Encore Leicester",
  "Mercure Leicester",
  "Belmont Hotel Leicester",
  "Leicester Tigers Stadium",
  "King Power Stadium",
  "Leicestershire County Cricket Club",
  "Brooksby Hall",
  "Kilworth House Hotel",
];

const coverageAreas = [
  "Leicester City Centre",
  "Belgrave",
  "Evington",
  "Oadby",
  "Wigston",
  "Blaby",
  "Narborough",
  "Enderby",
  "Braunstone",
  "Thurmaston",
  "Syston",
  "Birstall",
  "Glenfield",
  "Anstey",
  "Groby",
  "Markfield",
  "Coalville",
  "Hinckley",
  "Market Harborough",
  "Melton Mowbray",
];

// Made with Bob
