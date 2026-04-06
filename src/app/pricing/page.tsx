import { Button } from "@/components/ui/Button";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-950">Simple, transparent pricing</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-16">
          Choose the plan that's right for your business. No hidden fees. Cancel anytime.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          {/* Starter */}
          <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-foreground/60 mb-6">Perfect for small businesses getting started.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-foreground/60">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-2"><span className="text-primary-500">✓</span> 3 Team Members</li>
              <li className="flex items-center gap-2"><span className="text-primary-500">✓</span> 1,000 Contacts</li>
              <li className="flex items-center gap-2"><span className="text-primary-500">✓</span> Shared Inbox</li>
              <li className="flex items-center gap-2"><span className="text-primary-500">✓</span> Basic Automations</li>
            </ul>
            <Button variant="outline" className="w-full">Start Free Trial</Button>
          </div>
          
          {/* Pro */}
          <div className="bg-primary-950 text-white p-8 rounded-3xl border border-primary-800 shadow-xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
            <h3 className="text-2xl font-bold mb-2">Professional</h3>
            <p className="text-primary-200 mb-6">Scale your customer experience with advanced tools.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">$149</span>
              <span className="text-primary-200">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-2"><span className="text-primary-400">✓</span> 10 Team Members</li>
              <li className="flex items-center gap-2"><span className="text-primary-400">✓</span> 10,000 Contacts</li>
              <li className="flex items-center gap-2"><span className="text-primary-400">✓</span> Advanced AI Agents</li>
              <li className="flex items-center gap-2"><span className="text-primary-400">✓</span> WhatsApp Broadcasts</li>
              <li className="flex items-center gap-2"><span className="text-primary-400">✓</span> Analytics Dashboard</li>
            </ul>
            <Button variant="primary" className="w-full bg-primary-500 hover:bg-primary-600 text-white">Get Started</Button>
          </div>
          
          {/* Enterprise */}
          <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-foreground/60 mb-6">Custom solutions for large organizations.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-2"><span className="text-primary-500">✓</span> Unlimited Team Members</li>
              <li className="flex items-center gap-2"><span className="text-primary-500">✓</span> Unlimited Contacts</li>
              <li className="flex items-center gap-2"><span className="text-primary-500">✓</span> Dedicated Success Manager</li>
              <li className="flex items-center gap-2"><span className="text-primary-500">✓</span> Custom Integrations</li>
              <li className="flex items-center gap-2"><span className="text-primary-500">✓</span> SLA Guarantee</li>
            </ul>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
