import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-primary-700">Nautix</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Products</Link>
            <Link href="/#solutions" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Solutions</Link>
            <Link href="/pricing" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Pricing</Link>
            <Link href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Resources</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
