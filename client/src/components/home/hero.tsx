import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-[320px] pb-24 md:pt-[420px] md:pb-32 flex items-center justify-center bg-background">
      <div className="container relative z-10 px-6 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-medium tracking-wide text-primary mb-6">
            Lead with Intention
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed font-light">
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
            className="h-12 px-8 text-base rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium shadow-md"
          >
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
