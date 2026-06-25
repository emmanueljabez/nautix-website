import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Preview | Nautix",
  description: "Internal preview of the Nautix marketing experience.",
  path: "/preview",
  noIndex: true,
});

const BOOK_DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

export default function PreviewHome() {
  return (
    <>
      <section className="relative overflow-hidden bg-background text-foreground py-20 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Nautix v2 is coming
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-balance">
            Omnichannel messaging platform for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              AI conversions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 text-balance">
            Connect WhatsApp, Instagram, SMS & more to automate campaigns, leads and
            support. Build AI agents your team will actually love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8">
              Get Started for Free
            </Button>
            <a
              href={BOOK_DEMO_URL}
              className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-md border border-primary-200 bg-white/50 px-8 text-base font-medium text-foreground ring-offset-background backdrop-blur-sm transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
            >
              Book a Demo
            </a>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 relative z-10">
          <div className="rounded-2xl border border-black/5 bg-white/60 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/9] max-w-5xl mx-auto flex flex-col relative">
            <div className="h-12 border-b border-black/5 bg-black/5 flex items-center px-4 gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex items-center justify-center p-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
              <div className="text-foreground/40 font-medium">
                Dashboard Interface Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-black/5 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-foreground/50 mb-6 uppercase tracking-wider">
            Trusted by innovative teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="text-xl font-bold font-heading">ACME Corp</div>
            <div className="text-xl font-bold font-heading">GlobalTech</div>
            <div className="text-xl font-bold font-heading">Nexus</div>
            <div className="text-xl font-bold font-heading">Quantum</div>
            <div className="text-xl font-bold font-heading">Zenith</div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything you need to scale conversations
            </h2>
            <p className="text-lg text-foreground/70">
              Powerful tools designed to help your team manage, automate, and analyze
              customer interactions across all channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-black/5 hover:border-primary-200 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <svg
                  className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Shared Team Inbox</h3>
              <p className="text-foreground/70 mb-4">
                Unify WhatsApp, Instagram, and Messenger into a single collaborative
                workspace for your team.
              </p>
              <a
                href="#"
                className="text-primary-600 font-medium hover:underline inline-flex items-center gap-1"
              >
                Learn more <span aria-hidden="true">â†’</span>
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-black/5 hover:border-primary-200 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <svg
                  className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Marketing Broadcasts</h3>
              <p className="text-foreground/70 mb-4">
                Send personalized, targeted campaigns at scale. Boost engagement and
                drive repeat business.
              </p>
              <a
                href="#"
                className="text-primary-600 font-medium hover:underline inline-flex items-center gap-1"
              >
                Learn more <span aria-hidden="true">â†’</span>
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-black/5 hover:border-primary-200 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <svg
                  className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Agents & Automation</h3>
              <p className="text-foreground/70 mb-4">
                Automate repetitive tasks and qualify leads 24/7 with intelligent,
                human-like AI chatbots.
              </p>
              <a
                href="#"
                className="text-primary-600 font-medium hover:underline inline-flex items-center gap-1"
              >
                Learn more <span aria-hidden="true">â†’</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 bg-primary-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-800/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Connects with apps you already use
              </h2>
              <p className="text-lg text-primary-200 mb-8">
                Integrate Nautix directly into your existing workflow. Sync customer
                data, trigger automations, and manage everything without switching tabs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300">
                    âœ“
                  </div>
                  <span>Official WhatsApp Business API</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300">
                    âœ“
                  </div>
                  <span>Instagram Direct Messages</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-300">
                    âœ“
                  </div>
                  <span>Facebook Messenger</span>
                </li>
              </ul>
              <Button variant="outline" className="text-white border-primary-500 hover:bg-primary-800">
                View All Integrations
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square relative flex items-center justify-center">
                <div className="absolute inset-0 border border-primary-800/50 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-8 border border-primary-700/50 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                <div className="w-24 h-24 bg-primary-600 rounded-full shadow-[0_0_50px_rgba(152,31,176,0.5)] flex items-center justify-center z-10 text-xl font-bold">
                  Nautix
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#25D366] rounded-xl flex items-center justify-center shadow-lg font-bold text-sm">
                  WA
                </div>
                <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-xl flex items-center justify-center shadow-lg font-bold text-sm">
                  IG
                </div>
                <div className="absolute bottom-1/4 right-0 w-16 h-16 bg-[#00B2FF] rounded-xl flex items-center justify-center shadow-lg font-bold text-sm">
                  FB
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-3xl p-12 md:p-16 text-center border border-primary-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/50 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              Ready to accelerate your growth?
            </h2>
            <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto relative z-10">
              Join thousands of businesses using Nautix to automate conversations and
              drive more sales. Get started in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button size="lg" className="text-base h-12 px-8">
                Start Your Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-base h-12 px-8 bg-white">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
