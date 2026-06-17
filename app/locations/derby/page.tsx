import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Asian Wedding Decor Derby | Mandap Hire Derby",
  description: "Premium Asian wedding decor and mandap hire services in Derby. Luxury South Asian wedding planning across Derbyshire.",
};

export default function DerbyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-16 h-16 text-luxury-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Derby Wedding Decor</h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80">Luxury Asian wedding services across Derby and Derbyshire</p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury text-center">
          <h2 className="text-4xl font-display font-bold text-luxury-charcoal mb-8">Serving Derby</h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-3xl mx-auto mb-12">Premium mandap hire and wedding decor services for Derby's Asian wedding community.</p>
          <Button variant="premium" size="xl" asChild><Link href="/contact">Request Quote<ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
