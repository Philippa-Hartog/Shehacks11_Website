"use client";
import { useState, useEffect } from "react";
import Image from "next/image";


const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SPONSOR", href: "#sponsor" },
  { label: "HACKER OLYMPICS", href: "#hacker-olympics" },
  { label: "FAQ", href: "#faq" },
  { label: "GALLERY", href: "#gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const[isVisible, setIsVisible] = useState(true);
  const[lastScrollY, setLastScrollY] = useState(0);

  useEffect (() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      //show navbar if scrolling up or near the top
      if (currentScrollY < 10 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
     //if scrolling down, hide navbar
      else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY)
    };

    window.addEventListener("scroll", handleScroll, { passive: true});
    return () => window.removeEventListener("scroll", handleScroll); 
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-black transition-transform duration-300 ease-in-out ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>

      {/* CAUTION TAPE */}
      <div className="absolute top-0 left-0 w-full h-[clamp(20px,2.5vw,36px)] overflow-hidden select-none pointer-events-none">
        <Image 
          src="/images/caution_tape.png"
          alt="Caution tape background"
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />
      </div>

      <nav className="w-full px-4 py-0 flex items-start justify-between">
        
        {/* LOGOS */}
        <div className="relative flex items-start gap-1 m-0 p-0 shrink-0 ml-[clamp(9px,6.2vw,90px)] z-50">
          <a
            id="mlh-trust-badge"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Major League Hacking 2026 Hackathon Season"
            className={`mt-0 shrink-0 w-[clamp(48px,7vw,96px)]`}
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
              alt="MLH Trust Badge"
              className="w-full h-auto"
            />
          </a>
            <a href="./" 
            className="mt-[clamp(7px,1.6vw,24px)] shrink-0"
            >
              <Image
                src="/images/logo.png"
                alt="SheHacks"
                width={132}
                height={80}
                className={`w-[clamp(66px,9.2vw,132px)] h-auto select-none pointer-events-none`}
                priority
              />
            </a>
        </div>

        {/* DESKTOP NAV (visible ≥ 400px) */}
        <div className="hidden min-[400px]:flex flex-1 min-w-0 justify-center items-start mt-[clamp(20px,4.62vw,67px)] z-10">
          <div className="relative flex items-center justify-center w-[clamp(400px,67vw,974px)] max-w-full">
              
              {/* Yellow navline — sits right behind words */}
              <Image
                src="/images/yellow_navbar.png"
                alt="Navigation line"
                width={974}
                height={60}
                className="w-full h-auto pointer-events-none select-none drop-shadow-sm"
              />

              {/* Text layer */}
              <div className="absolute inset-0 flex items-center justify-between px-[clamp(15px,3.8vw,55px)]">
              
                {/* Left: Navigation links */}
                <ul className="font-koulen flex items-center min-w-0 gap-[clamp(8px,2.7vw,40px)] text-[clamp(10px,1.37vw,20px)]">
                  {NAV_LINKS.map((i) => (
                    <li key={i.href} className="whitespace-nowrap">
                      <a
                        href={i.href} 
                        style={{ fontFamily: "var(--font-koulen), sans-serif" }}
                        className="hover:opacity-70 transition-opacity"
                      >
                        {i.label}
                      </a>
                    </li>
                  ))}
                </ul>
                
                {/* Right: Social logos*/}
                <div className="flex items-center gap-[clamp(16px,2.7vw,40px)]">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Image
                      src="/images/linkedin2.png"
                      alt="Linkedin"
                      width={22}
                      height={22}
                      className="w-[clamp(4px,1.5vw,22px)] h-auto"
                    />
                  </a>

                  <a 
                    href="https://instagram.com"
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Image
                      src="/images/instagram2.png" 
                      alt="Instagram" 
                      width={24} 
                      height={22}
                      className="w-[clamp(14px,1.7vw,24px)] h-auto"
                    />
                  </a>

                  <a 
                    href="https://facebook.com"
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Image
                      src="/images/facebook2.png" 
                      alt="Facebook" 
                      width={18}
                      height={22}
                      className="w-[clamp(10px,1.2vw,18px)] h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

        {/* HAMBURGER (visible < 400px) */}
        <div className="block min-[400px]:hidden mt-[3vw]">
          <button
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg border border-white/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-black" />
              <span className="block h-0.5 w-6 bg-black" />
              <span className="block h-0.5 w-6 bg-black" />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN (< 400px) */}
      <div
        id="mobile-menu"
        className={`min-[400px]:hidden fixed top-0 left-0 right-0 z-50 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } transition-opacity duration-200`}
      >
        <div className="mt-[clamp(56px,10vw,72px)] mx-4 rounded-xl border border-white/20 bg-black/80 backdrop-blur p-3">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-lg px-3 py-2 uppercase tracking-wide hover:bg-white/10"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
