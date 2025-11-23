import { motion } from "framer-motion";
import founderImage from "@assets/generated_images/professional_portrait_of_a_female_founder_in_a_modern_office_setting.png";

export function About() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6 tracking-wide">About Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-md mx-auto md:ml-auto">
              <img 
                src={founderImage} 
                alt="Founder of The Burri Group" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element behind image */}
            <div className="absolute top-10 -left-4 md:left-10 w-full h-full bg-primary/5 rounded-2xl -z-0 transform -rotate-3 scale-105" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium text-primary mb-8 tracking-wide">
              Driven by Purpose, <br />
              <span className="italic font-serif">Guided by Experience</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed font-light text-lg">
              <p>Welcome to The Burri Group. My name is Mary Burrus, and I founded this firm with a singular mission: to help leaders and organizations discover their true intention and operate with clarity.</p>
              <p>
                With over two decades of experience in corporate leadership and organizational development, I've witnessed the transformative power of aligned priorities. When what matters to you becomes obvious to those around you, friction decreases and momentum builds.
              </p>
              <p>
                My approach combines rigorous assessment with compassionate coaching. I believe that sustainable growth doesn't come from following a generic playbook, but from unlocking the unique potential that already exists within your team.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="font-serif text-2xl text-primary italic">Mary Burri</p>
              <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">Founder & Principal Coach</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
