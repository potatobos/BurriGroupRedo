import { Link } from "wouter";

export function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50">
      {/* SVG Background - Absolutely positioned */}
      <div className="absolute top-0 left-0 w-full -z-10 overflow-hidden flex justify-center">
        <img 
          src="/header-curve.svg" 
          alt="" 
          className="w-[160%] min-w-[1200px] max-w-none h-auto object-cover object-top mt-[-20px]"
        />
      </div>
      
      <nav className="container mx-auto px-6 pt-8 flex flex-col items-center relative z-10">
        {/* Logo */}
        <Link href="/">
          <a className="mb-6 block hover:opacity-90 transition-opacity">
            <img 
              src="https://cdn.prod.website-files.com/63fa51b7662aa0ffcb153eaa/63fa51b7662aa017f4153ec5_The%20Burri%20Group.svg" 
              alt="The Burri Group" 
              className="h-16 md:h-20 w-auto invert brightness-0 filter" 
              style={{ filter: "brightness(0) invert(1)" }} 
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
