import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tighter text-white">Nautix</span>
            </Link>
            <p className="text-primary-200 text-sm max-w-xs mt-4">
              The omnichannel messaging platform for AI conversions. Connect WhatsApp, Instagram, SMS & more.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3 text-sm text-primary-200">
              <li><Link href="#" className="hover:text-white transition-colors">Shared Inbox</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Broadcasts</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AI Chatbot</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Automations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm text-primary-200">
              <li><Link href="#" className="hover:text-white transition-colors">E-commerce</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Customer Support</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sales & Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-primary-200">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-300 text-sm">
            © {new Date().getFullYear()} Nautix. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-primary-300">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
