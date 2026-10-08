"use client";
import { useState } from "react";

const PEOPLE = [
  { name: "Raisa Kayastha",    role: "Co-Chair SheHacks", photo: "/images/hacker-olympics/teamphotos/raisa pic.png",    linkedin: "https://www.linkedin.com/in/raisa-kayastha77/",        tabX: 26  },
  { name: "Gurnoor Jande",     role: "Co-Chair SheHacks", photo: "/images/hacker-olympics/teamphotos/gurnoor pic.png",  linkedin: "https://www.linkedin.com/in/gurnoor-jande-39a9321b1/", tabX: 213 },
  { name: "Ella Sajor",        role: "Co-Chair SheHacks", photo: "/images/hacker-olympics/teamphotos/ella pic.png",     linkedin: "https://www.linkedin.com/in/ella-sajor/",             tabX: 365 },
  { name: "Eshanya Rukhaiyar", role: "Director SheHacks", photo: "/images/hacker-olympics/teamphotos/image 323.png",  linkedin: "https://www.linkedin.com/in/eshanya-rukhaiyar/",      tabX: 537 },
  { name: "Danica Keeler",     role: "Director SheHacks", photo: "/images/hacker-olympics/teamphotos/headshot1 1.png",   linkedin: "https://www.linkedin.com/in/danicakeeler",            tabX: 702 },
  { name: "Satwika Pujari",    role: "Director SheHacks", photo: "/images/hacker-olympics/teamphotos/Satwika pic.png",  linkedin: "https://www.linkedin.com/in/satwikapujari/",          tabX: 26  },
  { name: "Chloe Chong",       role: "Director SheHacks", photo: "/images/hacker-olympics/teamphotos/image 322.png",    linkedin: "https://www.linkedin.com/in/cchloechong",             tabX: 229 },
];

const STEP = 166;
const PULL = 483;

export default function TeamFolders() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="wrap">
      <div className="stage">
        {PEOPLE.map((p, i) => {
          const open = openIndex === i;
          const n = i + 1;
          return (
            <div
              className="folder"
              key={p.name}
              style={{ top: i * STEP, zIndex: PEOPLE.length - i }}
            >
            <img className="back" src={`/images/folders/folder-back-${n}.png`} alt="" />

            <img className="sheet" src={`/images/folders/folder-sheet-${n}.png`} alt="" />

              <div
                className="paper"
                style={{
                  left: p.tabX,
                  transform: open ? `translateY(${PULL}px)` : "translateY(0)",
                }}
              >
                <img className="paperart" src={`/images/folders/folder-paper-${n}.png`} alt="" />

                <a
                  className="pic"
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={open ? 0 : -1}
                  aria-label={`${p.name} on LinkedIn`}
                >
                  <img src={p.photo} alt={p.name} />
                </a>

                <p className="cname">{p.name}</p>
                <p className="crole">{p.role}</p>
              </div>

              <img className="front" src={`/images/folders/folder-top-${n}.png`} alt="" />

              <button
                className="tab"
                style={{ left: p.tabX, width: 445 }}
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
              >
                {p.name}
              </button>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .wrap {
          --s: min(1, calc(100vw / 1260));
          display: flex;
          justify-content: center;
          height: calc(2350px * var(--s));
          overflow: hidden;
        }
        .stage {
          position: relative;
          width: 1170px;
          height: 2350px;
          transform: scale(var(--s));
          transform-origin: top center;
          flex: none;
        }
        .folder { position: absolute; left: 0; width: 1170px; height: 882px; }

        .back {
          position: absolute; top: 64px; left: 24px;
          width: 1173px; height: 865px;
          z-index: 0;
        }

        .sheet {
          position: absolute; top: 60px; left: 23px;
          width: 1124px; height: 811px;
          z-index: 1;
        }
        .paper {
          position: absolute; top: 56px;
          width: 445px; height: 811px;
          z-index: 2;
          transition: transform 600ms cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        .paperart {
          position: absolute; inset: 0;
          width: 445px; height: 811px;
        }
        .front {
          position: absolute; top: 0; left: 0;
          width: 1170px; height: 882px;
          z-index: 3;
        }

        .tab {
          position: absolute; top: 788px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none; background: transparent;
          font-family: var(--font-sometype) !important;
          font-weight: 600; font-size: 30px; color: #313131;
          cursor: pointer; padding: 0;
          z-index: 4;
        }

        .pic {
          position: absolute; top: 394px; left: 98px;
          width: 247px; height: 224px;
          background: #D9D9D9;
          display: block; overflow: hidden;
          z-index: 1;
        }
        .pic img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .cname, .crole {
          position: absolute; left: 0; width: 445px;
          text-align: center;
          font-family: var(--font-sometype) !important;
          z-index: 1;
        }
        .cname { top: 666px; font-size: 36px; font-weight: 700; color: #313131; }
        .crole { top: 709px; font-size: 36px; font-weight: 600; color: #5E5E5E; }
      `}</style>
    </section>
  );
}