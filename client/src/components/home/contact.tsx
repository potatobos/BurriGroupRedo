import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Contact Us</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Ready to start your journey? Get in touch with us today.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-background/5 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-white/10">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground/90">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-background/10 border-white/20 text-primary-foreground placeholder:text-white/30 focus-visible:ring-accent" />
                    </FormControl>
                    <FormMessage className="text-accent" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground/90">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} className="bg-background/10 border-white/20 text-primary-foreground placeholder:text-white/30 focus-visible:ring-accent" />
                    </FormControl>
                    <FormMessage className="text-accent" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-foreground/90">Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="How can we help you?" {...field} className="bg-background/10 border-white/20 text-primary-foreground placeholder:text-white/30 min-h-[150px] focus-visible:ring-accent" />
                  </FormControl>
                  <FormMessage className="text-accent" />
                </FormItem>
              )}
            />
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-6 text-lg rounded-full font-serif">
                Send Message
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
