import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        
        {/* Accreditations Strip */}
        <div className="w-full bg-muted/30 py-12 border-y border-border/40 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap">
               {/* Using placeholders for the accreditations as I don't have all their URLs handy, but I'll use the one I saw repeated */}
               {[1, 2, 3, 4].map((i) => (
                 <img 
                   key={i}
                   src="https://cdn.prod.website-files.com/63fa51b7662aa0ffcb153eaa/63fa51b7662aa0f452153ec8_image%207.png" 
                   alt="Accreditation" 
                   className="h-12 md:h-16 w-auto object-contain"
                 />
               ))}
            </div>
          </div>
        </div>

        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
