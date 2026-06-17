"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function PremiumHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal/80 via-luxury-charcoal/60 to-luxury-cream z-10" />
        
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-burgundy/30 via-luxury-gold/20 to-luxury-charcoal/40" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-luxury-gold/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container-luxury">
          <div className="max-w-5xl">
            <motion.div
              style={{ y }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-3 bg-luxury-gold/10 backdrop-blur-md border-2 border-luxury-gold/30 rounded-full px-8 py-4 glow-gold"
              >
                <Sparkles className="w-6 h-6 text-luxury-gold animate-pulse" />
                <span className="text-luxury-cream font-semibold text-lg">
                  Award-Winning Luxury Wedding Decor
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-luxury-cream leading-[1.1] tracking-tight"
              >
                Where Dreams
                <br />
                <span className="text-gradient-gold inline-block">
                  Become Reality
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl text-luxury-cream/90 leading-relaxed max-w-3xl font-light"
              >
                Creating unforgettable luxury Asian wedding experiences across the UK. 
                From bespoke mandaps to complete event production, we bring your vision to life.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 pt-6"
              >
                <Button
                  variant="premium"
                  size="xl"
                  className="group shadow-2xl text-xl px-16 py-8 h-auto"
                  asChild
                >
                  <Link href="/contact">
                    Request Your Quote
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-2 border-luxury-cream text-luxury-cream hover:bg-luxury-cream hover:text-luxury-charcoal backdrop-blur-md bg-luxury-charcoal/20 shadow-xl font-semibold text-xl px-16 py-8 h-auto"
                  asChild
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap items-center gap-8 pt-8"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-luxury-gold fill-luxury-gold drop-shadow-lg"
                      />
                    ))}
                  </div>
                  <span className="text-luxury-cream/90 font-semibold text-lg">
                    500+ Celebrations
                  </span>
                </div>
                <div className="h-10 w-px bg-luxury-cream/30" />
                <div className="text-luxury-cream/90 font-semibold text-lg">
                  Trusted Across UK
                </div>
                <div className="h-10 w-px bg-luxury-cream/30" />
                <div className="text-luxury-cream/90 font-semibold text-lg">
                  10+ Years Experience
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-8 h-12 border-2 border-luxury-gold rounded-full flex items-start justify-center p-2 glow-gold">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 bg-luxury-gold rounded-full"
          />
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-luxury-burgundy/5 rounded-full blur-3xl" />
    </section>
  );
}

// Made with Bob
