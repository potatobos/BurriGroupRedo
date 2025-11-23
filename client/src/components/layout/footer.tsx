export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border/40">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img 
            src="https://cdn.prod.website-files.com/63fa51b7662aa0ffcb153eaa/63fa51b7662aa017f4153ec5_The%20Burri%20Group.svg" 
            alt="The Burri Group" 
            className="h-8 w-auto grayscale opacity-50 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} The Burri Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
