"use client";

const PEOPLE = [
  { name: "Raisa Kayastha",   role: "CO-CHAIR", card: "/images/team/card-raisa.png",   linkedin: "https://www.linkedin.com/in/raisa-kayastha77/", tilt: -3 },
  { name: "Gurnoor Jande",    role: "CO-CHAIR", card: "/images/team/card-gurnoor.png", linkedin: "https://www.linkedin.com/in/gurnoor-jande-39a9321b1/", tilt: 0 },
  { name: "Ella Sajor",       role: "CO-CHAIR", card: "/images/team/card-ella.png",    linkedin: "https://www.linkedin.com/in/ella-sajor/", tilt: 3 },
  { name: "Eshanya Rukhaiyar", role: "DIRECTOR", card: "/images/team/card-eshanya.png", linkedin: "https://www.linkedin.com/in/eshanya-rukhaiyar/", tilt: -3 },
  { name: "Danica Keeler",    role: "DIRECTOR", card: "/images/team/card-danica.png",  linkedin: "https://www.linkedin.com/in/danicakeeler", tilt: -0 },
  { name: "Satwika Pujari",   role: "DIRECTOR", card: "/images/team/card-satwika.png", linkedin: "https://www.linkedin.com/in/satwikapujari/", tilt: 3 },
  { name: "Chloe Chong",      role: "DIRECTOR", card: "/images/team/card-chloe.png",   linkedin: "https://www.linkedin.com/in/cchloechong", tilt: -3 },
  { name: "Fiona Xu", role: "DIRECTOR", card: "/images/team/card-chloe.png", photo: "/images/team/fiona.png", linkedin: "https://www.linkedin.com/in/fiona-xu06/", tilt: 3 },
  { name: "Aroma Mahbub", role: "DIRECTOR", card: "/images/team/card-chloe.png", photo: "/images/team/aroma.png", linkedin: "https://www.linkedin.com/in/aroma-mahbub-584517377/", tilt: 0 },
];

function Card({ person }) {
  return (
    <a
      className="stage"
      href={person.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${person.name}, ${person.role}${person.linkedin ? " — open LinkedIn profile" : ""}`}
      style={{ transform: `rotate(${person.tilt}deg)` }}
    >
      <div className="inner">
        <div
          className="face front"
          style={{ backgroundImage: `url(${person.card})` }}
        >
          {person.photo && <>
            <img src={person.photo} alt={person.name} style={{ position: "absolute", left: "9.16%", top: "15.42%", width: "81.68%", height: "74.29%", objectFit: "cover" }} />
            <span className="absolute left-[9%] bottom-[3.5%] w-[83%] bg-[#efe2d2] text-black font-koulen text-[16px] leading-tight uppercase">{person.name}</span>
          </>}
        </div>
        <div className="face back" />
      </div>

      <style jsx>{`
        .stage {
          --card-w: min(220px, calc((100vw - 72px) / 2));
          display: block;
          text-decoration: none;
          cursor: pointer;
          width: var(--card-w);
          aspect-ratio: 273 / 389;
          perspective: 1200px;
          margin: 0;
          transition: transform 350ms ease, z-index 0s;
        }
        @media (min-width: 640px) {
          .stage { --card-w: min(220px, calc((100vw - 96px) / 3)); }
        }
        .stage:hover {
          z-index: 20;
        }
        .inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 650ms cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        @media (hover: hover) and (pointer: fine) {
          .stage:hover .inner {
            transform: rotateY(180deg) scale(1.08);
          }
        }
        .face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        .back {
          transform: rotateY(180deg);
          background-image: url("/images/team/cardback.png");
        }
      `}</style>
    </a>
  );
}

export default function TeamCards() {
  return (
    <section className="mx-auto w-full max-w-[800px] px-6 py-8 sm:py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-6 [&>a:last-child]:col-span-2 sm:[&>a:last-child]:col-span-1">
        {PEOPLE.slice(0, 3).map((p) => (
          <Card key={p.name} person={p} />
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-6 mt-8">
        {PEOPLE.slice(3).map((p) => (
          <Card key={p.name} person={p} />
        ))}
      </div>
    </section>
  );
}
