"use client";
import Image from "next/image";
import Link from "next/link";

export default function Olympics() {
  return (
    <section id="olympics" className="relative scroll-mt-28 pb-12">
      
      {/* PEN */}
      <div className="absolute top-[30%] right-0 mr-[calc(50%-50vw)] z-30 pointer-events-none w-[clamp(115px,30vw,631px)]">
        <Image
          src="/images/Pen.png"
          alt="pen"
          width={631}
          height={402}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="relative w-full flex flex-col items-start">

        {/* RIPPED PAPER WRAPPER*/}
        <div className="relative z-10 w-[96%] sm:w-[85%] md:w-[70%] -mt-2 -ml-2 aspect-[876/494] [container-type:size]">
          <Image
            src="/images/HO-Paper.png"
            alt="paper background"
            width={631}
            height={402}
            className="w-full h-auto object-contain"
          />

          {/* HACKER OLYMPICS TEXT */}
          <div className="absolute top-[3.5cqw] left-1/2 -translate-x-1/2 w-[91%] flex flex-col items-center text-black">
            <h2
              style={{ fontFamily: "var(--font-koulen)" }}
              className="text-[length:7.5cqw] leading-none uppercase text-neutral-900">
              Hacker Olympics
            </h2>
            <p
              style={{ fontFamily: "var(--font-sometype-mono)" }}
              className="mt-[1.5cqw] px-[3cqw] text-[length:2.8cqw] leading-relaxed text-neutral-800"
            >
                Hacker Olympics is our alternative competition stream designed for beginner hackers with little to no coding experience. We encourage everyone to try building a hack at SheHacks+, but we know jumping straight in can feel daunting. Beginners can apply for Hacker Olympics instead, a track built to grow coding skills and tech knowledge over the course of the event.
            </p>
          </div>

          {/* LEARN MORE */}
          <div className="flex justify-center -mt-[clamp(8px,1.2cqw,24px)]">
            <Link
              href="/olympics"
              aria-label="Learn more about Hacker Olympics"
              className="group inline-block"
            >
              <Image
                src="/images/Learn More Button.svg"
                alt="Learn More"
                width={270}
                height={73}
                priority
                sizes="(max-width: 1440px) 20vw, 279px"
                className="
                  h-auto
                  w-[clamp(100px,20vw,279px)]
                  transition-transform duration-200
                  group-hover:scale-[1.01] 
                  group-active:scale-[0.985]
                  hover:brightness-110
                  drop-shadow-md
                "
              />
            </Link>
          </div>
        </div>
      </div>     
    </section>
  );
}
