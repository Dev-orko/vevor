import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FaqItem from "@/components/FaqItem";

const trustPoints = [
  {
    title: "Verified Security",
    icon: "shield" as const,
    description:
      "Legitimate pricing, secure checkout methods, and warranty-backed purchases for every order.",
  },
  {
    title: "Expert Support",
    icon: "headset" as const,
    description:
      "A responsive team is available around the clock for account help, setup guidance, and issue resolution.",
  },
  {
    title: "Secure Payments",
    icon: "wallet" as const,
    description:
      "Pay with confidence using major cards, PayPal, Revolut, and selected cryptocurrency options.",
  },
  {
    title: "Automated Delivery",
    icon: "bolt" as const,
    description:
      "Most products are delivered instantly, with personalized handling available for specialized requests.",
  },
];

function TrustIcon({ icon }: { icon: "shield" | "headset" | "wallet" | "bolt" }) {
  if (icon === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-violet-50" aria-hidden="true">
        <path d="M12 3 5 6v5c0 5.2 3.7 9.9 7 11 3.3-1.1 7-5.8 7-11V6l-7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m8.7 12.1 2.1 2.1 4.5-4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "headset") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-violet-50" aria-hidden="true">
        <path d="M4 12a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="4" y="12" width="4" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
        <rect x="16" y="12" width="4" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M18 19c-.6 1.4-1.7 2-3.1 2H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "wallet") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-violet-50" aria-hidden="true">
        <rect x="3.5" y="6.5" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 9h17" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15.2 13h2.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-violet-50" aria-hidden="true">
      <path d="M13 2 6 13h5l-1 9 8-12h-5l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

const products = [
  { name: "Cheap Discord Nitro Month", price: "4.80", image: "https://vevorstore.cc/images/nitro1m.gif" },
  { name: "Cheap Discord Nitro Year", price: "39.99", image: "https://vevorstore.cc/images/nitro1y.gif" },
  { name: "Cheap Discord Decorations / Effects", price: "2.49", image: "https://vevorstore.cc/images/deco.gif" },
  { name: "Cheap Discord Nameplates", price: "2.79", image: "https://vevorstore.cc/images/nameplate.gif" },
  { name: "Cheap Discord Server Boosts", price: "8.30", image: "https://vevorstore.cc/images/bst.gif" },
  { name: "Cheap Discord Members", price: "0.79", image: "https://vevorstore.cc/images/members.gif" },
  { name: "Cheap Spotify Premium", price: "3.00", image: "https://vevorstore.cc/images/spotify.gif" },
  { name: "Cheap Deezer Premium", price: "3.99", image: "https://vevorstore.cc/images/deezer.gif" },
  { name: "Cheap Netflix Premium", price: "4.99", image: "https://vevorstore.cc/images/netflix.gif" },
  { name: "Cheap Crunchyroll Premium", price: "3.99", image: "https://vevorstore.cc/images/crunchy.gif" },
  { name: "Cheap ChatGPT Premium", price: "4.99", image: "https://vevorstore.cc/images/chatgpt.gif" },
  { name: "Cheap Perplexity AI Premium", price: "9.99", image: "https://vevorstore.cc/images/perplexity.gif" },
  { name: "Cheap Youtube Premium", price: "3.99", image: "https://vevorstore.cc/images/ytpremium.gif" },
  { name: "Cheap Youtube Music Premium", price: "23.99", image: "https://vevorstore.cc/images/ytmusic.gif" },
  { name: "Cheap Canva Pro", price: "2.99", image: "https://vevorstore.cc/images/canva.gif" },
  { name: "Cheap Amazon Prime Video", price: "4.99", image: "https://vevorstore.cc/images/prime.gif" },
  { name: "Cheap GeoGuessr", price: "4.49", image: "https://vevorstore.cc/images/geo.gif" },
  { name: "Cheap Medal TV", price: "4.49", image: "https://vevorstore.cc/images/medal.gif" },
];

const faqs = [
  "How to purchase?",
  "What payment methods do you accept?",
  "How fast is delivery?",
  "How does the warranty work?",
  "How can I contact support?",
  "How are your prices so low?",
  "Can I get the service on my own account?",
  "Are the accounts stolen or hacked?",
  "Are the reviews verified?",
];

const testimonials = [
  {
    user: "@TestUser1",
    date: "3/19/2026",
    message: "Great service, very satisfied with the purchase!",
  },
  {
    user: "@TestUser2",
    date: "3/19/2026",
    message: "Fast delivery and excellent customer support.",
  },
  {
    user: "@TestUser3",
    date: "3/19/2026",
    message: "Highly recommended! Will buy again.",
  },
  {
    user: "@TestUser4",
    date: "3/18/2026",
    message: "Easy checkout and instant activation, very smooth.",
  },
  {
    user: "@TestUser5",
    date: "3/18/2026",
    message: "Best prices I found and support answered quickly.",
  },
  {
    user: "@TestUser6",
    date: "3/17/2026",
    message: "Everything worked as promised, no issues at all.",
  },
  {
    user: "@TestUser7",
    date: "3/17/2026",
    message: "Good communication and trusted payment options.",
  },
  {
    user: "@TestUser8",
    date: "3/16/2026",
    message: "Very professional store. Delivery was super fast.",
  },
  {
    user: "@TestUser9",
    date: "3/16/2026",
    message: "Purchased twice already and both times were perfect.",
  },
  {
    user: "@TestUser10",
    date: "3/15/2026",
    message: "Reliable quality and fair pricing. Recommended.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen text-[var(--text)]">
      <Header />

      <main className="relative z-10 flex flex-col">
        <section className="relative flex min-h-[calc(100svh-96px)] items-center overflow-hidden pt-28 pb-16">
          <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="intro-rise text-center flex flex-col items-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                Discover Premium Digital Goods
              </div>
              <h1 className="max-w-5xl text-balance text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[5.5rem] tracking-tight">
                Your Gateway to <br/> 
                <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,#c4b5fd,#a78bfa_45%,#7c3aed)] drop-shadow-[0_0_24px_rgba(139,92,246,0.3)]">Elite Upgrades</span>
              </h1>
              <p className="mt-8 max-w-3xl text-base text-white/70 sm:text-lg font-medium leading-relaxed">
                Browse our extensive collection of high-quality digital products. From exclusive server enhancements to personal account upgrades, we provide secure, instant, and reliable solutions tailored to you.
              </p>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
                <a
                  href="#products"
                  className="cta-violet group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Shopping
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span aria-hidden="true" className="cta-violet-glow" />
                </a>
              </div>
              <div className="mt-20 grid max-w-4xl w-full grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {[
                  { value: "28+", label: "Exclusive Items" },
                  { value: "5.0 / 5.0", label: "Trust Score" },
                  { value: "2500+", label: "Satisfied Clients" }
                ].map((stat, i) => (
                  <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:scale-[1.02] hover:border-violet-500/30">
                    <p className="text-4xl font-bold text-white drop-shadow-md">{stat.value}</p>
                    <p className="text-xs font-semibold text-violet-300 mt-2 uppercase tracking-[0.15em] opacity-80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400"></span>
              Why Customers Trust Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Reliable by design</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((item, index) => (
              <article
                key={item.title}
                className="card-rise group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-violet-500/30 hover:bg-violet-500/[0.02]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="absolute top-0 right-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition-all duration-500 group-hover:bg-violet-500/30"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition-colors duration-500 group-hover:border-violet-400/50 group-hover:bg-violet-500/20 group-hover:text-white relative z-10">
                  <TrustIcon icon={item.icon} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white relative z-10">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] font-medium leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300 relative z-10">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
          <div className="absolute top-0 right-[20%] -mr-6 -mt-6 h-64 w-64 rounded-full bg-violet-600/5 blur-[100px] pointer-events-none"></div>
          
          <div className="mb-14 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-white sm:text-5xl tracking-tight">Our Collection</h2>
            <p className="mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-slate-400">
              Handpicked digital enhancements, crafted with extreme precision. 
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 z-10 relative">
            {products.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
        </section>

        <section id="reviews" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.01] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-3xl p-8 sm:p-14 text-center">
            <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
            <h2 className="text-4xl font-bold text-white sm:text-5xl tracking-tight">Community <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,#c4b5fd,#a78bfa_45%,#7c3aed)]">Feedback</span></h2>
            
            <div className="ticker-shell mt-16 space-y-8">
              <div className="ticker-row">
                <div className="ticker-track">
                  {[...testimonials.slice(0, 5), ...testimonials.slice(0, 5)].map((review, index) => (
                    <article
                      key={`${review.user}-top-${index}`}
                      className="w-[340px] shrink-0 rounded-3xl border border-white/5 bg-[#08080a]/90 px-7 py-8 text-left shadow-[0_4px_24px_-10px_rgba(0,0,0,0.5)] transition-colors hover:border-violet-500/20 hover:bg-[#0a0a0c]"
                    >
                      <p className="text-[17px] font-semibold text-white">
                        {review.user}
                      </p>
                      <p className="mt-1 text-xs font-medium text-violet-300/80">{review.date} • Verified</p>
                      <div className="mt-4 flex gap-1 text-violet-400">
                        {'★★★★★'.split('').map((star, i) => <span key={i} className="drop-shadow-[0_0_8px_rgba(167,86,255,0.5)]">{star}</span>)}
                      </div>
                      <p className="mt-5 text-[15px] leading-relaxed text-slate-300">{review.message}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="ticker-row">
                <div className="ticker-track ticker-track-reverse">
                  {[...testimonials.slice(5), ...testimonials.slice(5)].map((review, index) => (
                    <article
                      key={`${review.user}-bottom-${index}`}
                      className="w-[340px] shrink-0 rounded-3xl border border-white/5 bg-[#08080a]/90 px-7 py-8 text-left shadow-[0_4px_24px_-10px_rgba(0,0,0,0.5)] transition-colors hover:border-violet-500/20 hover:bg-[#0a0a0c]"
                    >
                      <p className="text-[17px] font-semibold text-white">
                        {review.user}
                      </p>
                      <p className="mt-1 text-xs font-medium text-violet-300/80">{review.date} • Verified</p>
                      <div className="mt-4 flex gap-1 text-violet-400">
                        {'★★★★★'.split('').map((star, i) => <span key={i} className="drop-shadow-[0_0_8px_rgba(167,86,255,0.5)]">{star}</span>)}
                      </div>
                      <p className="mt-5 text-[15px] leading-relaxed text-slate-300">{review.message}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <a
              href="https://myvouch.es/vevorstore"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-violet mt-12 group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join the Community
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span aria-hidden="true" className="cta-violet-glow" />
            </a>
          </div>
        </section>

        <section id="faq" className="mx-auto w-full max-w-3xl px-4 pb-32 pt-16 sm:px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">Questions</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
              Everything you need to know about our products and services. Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((question) => (
              <FaqItem key={question} question={question} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
