import { Button } from "@/components/ui/button";
import { ContactDrawer } from "@/components/shared/contact-drawer";

export function Contact() {
  return (
    <section className="py-24 bg-accent relative">
      <div className="container mx-auto px-6 max-w-xl text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6 tracking-wide">Contact Us</h2>
          <p className="text-muted-foreground mb-8">
            Ready to start your journey? We're here to help.
          </p>
          
          <ContactDrawer>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 rounded-md font-medium shadow-md text-lg">
              Get in Touch
            </Button>
          </ContactDrawer>
        </div>
      </div>
    </section>
  );
}
