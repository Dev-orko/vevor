"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <Link
        href="/own"
        className="relative z-20 group flex w-full items-center justify-center bg-[#020203]/70 backdrop-blur-md border-b border-white/5 py-2.5 px-4 text-center text-xs sm:text-sm font-bold text-white transition-all hover:bg-[#0a0a0c]/80 gap-1.5"
      >
        <span className="text-violet-400 drop-shadow-[0_0_10px_rgba(167,86,255,0.6)]">
          Click here
        </span>
        <span>to access all our official links and contact methods</span>
        <span className="text-violet-400 transition-transform duration-300 group-hover:translate-x-1 drop-shadow-[0_0_10px_rgba(167,86,255,0.6)]">
          &rarr;
        </span>
      </Link>
      
      <div 
        className={`relative z-10 transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <header className="border-b border-white/5 bg-[#020203]/70 backdrop-blur-2xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/images/logo.png" 
            alt="VEVOR Logo" 
            width={64} 
            height={64} 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14"
            priority
          />
          <span className="text-2xl font-bold tracking-[0.16em] text-white sm:text-3xl">
            VEVOR
          </span>
      </Link>
      <nav className="hidden items-center gap-8 text-base font-medium text-white/80 lg:flex">
        <Link href="/" className="font-bold text-purple-400 drop-shadow-[0_0_12px_rgba(192,132,252,1)]" style={{ color: '#c084fc' }}>Home</Link>
        <Link href="#products" className="transition hover:text-white">Products</Link>
        <Link href="#reviews" className="transition hover:text-white">Reviews</Link>
      </nav>
      <div className="flex items-center gap-4 sm:gap-6">
        <a href="#" className="menu-breathe hidden text-sm font-medium text-white/85 transition hover:text-white sm:inline-flex">Create Your Store</a>
        
        {/* Divider */}
        <div className="hidden h-7 w-[1px] bg-white/10 sm:block"></div>

        <a
          href="https://discord.gg/vevorstore"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-violet-100 shadow-[0_0_0_0_rgba(167,86,255,0)] transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/50 hover:bg-violet-500/20 hover:text-white hover:shadow-[0_10px_24px_-12px_rgba(167,86,255,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-100/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120625]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.317 4.369A19.79 19.79 0 0 0 15.885 3a13.616 13.616 0 0 0-.697 1.434 18.27 18.27 0 0 0-6.376 0A13.648 13.648 0 0 0 8.115 3a19.736 19.736 0 0 0-4.433 1.37C.533 9.046-.32 13.58.106 18.057A19.9 19.9 0 0 0 5.993 21a14.11 14.11 0 0 0 1.26-2.042 12.887 12.887 0 0 1-1.98-.96c.166-.122.328-.249.484-.381 3.817 1.793 7.955 1.793 11.727 0 .158.132.32.259.486.381-.63.37-1.29.693-1.981.96A14.017 14.017 0 0 0 17.248 21a19.862 19.862 0 0 0 5.888-2.943c.5-5.185-.838-9.678-2.819-13.688Zm-11.54 10.96c-1.147 0-2.087-1.046-2.087-2.329 0-1.282.921-2.328 2.087-2.328 1.174 0 2.106 1.055 2.087 2.328 0 1.283-.922 2.329-2.087 2.329Zm6.446 0c-1.147 0-2.087-1.046-2.087-2.329 0-1.282.92-2.328 2.087-2.328 1.174 0 2.106 1.055 2.087 2.328 0 1.283-.922 2.329-2.087 2.329Z" />
          </svg>
        </a>
      </div>
    </div>
    </header>
    </div>
    </div>
  );
};

export default Header;
