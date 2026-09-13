"use client";
import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "ABOUT", href: "/#about" },
  { label: "PAST WINNERS", href: "/#winners" },
  { label: "FAQ", href: "/#faq" },
  { label: "CONNECT WITH US", href: "/#connect" },
  { label: "GALLERY", href: "/gallery" },
  { label: "SHEHACKS", href: "/" },
];

// Logos scale together
const LOGO_SIZES = "w-[clamp(48px,7vw,96px)]";
// Nav text + gap scale
const NAV_TEXT_BASE  = "text-[clamp(11px,1.1vw,16px)]";
const NAV_TEXT_TIGHT = "max-[520px]:text-[11px] max-[460px]:text-[10px]";
const NAV_GAP_BASE   = "gap-[clamp(10px,2vw,36px)]";
const NAV_GAP_TIGHT  = "max-[520px]:gap-2 max-[460px]:gap-1.5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full text-white">
      <nav className="w-full px-4 py-0 flex items-start justify-between">
        {/* LOGOS */}
        <div className="flex items-start gap-3 m-0 p-0 shrink-0 ml-[clamp(8px,5vw,80px)]">
          <a
            id="mlh-trust-badge"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Major League Hacking 2026 Hackathon Season"
            className={LOGO_SIZES}
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
              alt="MLH Trust Badge"
              className="w-full h-auto"
            />
          </a>

          <a href="./">
            <Image
              src="/images/SHnavlogo.png"
              alt="SheHacks"
              width={98}
              height={74}
              className={`${LOGO_SIZES} h-auto select-none pointer-events-none mt-[clamp(6px,1.2vw,20px)]`}
              priority
            />
          </a>
        </div>

        {/* DESKTOP NAV (visible ≥ 400px) */}
        <div className="hidden min-[400px]:flex flex-1 min-w-0 max-w-full justify-center">
          <div className="flex flex-col items-center min-[400px]:-translate-x-[clamp(6px,0.8vw,18px)] min-[400px]:translate-y-[clamp(10px,1.6vw,24px)] max-w-full">
            {/* RAIL: shared width for words + line */}
            <div className="w-[min(50vw,1118px)] max-[520px]:w-[min(82vw,1000px)] max-w-full">
              {/* Words — single row, constrained to rail width */}
              <ul
                className={[
                  "flex flex-nowrap items-center justify-center uppercase font-semibold tracking-wide",
                  "px-[4px] overflow-hidden",
                  "translate-y-[clamp(2px,0.4vw,6px)]", // ↓ move words down (increase to go lower)
                  NAV_GAP_BASE,
                  NAV_GAP_TIGHT,
                  NAV_TEXT_BASE,
                  NAV_TEXT_TIGHT,
                ].join(" ")}
              >
                {NAV_LINKS.map((i) => (
                  <li key={i.href} className="whitespace-nowrap">
                    <a href={i.href} className="hover:opacity-90">
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Navline — same rail width, sits right below words */}
              <Image
                src="/images/navline.png"
                alt="Navigation line"
                width={1410}
                height={69}
                className="
                  pointer-events-none select-none block
                  w-full h-auto
                  mt-[clamp(1px,0.01vw,5px)]  /* ↑ increase = more gap; decrease = tighter */
                "
                priority
              />
            </div>
          </div>
        </div>

        {/* HAMBURGER (visible < 400px) */}
        <div className="block min-[400px]:hidden">
          <button
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg border border-white/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
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
