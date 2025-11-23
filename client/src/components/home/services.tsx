import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Matching the exact text from the screenshot
const services = [
  {
    title: "Individual",
    description: "This begins with assessment and discovery, and then follows with regular check-ins with your coach to make sure your development goals are being reached. Items included in this package are:"
  },
  {
    title: "Teams",
    description: "This begins with assessment and discovery, and then follows with regular check-ins with your coach to make sure your development goals are being reached. Items included in this package are:"
  },
  {
    title: "Consulting",
    description: "This begins with assessment and discovery, and then follows with regular check-ins with your coach to make sure your development goals are being reached. Items included in this package are:"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Blurred Blue Circle from screenshot */}
      <div className="absolute left-0 top-20 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6 tracking-wide">Coaching Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm bg-white hover:shadow-md transition-shadow duration-300 py-8 px-4 rounded-3xl">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-medium text-primary mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground font-light">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
