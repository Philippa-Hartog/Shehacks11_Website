"use client";
import { useState } from "react";

const DEFAULT_ITEMS = [
  { q: "What challenges will I compete in?", a: "TBD — venue and address to be provided." },
  { q: "If I'm a beginner, can I sompete in the regular stream?", a: "" },
  { q: "Do I need to come with a team?", a: "" },
  { q: "Can I compete in both Hacker Olympics and regular stream?", a: "" },
];

// These bounds hide the empty margins in the original PNG exports.
const ART = {
  paper: {
    file: "white_stickynote.png",
    bounds: [31.4, 50, 34.6, 35.4],
  },
  label: {
    file: "red_square.png",
    bounds: [33.8, 47.8, 14, 5.3],
  },
  footprints: {
    file: "Feather.png",
    bounds: [35.5, 29.5, 26.5, 46.5],
  },
  hearts: {
    file: "hearts_card.png",
    bounds: [33.5, 23.8, 34.6, 47.8],
  },
  spades: {
    file: "spades_card.png",
    bounds: [33.5, 23.8, 34.6, 47.8],
  },
  diamonds: {
    file: "dimond_card.png",
    bounds: [33.5, 23.8, 34.6, 47.8],
  },
};

function Artwork({ name, className = "" }) {
  const { file, bounds } = ART[name];
  const [x, y, width, height] = bounds;

  return (
    <div
      aria-hidden="true"
      className={`absolute bg-no-repeat pointer-events-none select-none ${className}`}
      style={{
        backgroundImage: `url("/images/faq/${file}")`,
        backgroundSize: `${10000 / width}% ${10000 / height}%`,
        backgroundPosition: `${(x / (100 - width)) * 100}% ${
          (y / (100 - height)) * 100
        }%`,
      }}
    />
  );
}

export default function Faq({ items = DEFAULT_ITEMS }) {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative scroll-mt-28 w-full flex justify-center px-4 overflow-visible -mt-6 sm:mt-0">
      
      {/* FAQ PAPER CONTAINER */}
      <div className="relative w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl aspect-[1244/1270]">
        <Image
          src="/images/FAQ-paper.png"
          alt="FAQ paper background"
          fill
          className="object-contain object-top drop-shadow-xl"
        />
         </div>
        {/* INVISIBLE FOOTPRINTS */}
          <div
            className="absolute top-0 right-[10%] z-0 pointer-events-none "
            style={{
              width: "calc(var(--footprint-unit) * 9)",
              transform: "translateY(-31%)",
              mixBlendMode: "multiply"
            }}
          >
          <Image
            src="/images/footsteps 2.png"
            alt="Footprints background graphic"
            width={268}
            height={658}
            className="w-full h-auto"
          />
        </div>
        
        <div
          className="absolute top-[40%] left-[10%] pointer-events-none z-20"
          style={{width: "calc(var(--footprint-unit) * 9)"}}
        >
          <Image
            src="/images/footsteps 3.png"
            alt="Footprints background graphic"
            width={268}
            height={658}
            className="w-full h-auto"
          />
        </div>

        {/* RED FAQ HEADER */}
        <div className="relative -top-[5%] left-[7%] w-[clamp(100px,35%,555px)] z-20">
          <Image
            src="/images/FAQ.png"
            alt="FAQ title"
            width={555}
            height={202}
            className="w-full h-auto"
          />
          <span 
            style={{ fontFamily: "var(--font-koulen)" }}
            className="absolute inset-0 z-30 flex items-center justify-center text-white text-[clamp(25px,6vw,85px)] tracking-wider"
          >
            FAQ
          </span>     
        </div>

        {/* 11 CARDS */}
        <div 
          className="hidden sm:block absolute -bottom-30 w-[clamp(140px,20vw,378px)] aspect-square pointer-events-none z-20 overflow-visible"         
          style={{ right: "calc(50% - 50vw)" }}
        >
          <Image
            src="/images/Cards-FAQ.png"
            alt="Playing cards"
            width={378}
            height={623}
            className="w-full h-auto"
          />
        </div>

        {/* QUESTIONS */}
        <div className="absolute inset-0 @container">
        <div 
          className="h-full pt-[10%] sm:pt-[15%] px-[10%] pb-[8%] overflow-y-auto"
          style={{ fontFamily: "var(--font-sometype-mono)" }}
        >
          <ul className="divide-y divide-neutral-400/50">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i} className="py-3 sm:py-3.5">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group w-full flex items-center justify-between gap-4 text-left focus:outline-none"
                  >
                    <span className="text-neutral-900 font-medium text-[clamp(8px,2cqw,18px)] leading-relaxed">
                      {item.q}
                    </span>

                    {/* PLUS / MINUS ICONS */}
                    <span className="relative inline-flex h-4 w-4 items-center justify-center shrink-0" aria-hidden="true">
                      <span className="absolute h-[2px] w-3.5 bg-neutral-800 transition-opacity duration-200" />
                      <span
                        className={`absolute h-3.5 w-[2px] bg-neutral-800 transition-transform duration-200 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </button>

                  {/* ANSWERS */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-2 text-neutral-700 text-[clamp(8px,1.8cqw,14px)] leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="absolute z-[2] right-[-50px] bottom-[-80px] w-[260px] h-[370px] pointer-events-none [transform:scale(0.62)] origin-bottom-right sm:right-[-105px] sm:bottom-[-125px] sm:transform-none sm:origin-center" aria-hidden="true">
            <Artwork name="diamonds" className="w-[195px] h-[270px] top-[95px] left-0 [transform:rotate(-32deg)]" />
            <Artwork name="hearts" className="w-[195px] h-[270px] top-0 left-[65px] [transform:rotate(-26deg)]" />
            <Artwork name="spades" className="w-[195px] h-[270px] top-[85px] left-[70px] [transform:rotate(-13deg)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
