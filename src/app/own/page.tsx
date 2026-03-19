import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

// Exact Official Brand Icons
const DiscordIcon = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 127.14 96.36">
    <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.08 0 72.37 72.37 0 0 0-3.36-6.83 105.15 105.15 0 0 0-26.23 8.08C5.32 29.68-.96 50.77.12 71.59a105.9 105.9 0 0 0 32.19 16.15 77.7 77.7 0 0 0 6.89-11.1 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.15c1.2-24.04-7.53-43.52-19.46-63.53zM42.45 60.13c-5.46 0-9.92-4.9-9.92-10.88v-2.02c0-5.98 4.46-10.88 9.92-10.88s9.92 4.9 9.92 10.88v2.02c0 5.96-4.46 10.88-9.92 10.88zm42.24 0c-5.46 0-9.92-4.9-9.92-10.88v-2.02c0-5.98 4.46-10.88 9.92-10.88s9.92 4.9 9.92 10.88v2.02c0 5.96-4.46 10.88-9.92 10.88z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-[-2px]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.294-.537.294l.213-3.1 5.316-4.8c.231-.205-.05-.318-.358-.106l-6.57 4.13-3.003-.943c-.653-.205-.668-.654.136-.973l11.758-4.526c.54-.256 1.018.125.845 1.052z"/>
  </svg>
);

