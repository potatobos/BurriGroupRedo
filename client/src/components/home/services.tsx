import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, User, Briefcase } from "lucide-react";

const services = [
  {
    title: "Individual",
    description: "This begins with assessment and discovery, and then follows with regular check-ins with your coach to make sure your development goals are being reached.",
    icon: User
  },
  {
    title: "Teams",
    description: "This begins with assessment and discovery, and then follows with regular check-ins with your coach to make sure your development goals are being reached.",
    icon: Users
  },
  {
    title: "Consulting",
    description: "This begins with assessment and discovery, and then follows with regular check-ins with your coach to make sure your development goals are being reached.",
    icon: Briefcase
  }
];

export function Services() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Coaching Services</h2>
          <div className="h-1 w-20 bg-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-secondary/30 hover:bg-secondary/50">
                <CardHeader>
                  <service.icon className="w-10 h-10 text-primary mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <CardTitle className="text-2xl font-serif text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
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
