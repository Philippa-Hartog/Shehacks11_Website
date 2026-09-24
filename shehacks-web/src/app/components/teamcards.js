"use client";

const PEOPLE = [
  { name: "Raisa Kayastha",   role: "CO-CHAIR", card: "/images/team/card-raisa.png",   linkedin: "https://www.linkedin.com/in/raisa-kayastha77/", tilt: -3 },
  { name: "Gurnoor Jande",    role: "CO-CHAIR", card: "/images/team/card-gurnoor.png", linkedin: "https://www.linkedin.com/in/gurnoor-jande-39a9321b1/", tilt: 0 },
  { name: "Ella Sajor",       role: "CO-CHAIR", card: "/images/team/card-ella.png",    linkedin: "https://www.linkedin.com/in/ella-sajor/", tilt: 3 },
  { name: "Eshanya Rukhaiyar", role: "DIRECTOR", card: "/images/team/card-eshanya.png", linkedin: "https://www.linkedin.com/in/eshanya-rukhaiyar/", tilt: -3 },
  { name: "Danica Keeler",    role: "DIRECTOR", card: "/images/team/card-danica.png",  linkedin: "https://www.linkedin.com/in/danicakeeler", tilt: -0 },
  { name: "Satwika Pujari",   role: "DIRECTOR", card: "/images/team/card-satwika.png", linkedin: "https://www.linkedin.com/in/satwikapujari/", tilt: 3 },
  { name: "Chloe Chong",      role: "DIRECTOR", card: "/images/team/card-chloe.png",   linkedin: "https://www.linkedin.com/in/cchloechong", tilt: -3 },
];

function Card({ person }) {
  return (
    <a
      className="stage"
      href={person.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${person.name}, ${person.role} — open LinkedIn profile`}
      style={{ transform: `rotate(${person.tilt}deg)` }}
    >
      <div className="inner">
        <div
          className="face front"
          style={{ backgroundImage: `url(${person.card})` }}
        />
        <div className="face back" />
      </div>

      <style jsx>{`
        .stage {
          --card-w: 220px;
          display: block;
          text-decoration: none;
          cursor: pointer;
          width: var(--card-w);
          aspect-ratio: 273 / 389;
          perspective: 1200px;
          margin: 0 10px;
          transition: transform 350ms ease, z-index 0s;
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
    <section className="py-16">
      <div className="flex justify-center flex-wrap">
        {PEOPLE.slice(0, 3).map((p) => (
          <Card key={p.name} person={p} />
        ))}
      </div>
      <div className="flex justify-center flex-wrap mt-6">
        {PEOPLE.slice(3).map((p) => (
          <Card key={p.name} person={p} />
        ))}
      </div>
    </section>
  );
}