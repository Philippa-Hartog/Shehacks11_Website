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
                            src="/images/hacker-olympics/winners/placeholder.jpg"
                            alt="Project placeholder"
                        />
                    </div>

                    <div className={styles.projectInfo}>
                        <h3>Project Title Here</h3>

                        <p>
                            A short project description here. This can explain
                            what the winning project does and why it stood out.
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
                            src="/images/hacker-olympics/winners/placeholder.jpg"
                            alt="Project placeholder"
                        />
                    </div>

                    <div className={styles.projectInfo}>
                        <h3>Project Title Two</h3>

                        <p>
                            A short project description here. This can explain
                            what the winning project does and why it stood out.
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
                            src="/images/hacker-olympics/winners/placeholder.jpg"
                            alt="Project placeholder"
                        />
                    </div>

                    <div className={styles.projectInfo}>
                        <h3>Project Title Three</h3>

                        <p>
                            A short project description here. This can explain
                            what the winning project does and why it stood out.
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
                            src="/images/hacker-olympics/winners/placeholder.jpg"
                            alt="Project placeholder"
                        />
                    </div>

                    <div className={styles.projectInfo}>
                        <h3>Project Title Four</h3>

                        <p>
                            A short project description here. This can explain
                            what the winning project does and why it stood out.
                        </p>
                    </div>
                </button>

            </div>
        </section>
    );
}