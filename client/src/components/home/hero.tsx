import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/professional_abstract_gradient_background_for_consulting_firm.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-primary mb-8 leading-[1.1]">
            Lead with <span className="italic text-accent-foreground/80">Intention</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Discover what is important to you, so it is obvious to others what your priorities are.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button 
            size="lg" 
            className="h-14 px-8 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-medium"
          >
            Start Your Journey
          </Button>
        </motion.div>
      </div>
      
      {/* Decorative Element (simulating the Ellipse/Scroll indicator) */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary/50 to-primary"></div>
      </motion.div>
    </section>
  );
}
