import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        
        {/* Accreditations Strip - Exactly as in screenshot */}
        <div className="w-full bg-secondary py-16 border-none">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h3 className="text-sm font-bold text-muted-foreground tracking-widest uppercase">Accreditations</h3>
            </div>
            <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
               {/* Using the exact image URL from the snippet */}
               {[1, 2, 3, 4].map((i) => (
                 <img 
                   key={i}
                   src="https://cdn.prod.website-files.com/63fa51b7662aa0ffcb153eaa/63fa51b7662aa0f452153ec8_image%207.png" 
                   alt="NASCUS Accreditation" 
                   className="h-20 md:h-24 w-auto object-contain"
                 />
               ))}
            </div>
          </div>
        </div>

        <Services />
        <Contact />
      </main>
      {/* No footer in the screenshot, but usually there is one. I'll leave the bottom of Contact as the end for now as per screenshot view */}
    </div>
  );
}
