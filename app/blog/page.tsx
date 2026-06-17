import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Wedding Planning Blog | Divine Events",
  description: "Tips, inspiration, and insights for planning your luxury Asian wedding.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 text-luxury-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Wedding Blog</h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80">Tips and inspiration for your luxury Asian wedding</p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury text-center">
          <h2 className="text-4xl font-display font-bold text-luxury-charcoal mb-8">Coming Soon</h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-3xl mx-auto">We're creating valuable content for you. Check back soon for wedding planning tips and inspiration!</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
