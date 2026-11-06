
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SPONSOR", href: "#sponsor" },
  { label: "OLYMPICS", href: "#olympics" },
  { label: "COMMUNITY", href: "#community" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Hide navbar when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10 || currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-black transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* CAUTION TAPE */}
      <div className="absolute top-0 left-0 w-full h-[clamp(20px,2.5vw,36px)] overflow-hidden select-none pointer-events-none">
        {/* Keep your existing caution tape design here */}
      </div>

      <nav className="relative w-full px-4 pt-[clamp(24px,3vw,36px)] flex items-center justify-between">
        {/* LEFT: LOGOS */}
        <div className="flex items-center gap-3 shrink-0 ml-[clamp(8px,5vw,80px)]">
          <a
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Major League Hacking 2026 Hackathon Season"
            className="shrink-0 w-[clamp(35px,7vw,96px)]"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
              alt="MLH Trust Badge"
              className="w-full h-auto"
            />
          </a>

          <a href="/" aria-label="SheHacks Home">
            <Image
              src="/images/logo.svg"
              alt="SheHacks"
              width={132}
              height={80}
              className="w-[clamp(60px,9.2vw,132px)] h-auto select-none"
              priority
            />
          </a>
        </div>

        {/* CENTER: DESKTOP NAVIGATION */}
        <div className="hidden min-[400px]:flex flex-1 justify-center">
          <ul
            className="flex items-center justify-center gap-[clamp(10px,2vw,36px)] text-[clamp(11px,1.1vw,16px)] uppercase tracking-wide"
            style={{ fontFamily: "var(--font-koulen), sans-serif" }}
          >
            {NAV_LINKS.map((item) => (
              <li key={item.href} className="whitespace-nowrap">
                <a
                  href={item.href}
                  className="hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: SOCIAL LINKS */}
        <div className="hidden min-[400px]:flex items-center gap-[clamp(12px,2vw,24px)] shrink-0">
          <a
            href="https://www.linkedin.com/company/shehacks/about/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-70 transition-opacity"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/wits.uwo/?hl=en"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:opacity-70 transition-opacity"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/wits.uwo/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:opacity-70 transition-opacity"
          >
            Facebook
          </a>
        </div>

        {/* HAMBURGER: MOBILE */}
        <div className="block min-[400px]:hidden">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/60"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-black" />
              <span className="block h-0.5 w-5 bg-black" />
              <span className="block h-0.5 w-5 bg-black" />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-transparent min-[400px]:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE DROPDOWN */}
      <div
        id="mobile-menu"
        className={`min-[400px]:hidden fixed top-[clamp(64px,10vw,90px)] left-0 right-0 z-50 transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-4 rounded-xl border border-white/20 bg-black/90 backdrop-blur p-3">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-lg px-3 py-2 uppercase tracking-wide text-white hover:bg-white/10"
                  style={{ fontFamily: "var(--font-koulen), sans-serif" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
