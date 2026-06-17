import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Divine Events",
  description: "Divine Events privacy policy and data protection information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 bg-luxury-charcoal text-luxury-cream">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-luxury-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl text-luxury-cream/80">Your privacy is important to us</p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-display font-bold text-luxury-charcoal mb-4">Data Protection</h2>
            <p className="text-luxury-charcoal/70 mb-6">Divine Events is committed to protecting your privacy and personal data in accordance with UK GDPR regulations.</p>
            
            <h3 className="text-2xl font-display font-semibold text-luxury-charcoal mb-3">Information We Collect</h3>
            <p className="text-luxury-charcoal/70 mb-6">We collect information you provide when requesting quotes or consultations, including name, email, phone number, and event details.</p>
            
            <h3 className="text-2xl font-display font-semibold text-luxury-charcoal mb-3">How We Use Your Data</h3>
            <p className="text-luxury-charcoal/70 mb-6">Your information is used solely to provide wedding services, communicate about your event, and improve our services.</p>
            
            <h3 className="text-2xl font-display font-semibold text-luxury-charcoal mb-3">Contact Us</h3>
            <p className="text-luxury-charcoal/70">For privacy inquiries, please contact us at privacy@divineevents.co.uk</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
