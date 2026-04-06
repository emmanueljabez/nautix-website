export default function Features() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-950">Features</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-16">
          Explore the powerful tools we offer to build your omnichannel customer experience.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-primary-800">Shared Inbox</h3>
            <p className="text-foreground/70">A single place to manage all your customer conversations from WhatsApp, Instagram, and Messenger.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-primary-800">AI Agents</h3>
            <p className="text-foreground/70">Deploy intelligent chatbots that understand context and resolve customer inquiries automatically 24/7.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-primary-800">Broadcasts & Campaigns</h3>
            <p className="text-foreground/70">Send targeted, personalized messages to your audience at scale to drive sales and engagement.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-primary-800">Analytics & Reporting</h3>
            <p className="text-foreground/70">Gain actionable insights into your team's performance, response times, and campaign effectiveness.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
