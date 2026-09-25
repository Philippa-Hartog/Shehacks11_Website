"use client";
import Image from "next/image";

export default function Wits() {
  return (
    <section id="wits" className="relative scroll-mt-28 w-full pt-12 pb-4 sm:pb-12">
      <div className="relative w-full @container min-h-[400px] sm:min-h-[550px] flex flex-col justify-center">

        {/* FOOTPRINT */}
        <div 
          className="absolute top-[25%] left-[3%] pointer-events-none z-30"
          style={{ width: "calc(var(--footprint-unit) * 9)" }}
        >
          <Image
            src="/images/footsteps 1.png"
            alt="Footprints background graphic"
            width={268}
            height={658}
            className="w-full h-auto"
          />
        </div>

        {/* MAGNIFYING GLASS */}
        <div className="absolute top-[15%] left-0 ml-[calc(50%-50vw)] w-[clamp(145px,35%,480px)] pointer-events-none z-30">
            <Image
              src="/images/magnifying-glass.png"
              alt="Magnifying glass"
              width={480}
              height={480}
              className="w-full h-auto object-contain"
            />
        </div>

        {/* RIGHT CONTENT COLUMN */}
        <div className="relative z-20 ml-auto w-[95%] sm:w-[72%] md:w-[62%] flex flex-col items-end pr-0 sm:pr-[8%] mr-[calc(50%-50vw)] sm:mr-0">

          {/* WITS LOGO */}
          <div className="w-full flex justify-end">
            <div className="relative w-[clamp(150px,35cqw,490px)] aspect-[490/265] mb-2 sm:mb-3">
              <Image
                src="/images/wits.png"
                alt="wits+"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* RIPPED PAPER */}
          <div className="relative w-full aspect-[795/322] @container">
            <Image
              src="/images/wits-paper.png"
              alt="wits paper background"
              fill
              className="object-contain object-right drop-shadow-lg"
            />

            {/* CARD TEXT CONTENT */}
            <div
              style={{ 
                fontFamily: "var(--font-sometype-mono)",
                transform: "rotate(1.96deg)"
              }}
              className="absolute inset-0 flex flex-col justify-center px-[8%] py-[3%] text-black leading-snug antialiased"
            >
              <p className="font-bold text-[length:3.6cqw] mb-[1cqw] text-center">
                Building a future for women+ in tech
              </p>
              
               <p className="text-[length:3cqw]">
                WITS+ is a club at Western University that provides
                its community with initiatives and resources to
                inspire. We aim to empower women, women-identifying,
                and non-binary individuals in tech and equip them
                with the necessary skills to succeed in the industry.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
