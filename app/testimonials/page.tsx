import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials | Divine Events",
  description: "Read what our clients say about Divine Events luxury Asian wedding decor services.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <Star className="w-16 h-16 text-luxury-gold mx-auto mb-6 fill-luxury-gold" />
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80">Hear from couples who trusted us with their special day</p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury text-center">
          <h2 className="text-4xl font-display font-bold text-luxury-charcoal mb-8">Coming Soon</h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">We're gathering testimonials from our happy couples. Check back soon!</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
