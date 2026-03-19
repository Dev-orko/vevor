import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const Footer = () => (
  <footer id="support" className="relative mt-20 overflow-hidden bg-[#020106] pt-16 pb-8 z-20">
    
    {/* Gorgeous Top Gradient Lighting */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"></div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent blur-[2px]"></div>

    {/* Immersive Dark Mesh & Orbs */}
    <div className="absolute top-[10%] left-1/4 w-[40vw] h-[300px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    <div className="absolute bottom-[-10%] right-1/4 w-[40vw] h-[300px] bg-purple-800/10 blur-[130px] rounded-full pointer-events-none"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
    
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
        
        {/* Left - Premium Branding Box */}
        <div className="flex flex-col gap-4 max-w-sm">
          <Link href="/" className="flex items-center gap-3 w-fit group">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 flex items-center justify-center group-hover:border-violet-400/40 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-violet-500/10 blur-xl group-hover:bg-violet-400/20 transition-colors"></div>
              <Image
                src="/images/logo.png"
                alt="VEVOR Logo"
                fill
                className="object-contain p-2 relative z-10"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 group-hover:to-violet-300 transition-colors">VEVOR STORE</span>
            </div>
          </Link>
          <p className="text-slate-400/90 text-[15px] leading-relaxed font-medium">
            Premium digital enhancements, secure accounts, and instant delivery. <span className="text-violet-300/90 pointer-events-none relative inline-block group-hover:text-violet-200 transition-colors">Engineered for perfection.</span>
          </p>
        </div>

        {/* Right - Elegant Animated Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">
          
          <div className="flex flex-col space-y-4">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-1 flex items-center gap-2 drop-shadow-sm">
              <span className="w-1 h-3 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span> Company
            </h4>
            {['Products', 'Reviews', 'FAQ'].map((link) => (
              <Link key={link} href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors text-[15px] w-fit group flex items-center">
                <span className="w-0 h-[1.5px] bg-violet-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                {link}
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-1 flex items-center gap-2 drop-shadow-sm">
              <span className="w-1 h-3 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span> Legal
            </h4>
            {['Terms', 'Privacy'].map((link) => (
              <Link key={link} href="#" className="text-slate-400 hover:text-white transition-colors text-[15px] w-fit group flex items-center">
                <span className="w-0 h-[1.5px] bg-purple-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300 ease-out"></span>
                {link}
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-1 flex items-center gap-2 drop-shadow-sm">
              <span className="w-1 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span> Support
            </h4>
            <a href="https://discord.gg/vevorstore" target="_blank" rel="noreferrer" className="group flex items-center text-slate-400 hover:text-[#5865F2] transition-colors text-[15px] w-fit">
              <span className="relative inline-flex overflow-hidden">
                 Discord 
                 <ArrowUpRight className="absolute -right-5 top-0 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </span>
            </a>
            <Link href="/own" className="group flex items-center text-slate-400 hover:text-violet-400 transition-colors text-[15px] w-fit">
              <span className="relative inline-flex overflow-hidden">
                 All Links 
                 <ArrowUpRight className="absolute -right-5 top-0 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </span>
            </Link>
          </div>

        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6"></div>

      {/* Bottom Bar - Signature & Copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 pb-2">
        
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 text-[13px] text-slate-500 font-medium">
          <span>© {new Date().getFullYear()} VEVOR STORE. All rights reserved.</span>
          <span className="hidden sm:block text-white/10">•</span>
          
          <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            Crafted by
            <a href="https://discordapp.com/users/_xiphoid" target="_blank" rel="noreferrer" className="group relative font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 hover:from-purple-300 hover:to-violet-300 transition-all flex items-center gap-1.5 drop-shadow-[0_0_12px_rgba(167,86,255,0.4)]">
               <Sparkles className="w-4 h-4 text-violet-400 group-hover:animate-pulse group-hover:scale-110 transition-transform" />
               _xiphoid
               <div className="absolute bottom-0 left-5 w-[calc(100%-20px)] h-px bg-gradient-to-r from-violet-400/0 via-violet-400/50 to-violet-400/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </span>
        </div>

      </div>

    </div>
  </footer>
);

export default Footer;
