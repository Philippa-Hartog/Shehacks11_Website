"use client";

import { useState } from "react";
import Image from "next/image";

const DEFAULT_ITEMS = [
    {
        q: "When are Hacker Applications?",
        a: "Hacker applications will be released in November, Keep an eye out on our Social media to be kept up to date with information on SheHacks+.",
    },
    {
        q: "What will be accommodated?",
        a: "The arrangements will include meals, comfortable sleeping accommodations, and travel reimbursements for those traveling a considerable distance to the venue.",
    },
    {
        q: "Where will SheHacks+ take place?",
        a: "TBD — venue and address to be provided.",
    },
    {
        q: "Does SheHacks+ cost anything?",
        a: "SheHacks is completely free, due to our generous sponsors! You will have access to a multitude of workshops and tools to help with your hack!",
    },
    {
        q: "Do I need to come with a team?",
        a: "You can come solo or with a team. If you already have a team of ( 3-4 people), you can register with them! If you don’t have a team there will be time before hacking to form teams or we can match you up with one before the event.",
    },
    {
        q: "Can I still come if I’m not a woman+?",
        a: "SheHacks+ is designed to be an inclusive space to support female-identifying and non-binary individuals who are interested in technology. As we're focused on creating a talent pipeline from minorities in tech, this event is specifically created as a place for women+ to explore the tech industry in a supportive way. Otherwise, we welcome people of all genders to participate as a volunteer or mentor. Keep an eye out on our Facebook and website for more information.",
    },
    {
        q: "I’m a recently graduated student. Can I still apply?",
        a: "Yes! We welcome all students as well as new grads to attend SheHacks+. There will be many opportunities to meet with sponsors and network. This would be the perfect time to search for a job/internship!",
    },
    {
        q: "I don’t attend a Canadian university. Can I still apply?",
        a: "Yes! SheHacks+ welcomes students from around the world to participate. The only downside is we may not be able to reimburse your travel costs to our venue.",
    },
];

export default function Faq({ items = DEFAULT_ITEMS }) {
    const [open, setOpen] = useState(null);

    return (
        <div className="relative w-full flex justify-center overflow-visible">

            {/*faq area stuff*/}
            <div className="relative w-full max-w-[1100px] aspect-[1244/1270] overflow-visible">

                {/*faq paper stuff*/}
                <Image
                    src="/images/FAQ-paper.png"
                    alt="FAQ paper background"
                    fill
                    className="object-contain object-top drop-shadow-xl"
                />

                {/*top footprint stuff*/}
                <div
                    className="
                        absolute
                        top-[3%]
                        right-[10%]
                        z-10
                        pointer-events-none
                        w-[14%]
                        opacity-30
                    "
                    aria-hidden="true"
                >
                    <Image
                        src="/images/Footsteps 2.png"
                        alt=""
                        width={268}
                        height={658}
                        className="w-full h-auto"
                    />
                </div>

                {/*bottom footprint stuff*/}
                <div
                    className="
                        absolute
                        top-[50%]
                        left-[6%]
                        z-10
                        pointer-events-none
                        w-[14%]
                        opacity-20
                    "
                    aria-hidden="true"
                >
                    <Image
                        src="/images/Footsteps 3.png"
                        alt=""
                        width={268}
                        height={658}
                        className="w-full h-auto"
                    />
                </div>

                {/*faq red tab stuff*/}
                <div
                    className="
                        absolute
                        top-[-7.5%]
                        left-[6%]
                        w-[43%]
                        z-30
                    "
                >
                    <Image
                        src="/images/FAQ.png"
                        alt="FAQ title"
                        width={555}
                        height={202}
                        className="w-full h-auto"
                    />

                    <span
                        style={{
                            fontFamily: "var(--font-koulen)",
                        }}
                        className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            text-white
                            text-[clamp(28px,5.4vw,72px)]
                            leading-none
                            tracking-wide
                        "
                    >
                        FAQ
                    </span>
                </div>

                {/*questions stuff*/}
                <div className="absolute inset-0 z-20">
                    <div
                        className="
                            absolute
                            top-[14.5%]
                            left-[8%]
                            w-[84%]
                        "
                        style={{
                            fontFamily: "var(--font-inconsolata)",
                        }}
                    >
                        <ul className="w-full">
                            {items.map((item, i) => {
                                const isOpen = open === i;

                                return (
                                    <li
                                        key={i}
                                        className="
                                            border-b
                                            border-neutral-500/35
                                        "
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpen(isOpen ? null : i)
                                            }
                                            aria-expanded={isOpen}
                                            className="
                                                w-full
                                                flex
                                                items-center
                                                justify-between
                                                gap-4
                                                py-[1.6%]
                                                text-left
                                                focus:outline-none
                                            "
                                        >
                                            <span
                                                className="
                                                    text-neutral-800
                                                    text-[clamp(10px,1.45vw,21px)]
                                                    leading-tight
                                                "
                                            >
                                                {item.q}
                                            </span>

                                            {/*plus minus stuff*/}
                                            <span
                                                className="
                                                    relative
                                                    inline-flex
                                                    h-4
                                                    w-4
                                                    items-center
                                                    justify-center
                                                    shrink-0
                                                "
                                                aria-hidden="true"
                                            >
                                                <span className="absolute h-[1.5px] w-3 bg-neutral-700" />

                                                <span
                                                    className={`
                                                        absolute
                                                        h-3
                                                        w-[1.5px]
                                                        bg-neutral-700
                                                        transition-transform
                                                        duration-200
                                                        ${
                                                        isOpen
                                                            ? "scale-y-0"
                                                            : "scale-y-100"
                                                    }
                                                    `}
                                                />
                                            </span>
                                        </button>

                                        {/*answer stuff*/}
                                        <div
                                            className={`
                                                grid
                                                transition-[grid-template-rows,opacity]
                                                duration-200
                                                ease-out
                                                ${
                                                isOpen
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "grid-rows-[0fr] opacity-0"
                                            }
                                            `}
                                        >
                                            <div className="overflow-hidden">
                                                <p
                                                    className="
                                                        pb-3
                                                        pr-6
                                                        text-neutral-700
                                                        text-[clamp(9px,1.2vw,17px)]
                                                        leading-relaxed
                                                    "
                                                >
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/*cards stuff*/}
                <div
                    className="
                        absolute
                        bottom-[-7%]
                        z-30
                        w-[26%]
                        min-w-[150px]
                        pointer-events-none
                    "
                    style={{
                        right: "calc(50% - 50vw + 12px)",
                    }}
                    aria-hidden="true"
                >
                    <Image
                        src="/images/Cards-FAQ.png"
                        alt=""
                        width={378}
                        height={623}
                        className="w-full h-auto"
                    />
                </div>

            </div>
        </div>
    );
}