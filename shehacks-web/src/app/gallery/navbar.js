"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
        <div className="relative flex items-start gap-1 m-0 p-0 shrink-0 z-50">
          <a
            id="mlh-trust-badge"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Major League Hacking 2026 Hackathon Season"
            className={`mt-0 shrink-0 w-[clamp(35px,7vw,96px)]`}
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
                className={`w-[clamp(50px,9.2vw,132px)] h-auto select-none pointer-events-none`}
                priority
              />
            </a>
        </div>

        {/* DESKTOP + MOBILE NAV */}
        
      </nav>
    </header>
  );
}
