"use client";

import { useEffect, useState } from "react";

interface DustParticle {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  opacity: number;
  scale: number;
  drift1: string;
  drift2: string;
  drift3: string;
  isPurple: boolean;
}

export function PurpleDust() {
  const [particles, setParticles] = useState<DustParticle[]>([]);

  useEffect(() => {
    // Generate random particles only on the client side to prevent hydration mismatches
    const newParticles: DustParticle[] = Array.from({ length: 65 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      // Negative delay means they'll instantly appear already en route on page load
      delay: `-${Math.random() * 10}s`,
      // Realistic, gentle ash floating duration
      duration: `${3 + Math.random() * 4}s`,
      // Sub-pixel to very tiny dots (0.1px to 0.6px)
      size: `${0.1 + Math.random() * 0.5}px`,
      // Glowing embers
      opacity: 0.3 + Math.random() * 0.6,
      scale: 0.5 + Math.random() * 1,
      // Erratic zigzag swaying (drift1, 2, and 3 points) - made slightly gentler
      drift1: `${(Math.random() - 0.5) * 40}px`,
      drift2: `${(Math.random() - 0.5) * 80}px`,
      drift3: `${(Math.random() - 0.5) * 150}px`,
      // 40% chance of being solid purple instead of white
      isPurple: Math.random() < 0.4
    }));
    
    // Defer state update to avoid 'set-state-in-effect' linter rule and React cascading render warnings
    const timer = setTimeout(() => {
      setParticles(newParticles);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden aria-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`dust-particle ${p.isPurple ? 'purple-core' : ''}`}
          style={
            {
              left: p.left,
              width: p.size,
              height: p.size, // Perfectly circular like embers
              animationDelay: p.delay,
              animationDuration: p.duration,
              "--max-opacity": p.opacity,
              "--scale": p.scale,
              "--drift1": p.drift1,
              "--drift2": p.drift2,
              "--drift3": p.drift3,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
