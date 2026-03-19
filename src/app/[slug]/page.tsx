import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="relative z-10 flex flex-col min-h-screen pt-32 pb-24">
        {/* Background ambient light */}
        <div className="absolute top-1/4 left-1/2 -mt-64 -ml-64 h-[32rem] w-[32rem] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb / Back */}
          <Link href="/#products" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-violet-400 transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Store
          </Link>

          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            
            {/* Left Col: Info */}
            <div className="space-y-8">
              <div className="pb-8 border-b border-white/5">
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Product Information</h1>
              </div>

              <div className="prose prose-invert prose-violet max-w-none">
                <h2 className="text-2xl font-semibold text-white mb-6">Before You Buy:</h2>
                <h3 className="text-xl font-medium text-violet-400 mb-4">{product.name}</h3>
                
                <ul className="space-y-3 text-slate-300 list-disc pl-5">
                  {slug.includes("nb") ? (
                    <>
                      <li>Nitro subscription will be purchased by legal methods offered by Discord itself.</li>
                      <li>If you have an ongoing subscription you won&apos;t be able to purchase until it expires, but you can upgrade it.</li>
                      <li>Works on your original account without problems.</li>
                      <li>A full warranty is given.</li>
                      <li>No need to login</li>
                    </>
                  ) : (
                    <>
                      <li>Service will be applied to your account or delivered as a key automatically.</li>
                      <li>A full warranty is provided for the entire duration of the service.</li>
                      <li>Contact our support team if you have any questions before purchasing.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Right Col: Sticky Sidebar (Thumbnail & Checkout) */}
            <div className="lg:relative">
              <div className="lg:sticky lg:top-32 rounded-3xl border border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md p-6 lg:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]">
                
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 border border-white/5 bg-black/50 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-auto h-full object-contain max-h-48 drop-shadow-2xl" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-6 line-clamp-2">{product.name}</h3>

                <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Price</p>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-[linear-gradient(135deg,#c4b5fd,#a78bfa_45%,#7c3aed)]">
                      &euro;{product.price}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-400 mb-1">Stock</p>
                    <p className="text-xl inline-flex items-center gap-2 font-medium text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      &infin;
                    </p>
                  </div>
                </div>

                <a
                  href="#"
                  className="cta-violet cta-violet-compact group relative isolate flex w-full items-center justify-center overflow-hidden rounded-full py-4 text-sm font-bold shadow-[0_0_20px_rgba(167,86,255,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider text-white">
                    Purchase
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span aria-hidden="true" className="cta-violet-glow" />
                </a>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure encrypted checkout
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}