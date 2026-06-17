"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Locations", href: "/locations" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(26, 26, 26, 0.3)", "rgba(247, 243, 238, 0.98)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(10px)", "blur(10px)"]
  );
  
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(247, 243, 238, 1)", "rgba(26, 26, 26, 1)"]
  );

  return (
    <>
      <motion.header
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-luxury-gold/20"
      >
        <nav className="container-luxury">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-display font-bold tracking-tight text-luxury-gold"
              >
                Divine Events
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div style={{ color: textColor }}>
                    <Link
                      href={link.href}
                      className="hover:text-luxury-gold transition-colors duration-300 font-medium text-lg"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
                  asChild
                >
                  <Link href="tel:+441234567890">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button variant="luxury" size="lg" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: textColor }}
              className="lg:hidden hover:text-luxury-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed top-20 right-0 bottom-0 w-full bg-luxury-cream z-40 lg:hidden overflow-y-auto"
      >
        <div className="container-luxury py-8">
          <div className="flex flex-col space-y-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-semibold text-luxury-charcoal hover:text-luxury-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 space-y-4">
              <Button
                variant="outline"
                size="xl"
                className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
                asChild
              >
                <Link href="tel:+441234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Link>
              </Button>
              <Button variant="luxury" size="xl" className="w-full" asChild>
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </>
  );
}

// Made with Bob
