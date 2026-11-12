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

                            const isActive =
                                index === topCardIndex;

                            const isDealt =
                                index > topCardIndex;

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
                    <div className={styles.sponsorCTARow}>
                        <h2>BECOME OUR SPONSOR</h2>

                        <a
                            className={styles.sponsorButton}
                            href="https://tally.so/r/68gl4J"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            HERE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}