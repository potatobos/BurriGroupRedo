import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Please tell us how we can help"),
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
    const subject = encodeURIComponent(`Contact request from ${values.name}`);
    const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`);
    window.location.href = `mailto:info@theburrigroup.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Please send the email to complete your request.",
    });
    form.reset();
  }

  return (
    <section className="py-24 bg-accent relative">
      <div className="container mx-auto px-6 max-w-xl text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6 tracking-wide">Contact Us</h2>
          <p className="text-muted-foreground mb-8">
            Ready to start your journey? We're here to help.
          </p>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 rounded-md font-medium shadow-md text-lg">
                Get in Touch
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto sm:max-w-md w-full">
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="text-2xl font-serif text-primary">Contact Us</SheetTitle>
                <SheetDescription>
                  Fill out the form below and we'll open your email client to send your request.
                </SheetDescription>
              </SheetHeader>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase tracking-wider text-primary">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase tracking-wider text-primary">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase tracking-wider text-primary">What can we help you with?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your needs..." 
                            className="min-h-[150px] resize-y" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-md font-medium shadow-md mt-4">
                    Send Message
                  </Button>
                </form>
              </Form>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}
