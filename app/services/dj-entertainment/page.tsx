"use client";
import { motion } from "framer-motion";
import { ArrowRight, Music } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function DJPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="relative pt-32 pb-20 bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <Music className="w-16 h-16 text-luxury-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">DJ Entertainment</h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80">Professional DJs with premium sound systems for unforgettable celebrations.</p>
          </motion.div></div>
      </section>
      <section className="section-padding bg-luxury-cream"><div className="container-luxury text-center">
          <h2 className="text-4xl font-display font-bold text-luxury-charcoal mb-8">Keep Your Guests Dancing</h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-3xl mx-auto mb-12">Expert DJs who understand Asian wedding music and create the perfect atmosphere.</p>
          <Button variant="luxury" size="xl" asChild><Link href="/contact">Book Now<ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
        </div></section>
      <Footer />
    </main>
  );
}
