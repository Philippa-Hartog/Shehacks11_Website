"use client";
import { useState } from "react";
import Image from "next/image";

const DEFAULT_ITEMS = [
  { q: "What challenges will I compete in?", a: "TBD — venue and address to be provided." },
  { q: "If I'm a beginner, can I sompete in the regular stream?", a: "" },
  { q: "Do I need to come with a team?", a: "" },
  { q: "Can I compete in both Hacker Olympics and regular stream?", a: "" },
];

export default function Faq({ items = DEFAULT_ITEMS }) {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative scroll-mt-28 py-5 sm:py-15 w-full">
      <h2 className="text-center font-semibold text-white"
          style={{ fontSize: "clamp(40px, 5vw, 50px)" }}>
        FAQ
      </h2>
      <div className="pointer-events-none absolute right-[150] top-[-50] hidden sm:block opacity-100">
        <Image
          src="/images/faqstars.png"
          alt=""
          width={48*2}
          height={48*2}
          className="select-none"
          priority
        />
      </div>
    
      <div className="mx-auto mt-6 sm:mt-8 w-full max-w-3xl px-4">
        <ul className="divide-y divide-white/15">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="py-3 sm:py-4">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group w-full flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                >
                  <span
                    className="text-white font-semibold tracking-tight"
                    style={{ fontSize: "clamp(14px, 1.6vw, 18px)" }}
                  >
                    {item.q}
                  </span>

                  <span className="relative inline-flex h-5 w-5 items-center justify-center" aria-hidden="true">
                    <span className="absolute h-[2px] w-3.5 bg-white transition-opacity duration-200" />
                    <span
                      className={`absolute h-3.5 w-[2px] bg-white transition-transform duration-200 ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>

                {/* answer */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="pt-3 text-white/95 font-normal leading-relaxed"
                      style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>   
    </section>
  );
}
