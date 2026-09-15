"use client";
import Image from "next/image";
import Link from "next/link";

export default function History() {
  return (
    <section id="history" className="relative scroll-mt-28 pt-6 md:pt-10">

      <div className="relative w-full @container">
        
          {/* TAPE WRAPPER */}
          <div className="relative w-full flex justify-end">
            <div 
              className="relative w-[85%] sm:w-[75%] lg:w-[65%] aspect-[993/126] @container ml-0 mr-[calc(50%-50vw)]"
            >
              <Image
                src="/images/History-tape.png"
                alt="tape background"
                width={993}
                height={126}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center px-[6%]">
                <h2
                  style={{ fontFamily: "var(--font-koulen)" }}
                  className="text-[clamp(14px,9cqw,96px)] text-black tracking-wide text-center whitespace-nowrap"
                >
                  History of SheHacks+
                </h2>
              </div>
            </div>   
          </div>

          {/* NOTE CARD + TEXT */}
          <div className="relative w-full flex justify-end mt-[2%]">
            <div className="relative w-[clamp(220px,42%,608px)] aspect-[608/609] @container">
              <Image
                src="/images/history-notecard.png"
                alt="note card"
                fill
                className="object-contain object-left"
              />
              <div
                style={{ fontFamily: "var(--font-sometype-mono)" }}
                className="absolute top-[16%] left-[24%] w-[68%] text-[clamp(8px,3.6cqw,24px)] text-black leading-relaxed"
              >
                <p>
                  SheHacks+ traces its roots back to 11 years ago, emerging as a pioneering event aimed at tackling gender disparities in the tech industry head-on. Inspired by the growing recognition of underrepresentation and gender discrimination, the hackathon started as a grassroots initiative, driven by individuals deeply passionate about fostering diversity and inclusivity in technology.        
                </p>
              </div>
            </div>
          </div>

          {/* 11 CARDS IMAGE */}
          <div 
            className="absolute top-[60%] w-[clamp(140px,35%,607px)] ml-[calc(50%-50vw)] mr-0 left-0"
          >
            <div className="w-full">
              <Image 
                src="/images/cards.png" 
                alt="four of a kind eleven cards" 
                width={607} 
                height={825}
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>

      </div>
    </section>
  );
}
