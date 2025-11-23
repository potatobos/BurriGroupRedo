import { Link } from "wouter";

export function Navbar() {
  return (
    <div className="relative w-full z-50">
      {/* Curved Header Background */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-primary rounded-b-[50%_20%] md:rounded-b-[50%_30%] shadow-lg z-0 w-[120%] -ml-[10%] overflow-hidden" />
      
      <nav className="relative z-10 container mx-auto px-6 pt-8 flex flex-col items-center">
        {/* Logo */}
        <Link href="/">
          <a className="mb-6 block hover:opacity-90 transition-opacity">
            <img 
              src="https://cdn.prod.website-files.com/63fa51b7662aa0ffcb153eaa/63fa51b7662aa017f4153ec5_The%20Burri%20Group.svg" 
              alt="The Burri Group" 
              className="h-16 md:h-20 w-auto invert brightness-0 filter" 
              style={{ filter: "brightness(0) invert(1)" }} // Force white logo
            />
          </a>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-4 text-white/90 text-xs md:text-sm font-medium tracking-widest uppercase">
          <Link href="/services">
            <a className="hover:text-white transition-colors">Services</a>
          </Link>
          <span className="opacity-50">|</span>
          <Link href="/about">
            <a className="hover:text-white transition-colors">About Us</a>
          </Link>
          <span className="opacity-50">|</span>
          <Link href="/contact">
            <a className="hover:text-white transition-colors">Contact</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
