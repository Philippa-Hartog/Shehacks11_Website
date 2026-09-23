"use client";

import { useState } from "react";
import styles from "./sponsor.module.css";

const sponsors = [
  {
    name: "CIBC",
    card: "/images/sponsors/cibc-card.png",
  },
  {
    name: "CGI",
    card: "/images/sponsors/cgi-card.png",
  },
  {
    name: "Dynatrace",
    card: "/images/sponsors/dynatrace-card.png",
  },
  {
    name: "Nokia",
    card: "/images/sponsors/nokia-card.png",
  },
  {
    name: "Bell",
    card: "/images/sponsors/bell-card.png",
  },
  {
    name: "Scotiabank",
    card: "/images/sponsors/scotiabank-card.png",
  },
];

// the order which the cards should leave the deck
const dealPositions = [
  "topRight",
  "middle",
  "topLeft",
  "bottomRight",
  "bottomMiddle",
  "bottomLeft",
];

function SponsorCard({
  sponsor,
  index,
  isDealt,
  isActive,
  position,
  onFlip,
}) {
  return (
    <div
      className={`
        ${styles.card}
        ${isDealt ? styles.dealt : styles.deckCard}
        ${isDealt ? styles[position] : ""}
        ${isActive ? styles.activeCard : ""}
      `}
      style={{ "--card-index": index }}
      onMouseEnter={isActive ? onFlip : undefined}
    >
      <div className={styles.cardInner}>
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <img
            src="/images/sponsors/card-back.png"
            alt="SheHacks sponsor card back"
          />
        </div>
        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          <img
            src={sponsor.card}
            alt={`${sponsor.name} sponsor card`}
          />
        </div>

      </div>
    </div>
  );
}

export default function Sponsor() {

  // how many cards have actually been dealt out of the deck
  const [dealtCount, setDealtCount] = useState(0);

  const handleFlip = () => {
    if (dealtCount < sponsors.length) {
      setDealtCount((prev) => prev + 1);
    }
  };

  return (
    <section className={styles.sponsorsSection}>
      <div className={styles.sponsorContent}>

        <div className={styles.cardsRow}>

          <div className={styles.cardDeck}>

            {sponsors.map((sponsor, index) => {

              const topCardIndex =
                sponsors.length - 1 - dealtCount;

                // the card is currently on the top of the deck and can be hovered
              const isActive =
                index === topCardIndex;

             // cards above the current top card have already been dealt
              const isDealt =
                index > topCardIndex;

             // where the card should go after its being dealt
              const dealNumber =
                sponsors.length - 1 - index;

              const position =
                dealPositions[dealNumber];

              return (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  index={index}
                  isDealt={isDealt}
                  isActive={isActive}
                  position={position}
                  onFlip={handleFlip}
                />
              );
            })}

          </div>
          <button
            className={styles.previousSponsors}
            type="button"
          >
            <img
              src="/images/sponsors/previoussponsors-card.png"
              alt="Previous sponsors"
            />
          </button>

        </div>


        <div className={styles.sponsorCTA}>
          <h2>BECOME OUR SPONSOR</h2>

          <a
            className={styles.sponsorButton}
            href="#sponsor-form"
          >
            HERE
          </a>
        </div>
            
      </div>
    </section>
  );
}