export default function OwnPage() {
  return (
    <div className="relative h-screen w-full bg-[#030305] text-white flex flex-col items-center justify-center p-3 sm:p-4 overflow-hidden selection:bg-purple-500/30">
      
      {/* Dynamic Background Layout */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"></div>
      
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse delay-1000"></div>

      {/* Back to Homepage Button */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-50">
        <Link 
          href="/" 
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] hover:border-white/[0.15] text-zinc-400 hover:text-white transition-all duration-300 text-xs sm:text-sm font-medium backdrop-blur-xl shadow-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Homepage
        </Link>
      </div>

      <div className="relative z-10 w-full max-w-[42rem] flex flex-col gap-3 sm:gap-4 animate-fade-in-up md:mt-2">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-1.5 sm:space-y-2">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            <Image src="/icon.png" alt="VEVOR" fill className="object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-500" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 drop-shadow-sm mb-1">VEVOR</h1>
            <p className="text-sm sm:text-base font-medium text-purple-400 tracking-wider">PREMIUM DIGITAL MARKETPLACE</p>
          </div>
        </div>

        {/* --- SPECIAL VIP CONTACT CARD --- */}
        <div className="w-full relative group mt-1 mb-1">
          {/* Edge Glows (Animated) */}
          <div className="absolute -inset-[1.5px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-[24px] blur-[10px] opacity-40 group-hover:opacity-75 transition duration-700 pointer-events-none"></div>
          <div className="absolute -inset-[1.5px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-[24px] opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>

          <div className="relative h-full w-full bg-[#07080b] rounded-[22px] p-[3px] flex items-center shadow-2xl overflow-hidden backdrop-blur-xl">
             {/* Diagonal shine reflection that moves on hover */}
             <div className="absolute top-0 -translate-x-[200%] left-0 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -rotate-45 group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

             <div className="relative z-10 flex w-full items-center justify-between p-3.5 sm:p-5 bg-gradient-to-b from-white/[0.04] to-transparent rounded-[19px] border border-white/[0.02]">
                
                {/* Left Side: Photo + Info */}
                <div className="flex items-center gap-4 sm:gap-5">
                   <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-purple-600 to-blue-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-500 shrink-0">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-black border-[2px] border-[#07080b]">
                         <Image src="/icon.png" alt="chefitoz" fill className="object-cover" />
                      </div>
                      {/* Live Online Dot */}
                      <div className="absolute bottom-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-green-500 border-[2px] border-[#07080b] rounded-full shadow-[0_0_10px_#22c55e] z-20"></div>
                   </div>
                   <div className="flex flex-col">
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md leading-none mb-1 sm:mb-1.5">
                         chefitoz
                      </h3>
                      <div className="inline-flex items-center px-2 py-[2px] sm:px-2.5 sm:py-[3px] rounded-md bg-purple-500/20 border border-purple-500/30 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-purple-300 uppercase mb-1 w-max">
                        OWNER & FOUNDER
                      </div>
                      <p className="text-gray-400 text-[11px] sm:text-xs leading-tight flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-70"></span> Support & Purchases
                      </p>
                   </div>
                </div>

                {/* Right Side: Quick Action Button */}
                <Link
                  href="https://t.me/bra7om"
                  target="_blank"
                  className="relative flex items-center justify-center shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.05] border border-white/10 text-white hover:text-white transition-all duration-300 group/btn ml-2 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                >
                  <div className="absolute inset-0 bg-[#229ED9] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 group-hover/btn:-rotate-12 group-hover/btn:scale-110 transition-transform duration-300">
                    <TelegramIcon />
                  </div>
                </Link>
             </div>
          </div>
        </div>

        {/* Links Grid Section */}
        <div className="w-full space-y-2.5 sm:space-y-3">
          
          {/* Discord Server */}
          <Link href="https://discord.gg/vevorstore" target="_blank" className="block w-full group relative">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#5865F2] to-transparent rounded-[20px] blur-[6px] opacity-0 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center justify-between p-3.5 sm:p-4 rounded-[20px] border border-white/[0.06] bg-white/[0.02] backdrop-blur-md group-hover:bg-[#5865F2]/[0.05] group-hover:border-[#5865F2]/40 transition-all duration-300">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/20 flex items-center justify-center text-[#5865F2] shrink-0 group-hover:bg-[#5865F2] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(88,101,242,0.1)]">
                  <DiscordIcon />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base group-hover:text-[#5865F2] transition-colors line-clamp-1">Discord Server</h4>
                  <p className="text-[11px] sm:text-[13px] text-gray-400 mt-0.5 sm:mt-1 line-clamp-1">
                    Join our community. Exclusive events, giveaways & 24/7 support.
                  </p>
                </div>
              </div>
              <span className="text-[#5865F2] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold text-lg hidden sm:block mr-2">→</span>
            </div>
          </Link>

          {/* Official Website */}
          <Link href="https://vevorstore.cc/" target="_blank" className="block w-full group relative">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 to-transparent rounded-[20px] blur-[6px] opacity-0 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center justify-between p-3.5 sm:p-4 rounded-[20px] border border-white/[0.06] bg-white/[0.02] backdrop-blur-md group-hover:bg-purple-500/[0.05] group-hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                  <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base group-hover:text-purple-300 transition-colors line-clamp-1">Official Website</h4>
                  <p className="text-[11px] sm:text-[13px] text-gray-400 mt-0.5 sm:mt-1 line-clamp-1">
                    Autobuy access to our premium digital goods and services.
                  </p>
                </div>
              </div>
              <span className="text-purple-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold text-lg hidden sm:block mr-2">→</span>
            </div>
          </Link>

          {/* Telegram Channel Unavailable */}
          <div className="relative flex items-center justify-between p-3.5 sm:p-4 rounded-[20px] border border-white/[0.03] bg-black/40 opacity-60 cursor-not-allowed grayscale backdrop-blur-md">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/50 shrink-0 border border-white/5">
                <TelegramIcon />
              </div>
              <div>
                <h4 className="font-bold text-white/60 text-sm sm:text-base line-clamp-1">Telegram Channel</h4>
                <p className="text-[11px] sm:text-[13px] text-red-400/80 mt-0.5 sm:mt-1 line-clamp-1">
                  Temporary Unavailable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-center pt-1.5 sm:pt-2">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] sm:text-[11px] text-gray-400 font-medium tracking-wide">
            19/03/2026 Sync <span className="opacity-40 ml-1 mr-1">|</span>
            <div className="relative flex h-1.5 w-1.5 ml-1">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
              <div className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></div>
            </div>
            Live Status
          </div>
        </div>

      </div>
    </div>
  );
}