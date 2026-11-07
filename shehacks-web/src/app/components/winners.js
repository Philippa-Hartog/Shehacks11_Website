"use client";

import { useState } from "react";
import styles from "./winners.module.css";

export default function Winners() {
    const [newspaperOpen, setNewspaperOpen] = useState(false);
    const [newspaperTwoOpen, setNewspaperTwoOpen] = useState(false);
    const [newspaperThreeOpen, setNewspaperThreeOpen] = useState(false);
    const [newspaperFourOpen, setNewspaperFourOpen] = useState(false);

    return (
        <section
            id="winners"
            className={styles.winnersSection}
        >
            <div className={styles.floor}>

                {/* coffee table stuff */}
                <img
                    src="/images/winners/coffee-table.png"
                    alt=""
                    aria-hidden="true"
                    className={styles.coffeeTable}
                />

                {/* first newspaper stuff */}
                <button
                    type="button"
                    className={`
                        ${styles.newspaper}
                        ${styles.newspaperOne}
                        ${newspaperOpen ? styles.newspaperOneOpen : ""}
                    `}
                    onClick={() =>
                        setNewspaperOpen((current) => !current)
                    }
                    aria-pressed={newspaperOpen}
                >
                    <img
                        src="/images/winners/newspaper.png"
                        alt=""
                        aria-hidden="true"
                        className={styles.newspaperImage}
                    />

                    <div className={styles.projectImage}>
                        <img
                            src="/images/hacker-olympics/winners/creativearmor.jpg"
                            alt="CreativeArmor"
                        />
                    </div>

                    <div className={styles.projectInfo}>
                        <h3>CreativeArmor</h3>

                        <p>
                            CreativeArmor provides active defense against deepfakes and identity theft using cryptographic biometric verification. 
                        </p>
                    </div>
                </button>

                {/* second newspaper stuff */}
                <button
                    type="button"
                    className={`
                        ${styles.newspaper}
                        ${styles.newspaperTwo}
                        ${newspaperTwoOpen ? styles.newspaperTwoOpen : ""}
                    `}
                    onClick={() =>
                        setNewspaperTwoOpen((current) => !current)
                    }
                    aria-pressed={newspaperTwoOpen}
                >
                    <img
                        src="/images/winners/newspaper.png"
                        alt=""
                        aria-hidden="true"
                        className={styles.newspaperImage}
                    />

                    <div className={styles.projectImage}>
                        <img
                            src="/images/hacker-olympics/winners/lingobun.jpg"
                            alt="Lingo bunns"
                        />
                    </div>

                    <div className={styles.projectInfo}>
                        <h3>LingoBunns</h3>

                        <p>
                           Some families lose language between generations. LINGOBUNNS helps bring it back, teaching kids through real conversation, stories, and play.
                        </p>
                    </div>
                </button>

                {/* third newspaper stuff */}
                <button
                    type="button"
                    className={`
                        ${styles.newspaper}
                        ${styles.newspaperThree}
                        ${newspaperThreeOpen ? styles.newspaperThreeOpen : ""}
                    `}
                    onClick={() =>
                        setNewspaperThreeOpen((current) => !current)
                    }
                    aria-pressed={newspaperThreeOpen}
                >
                    <img
                        src="/images/winners/newspaper.png"
                        alt=""
                        aria-hidden="true"
                        className={styles.newspaperImage}
                    />

                    <div className={styles.projectImage}>
                        <img
                            src="/images/hacker-olympics/winners/tedtalks.png"
                            alt="tedtalks"
                        />
                    </div>

                    <div className={styles.projectInfo}>
                        <h3>TedTalks</h3>

                        <p>
What if the future of kids’ tech was fewer screens and calmer companions? In a world of iPad kids, our AI teddy is a screen-free friend kids talk to naturally, while parents get privacy-safe insights.
                        </p>
                    </div>
                </button>

                {/* fourth newspaper stuff */}
                <button
                    type="button"
                    className={`
                        ${styles.newspaper}
                        ${styles.newspaperFour}
                        ${newspaperFourOpen ? styles.newspaperFourOpen : ""}
                    `}
                    onClick={() =>
                        setNewspaperFourOpen((current) => !current)
                    }
                    aria-pressed={newspaperFourOpen}
                >
                    <img
                        src="/images/winners/newspaper.png"
                        alt=""
                        aria-hidden="true"
                        className={styles.newspaperImage}
                    />

                    <div className={styles.projectImage}>
                        <img
                            src="/images/hacker-olympics/winners/politalk.jpg"
                            alt="Project placeholder"
                        />
                    </div>

                    <div className={styles.projectInfo}>
                        <h3>PoliTalk</h3>

                        <p>
With 85% of youth getting news from social media, PoliTalk's extension detects political bias in real-time so you can think critically about what you watch. Scroll smarter, not blinder.
                        </p>
                    </div>
                </button>

            </div>
        </section>
    );
}