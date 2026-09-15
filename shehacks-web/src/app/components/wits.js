"use client";
import Image from "next/image";

export default function Wits() {
  return (
    <section id="wits" className="relative scroll-mt-28 w-full pt-12 pb-4 sm:pb-12">
      <div className="relative w-full @container min-h-[400px] sm:min-h-[550px] flex flex-col justify-center">

        {/* FOOTPRINTS */}
        <div 
          className="absolute top-[30%] left-[3%] pointer-events-none z-30"
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
          <div className="w-full">
            <Image
              src="/images/magnifying-glass.png"
              alt="Magnifying glass"
              width={480}
              height={480}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* RIGHT CONTENT COLUMN */}
        <div className="relative z-20 ml-auto w-[90%] sm:w-[65%] md:w-[55%] flex flex-col items-end pr-[4%] sm:pr-[8%]">

          {/* WITS LOGO */}
          <div className="flex flex-col items-end text-right">
            <div className="relative w-[clamp(200px,35cqw,490px)] aspect-[490/265] mb-2 sm:mb-3 mx-auto">
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
              className="absolute inset-0 flex flex-col justify-center px-[8%] py-[6%] text-black leading-snug antialiased"
            >
              <p className="font-bold text-[clamp(12px,4cqw,35px)] mb-2 text-center">
                Building a future for women+ in tech
              </p>
              
              <p className="text-[clamp(8px,3cqw,30px)]">
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
