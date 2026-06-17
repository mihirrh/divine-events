"use client";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function LightingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="relative pt-32 pb-20 bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <Lightbulb className="w-16 h-16 text-luxury-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Lighting Production</h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80">Cinematic lighting design to enhance every moment of your celebration.</p>
          </motion.div></div>
      </section>
      <section className="section-padding bg-luxury-cream"><div className="container-luxury text-center">
          <h2 className="text-4xl font-display font-bold text-luxury-charcoal mb-8">Set the Perfect Mood</h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-3xl mx-auto mb-12">Professional lighting that transforms your venue into a magical space.</p>
          <Button variant="luxury" size="xl" asChild><Link href="/contact">Get Quote<ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
        </div></section>
      <Footer />
    </main>
  );
}
