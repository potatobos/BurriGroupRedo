import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img 
              src="https://cdn.prod.website-files.com/63fa51b7662aa0ffcb153eaa/63fa51b7662aa017f4153ec5_The%20Burri%20Group.svg" 
              alt="The Burri Group" 
              className="h-10 w-auto"
            />
          </a>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services">
            <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          </Link>
          <Link href="/about">
            <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About Us</a>
          </Link>
          <Link href="/contact">
            <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </Link>
          <Button variant="default" size="sm" className="font-serif bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
