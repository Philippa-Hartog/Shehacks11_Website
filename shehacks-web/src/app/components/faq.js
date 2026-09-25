"use client";
import { useState } from "react";
import Image from "next/image";

const DEFAULT_ITEMS = [
  { q: "When are Hacker Applications?", a: "Hacker applications will be released in November, Keep an eye out on our Social media to be kept up to date with information on SheHacks+." },
  { q: "What will be accommodated?", a: "The arrangements will include meals, comfortable sleeping accommodations, and travel reimbursements case by case for those traveling a considerable distance to the venue." },
  { q: "Where will SheHacks+ take place?", a: "TBD — venue and address to be provided." },
  { q: "Does SheHacks+ cost anything?", a: "SheHacks is completely free, due to our generous sponsors! You will have access to a multitude of workshops and tools to help with your hack!" },
  { q: "Do I need to come with a team?", a: "You can come solo or with a team. If you already have a team of ( 3-4 people), you can register with them! If you don’t have a team there will be time before hacking to form teams or we can match you up with one before the event." },
  { q: "Can I still come if I’m not a woman+?", a: "SheHacks+ is designed to be an inclusive space to support female-identifying and non-binary individuals who are interested in technology. As we're focused on creating a talent pipeline from minorities in tech, this event is specifically created as a place for women+ to explore the tech industry in a supportive way. Otherwise, we welcome people of all genders to participate as a volunteer or mentor. Keep an eye out on our Facebook and website for more information." },
  { q: "I’m a recently graduated student. Can I still apply?", a: "Yes! We welcome all students as well as new grads to attend SheHacks+. There will be many opportunities to meet with sponsors and network. This would be the perfect time to search for a job/internship!" },
  { q: "I don’t attend a Canadian university. Can I still apply?", a: "Yes! SheHacks+ welcomes students from around the world to participate. The only downside is we may not be able to reimburse your travel costs to our venue." },
];

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
        </div>
        </div>

      </div>
    </section>
  );
}
