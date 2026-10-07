"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Connect() {
  const HEADING = "Connect With Us";
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        } else {
          setStarted(false);
          setShown(0);
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

    useEffect(() => {
    if (!started || shown >= HEADING.length) return;
    const t = setTimeout(() => setShown((n) => n + 1), 85);
    return () => clearTimeout(t);
  }, [started, shown]);
  return (
    <div className="flex flex-col items-center w-full">
      {/* Sponsors section */}
      <section className="relative w-full max-w-[1200px] mx-auto">
        {/* Centered text block */}
        <div className="flex flex-col items-center justify-center text-center py-8 px-4">
          <h1
            ref={headingRef}
            className="text-white text-[32px] sm:text-[48px] lg:text-[64px] min-h-[1.2em]"
          >
            <span aria-hidden="true" style={{ fontFamily: "var(--font-koulen)" }}>
              {HEADING.slice(0, shown)}
            </span>
            <span
              aria-hidden="true"
              className="caret"
              style={{ fontFamily: "var(--font-koulen)" }}
            >
              |
            </span>
            <span className="sr-only">{HEADING}</span>
          </h1>
          <p className="mt-2 text-white text-xs sm:text-sm md:text-base lg:text-lg">
            wits.uwo@gmail.com
          </p>

          {/* Three extra-small images under the text */}
          <div className="mt-6 flex items-center justify-center gap-1 sm:gap-2">
            <a
              href="https://www.linkedin.com/company/uwowits/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="relative w-4 sm:w-5 md:w-6 aspect-square"
            >
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                fill
                className="object-contain select-none pointer-events-none"
              />
            </a>

            <a
              href="https://www.instagram.com/wits.uwo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="relative w-4 sm:w-5 md:w-6 aspect-square"
            >
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                fill
                className="object-contain select-none pointer-events-none"
              />
            </a>

            <a
              href="https://www.facebook.com/wits.uwo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="relative w-4 sm:w-5 md:w-6 aspect-square"
            >
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                fill
                className="object-contain select-none pointer-events-none"
              />
            </a>
          </div>
        </div>

      </section>
        <style jsx>{`
        .caret {
          animation: blink 0.7s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}
