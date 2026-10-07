"use client";

import { useState } from "react";

const CANVAS_WIDTH = 1440;

const FAQ_ITEMS = [
  {
    question: "What challenges will I compete in?",
    answer:
      "The challenges will be announced a week ahead of the hackathon. You will receive an email when it opens up so you don't miss anything.",
  },
  {
    question: "If I'm a beginner, can I compete in the regular stream?",
    answer:
      "Yes, you’re allowed to choose one of the two streams that you believe suits you and your skillset.",
  },
  {
    question: "Can I compete in both Hacker Olympics and regular stream?",
    answer:
      "Unfortunately, you will have to choose between the option of Hacker Olympics and Regular Stream. We want to ensure that you have enough time for your hack and that you complete your hack to the best of your ability.",
  },
];

function FAQItem({ question, answer, index, open, setOpen }) {
  const isOpen = open === index;

  return (
    <div
      style={{
        position: "absolute",
        top: index * 220,
        left: 0,
        width: "100%",
        height: 150,
        zIndex: isOpen ? 100 : index,
      }}
    >
      {/* Answer folder */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: 500,
          top: isOpen ? -180 : 0,
          left: 0,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "top 0.4s ease, opacity 0.3s ease",
          zIndex: 1,
        }}
      >
        <img
          src="/images/hacker-olympics/elements/file.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "fill",
            top: 0,
            left: 0,
          }}
        />

        <p
          className="font-koulen"
          style={{
            position: "relative",
            margin: 0,
            padding: "175px 70px 50px",
            fontSize: 28,
            lineHeight: 1.25,
            color: "black",
          }}
        >
          {answer}
        </p>
      </div>

      {/* Question folder */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "auto",
          top: isOpen ? 20 : 0,
          left: 0,
          transition: "top 0.4s ease",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <img
          src="/images/hacker-olympics/elements/file.png"
          alt=""
          aria-hidden="true"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />

        {/* Question */}
        <p
          className="font-koulen"
          style={{
            position: "absolute",
            top: "50%",
            left: 60,
            right: 150,
            transform: "translateY(-200%)",
            margin: 0,
            fontSize: 30,
            lineHeight: 1.1,
            textDecoration: "underline",
            color: "black",
          }}
        >
          {question}
        </p>

        {/* + / − button */}
        <button
          onClick={() => setOpen(isOpen ? null : index)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close answer" : "Open answer"}
          style={{
            position: "absolute",
            top: "50%",
            right: 55,
            transform: "translateY(-120%)",
            width: 65,
            height: 65,
            border: "none",
            background: "transparent",
            fontFamily: "Koulen, sans-serif",
            fontSize: 60,
            lineHeight: 1,
            color: "black",
            cursor: "pointer",
            padding: 0,
            pointerEvents: "auto",
          }}
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>
    </div>
  );
}

export default function HOFaq() {
  const [open, setOpen] = useState(null);

  return (
    <>
      {/* Background */}
      <img
        src="/images/hacker-olympics/backgrounds/ho-background3.png"
        alt="hacker olympics background with scattered pages and blueprints"
        style={{
          width: CANVAS_WIDTH,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <img
        src="/images/hacker-olympics/backgrounds/ho-background3.png"
        alt=""
        aria-hidden="true"
        style={{
          width: CANVAS_WIDTH,
          position: "absolute",
          top: 388,
          left: 0,
          zIndex: -1,
        }}
      />

      {/* FAQ */}
      <main
        style={{
          position: "relative",
          width: CANVAS_WIDTH,
          paddingTop: 150,
          paddingBottom: 200,
        }}
      >
        <img
          src="/images/hacker-olympics/elements/file.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "83%",
            // height: "%",
            objectFit: "fill",
            top: -40,
            left: 120,
          }}
        />
          <img
          src="/images/hacker-olympics/elements/magglass.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "30%",
            // height: "%",
            objectFit: "fill",
            top: -50,
            right: -110,
                transform: "rotate(-90deg)",
          }}
        /> 
        <img
          src="/images/hacker-olympics/elements/shehacks logo.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            objectFit: "fill",
            right:175, 
            top:110
          }}
        />
        <h1
          className="font-koulen"
          style={{
            position: "relative",
            left:200,
            top:-20,
            fontSize: 96,
            color: "#BD0000",
            margin: "0 0 80px",
          }}
        >
          FAQ
        </h1>
        <div
        
        />
        {/* Folder stack */}
        <div
          style={{
            position: "relative",
            width: 1200,
            height: 450,
            top:-200,
            margin: "0 auto",
          }}
        >
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>
      </main>
    </>
  );
}