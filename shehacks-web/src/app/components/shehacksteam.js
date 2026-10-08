"use client";

import { useState } from "react";
import Image from "next/image";

export default function SheHacksTeam() {
    const [openFolder, setOpenFolder] = useState(null);

    return (
        <section
            className="
                relative
                w-full
                min-h-[2200px]
                m-0
                p-0
                overflow-hidden
            "
            style={{
                backgroundImage: "url('/images/team/bottom-floor.png')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
            }}
        >

            {/*folder stack stuff*/}
            <div
                className="
                    absolute
                    top-[8%]
                    left-1/2
                    -translate-x-1/2
                    w-[58%]
                    max-w-[800px]
                "
            >

                {/*raisa stuff*/}
                <div className="relative w-full pointer-events-none">

                    {/*raisa card stuff*/}
                    <div
                        className={`
                            absolute
                            left-[27%]
                            top-[82%]
                            -translate-x-1/2
                            w-[31%]
                            z-[65]
                            transition-all
                            duration-500
                            ease-out
                            ${
                            openFolder === "raisa"
                                ? "translate-y-[50%] opacity-100"
                                : "translate-y-[-90%] opacity-100"
                        }
                        `}
                    >
                        <Image
                            src="/images/team/card-raisa.png"
                            alt="Raisa Kayastha information"
                            width={445}
                            height={811}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </div>

                    {/*raisa folder stuff*/}
                    <button
                        type="button"
                        onClick={() =>
                            setOpenFolder(
                                openFolder === "raisa" ? null : "raisa"
                            )
                        }
                        className="
                            relative
                            z-[70]
                            block
                            w-full
                            border-0
                            bg-transparent
                            p-0
                            cursor-pointer
                            pointer-events-auto
                            transition
                            duration-200
                            hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.22)]
                        "
                    >
                        <Image
                            src="/images/team/raisa-folder.png"
                            alt="Raisa Kayastha folder"
                            width={1198}
                            height={917}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </button>

                </div>

                {/*gurnoor stuff*/}
                <div
                    className="relative w-full pointer-events-none"
                    style={{ marginTop: "-61%" }}
                >

                    {/*gurnoor card stuff*/}
                    <div
                        className={`
                            absolute
                            left-[43%]
                            top-[82%]
                            -translate-x-1/2
                            w-[31%]
                            z-[55]
                            transition-all
                            duration-500
                            ease-out
                            ${
                            openFolder === "gurnoor"
                                ? "translate-y-[50%] opacity-100"
                                : "translate-y-[-90%] opacity-100"
                        }
                        `}
                    >
                        <Image
                            src="/images/team/card-gurnoor.png"
                            alt="Gurnoor Jande information"
                            width={445}
                            height={811}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </div>

                    {/*gurnoor folder stuff*/}
                    <button
                        type="button"
                        onClick={() =>
                            setOpenFolder(
                                openFolder === "gurnoor" ? null : "gurnoor"
                            )
                        }
                        className="
                            relative
                            z-[60]
                            block
                            w-full
                            border-0
                            bg-transparent
                            p-0
                            cursor-pointer
                            pointer-events-auto
                            transition
                            duration-200
                            hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.22)]
                        "
                    >
                        <Image
                            src="/images/team/gurnoor-folder.png"
                            alt="Gurnoor Jande folder"
                            width={1198}
                            height={917}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </button>

                </div>

                {/*ella stuff*/}
                <div
                    className="relative w-full pointer-events-none"
                    style={{ marginTop: "-61%" }}
                >

                    {/*ella card stuff*/}
                    <div
                        className={`
                            absolute
                            left-[51%]
                            top-[82%]
                            -translate-x-1/2
                            w-[31%]
                            z-[45]
                            transition-all
                            duration-500
                            ease-out
                            ${
                            openFolder === "ella"
                                ? "translate-y-[50%] opacity-100"
                                : "translate-y-[-90%] opacity-100"
                        }
                        `}
                    >
                        <Image
                            src="/images/team/card-ella.png"
                            alt="Ella Sajor information"
                            width={445}
                            height={811}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </div>

                    {/*ella folder stuff*/}
                    <button
                        type="button"
                        onClick={() =>
                            setOpenFolder(
                                openFolder === "ella" ? null : "ella"
                            )
                        }
                        className="
                            relative
                            z-[50]
                            block
                            w-full
                            border-0
                            bg-transparent
                            p-0
                            cursor-pointer
                            pointer-events-auto
                            transition
                            duration-200
                            hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.22)]
                        "
                    >
                        <Image
                            src="/images/team/ella-folder.png"
                            alt="Ella Sajor folder"
                            width={1198}
                            height={917}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </button>

                </div>

                {/*eshanya stuff*/}
                <div
                    className="relative w-full pointer-events-none"
                    style={{ marginTop: "-61%" }}
                >

                    {/*eshanya card stuff*/}
                    <div
                        className={`
                            absolute
                            left-[65%]
                            top-[82%]
                            -translate-x-1/2
                            w-[31%]
                            z-[35]
                            transition-all
                            duration-500
                            ease-out
                            ${
                            openFolder === "eshanya"
                                ? "translate-y-[50%] opacity-100"
                                : "translate-y-[-90%] opacity-100"
                        }
                        `}
                    >
                        <Image
                            src="/images/team/card-eshanya.png"
                            alt="Eshanya Rukhaiyar information"
                            width={445}
                            height={811}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </div>

                    {/*eshanya folder stuff*/}
                    <button
                        type="button"
                        onClick={() =>
                            setOpenFolder(
                                openFolder === "eshanya" ? null : "eshanya"
                            )
                        }
                        className="
                            relative
                            z-[40]
                            block
                            w-full
                            border-0
                            bg-transparent
                            p-0
                            cursor-pointer
                            pointer-events-auto
                            transition
                            duration-200
                            hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.22)]
                        "
                    >
                        <Image
                            src="/images/team/eshanya-folder.png"
                            alt="Eshanya Rukhaiyar folder"
                            width={1198}
                            height={917}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </button>

                </div>

                {/*danica stuff*/}
                <div
                    className="relative w-full pointer-events-none"
                    style={{ marginTop: "-61%" }}
                >

                    {/*danica card stuff*/}
                    <div
                        className={`
                            absolute
                            left-[67%]
                            top-[82%]
                            -translate-x-1/2
                            w-[31%]
                            z-[25]
                            transition-all
                            duration-500
                            ease-out
                            ${
                            openFolder === "danica"
                                ? "translate-y-[50%] opacity-100"
                                : "translate-y-[-90%] opacity-100"
                        }
                        `}
                    >
                        <Image
                            src="/images/team/card-danica.png"
                            alt="Danica Keeler information"
                            width={445}
                            height={811}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </div>

                    {/*danica folder stuff*/}
                    <button
                        type="button"
                        onClick={() =>
                            setOpenFolder(
                                openFolder === "danica" ? null : "danica"
                            )
                        }
                        className="
                            relative
                            z-[30]
                            block
                            w-full
                            border-0
                            bg-transparent
                            p-0
                            cursor-pointer
                            pointer-events-auto
                            transition
                            duration-200
                            hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.22)]
                        "
                    >
                        <Image
                            src="/images/team/danica-folder.png"
                            alt="Danica Keeler folder"
                            width={1198}
                            height={917}
                            className="
                                block
                                w-[120%]
                                max-w-none
                                -ml-[10%]
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </button>

                </div>

                {/*satwika stuff*/}
                <div
                    className="relative w-full pointer-events-none"
                    style={{ marginTop: "-61%" }}
                >

                    {/*satwika card stuff*/}
                    <div
                        className={`
                            absolute
                            left-[27%]
                            top-[82%]
                            -translate-x-1/2
                            w-[31%]
                            z-[15]
                            transition-all
                            duration-500
                            ease-out
                            ${
                            openFolder === "satwika"
                                ? "translate-y-[50%] opacity-100"
                                : "translate-y-[-90%] opacity-100"
                        }
                        `}
                    >
                        <Image
                            src="/images/team/card-satwika.png"
                            alt="Satwika Pujari information"
                            width={445}
                            height={811}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </div>

                    {/*satwika folder stuff*/}
                    <button
                        type="button"
                        onClick={() =>
                            setOpenFolder(
                                openFolder === "satwika" ? null : "satwika"
                            )
                        }
                        className="
                            relative
                            z-[20]
                            block
                            w-full
                            border-0
                            bg-transparent
                            p-0
                            cursor-pointer
                            pointer-events-auto
                            transition
                            duration-200
                            hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.22)]
                        "
                    >
                        <Image
                            src="/images/team/satwika-folder.png"
                            alt="Satwika Pujari folder"
                            width={1198}
                            height={917}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </button>

                </div>

                {/*chloe stuff*/}
                <div
                    className="relative w-full pointer-events-none"
                    style={{ marginTop: "-61%" }}
                >

                    {/*chloe card stuff*/}
                    <div
                        className={`
                            absolute
                            left-[37%]
                            top-[82%]
                            -translate-x-1/2
                            w-[31%]
                            z-[5]
                            transition-all
                            duration-500
                            ease-out
                            ${
                            openFolder === "chloe"
                                ? "translate-y-[50%] opacity-100"
                                : "translate-y-[-90%] opacity-100"
                        }
                        `}
                    >
                        <Image
                            src="/images/team/card-chloe.png"
                            alt="Chloe Chong information"
                            width={445}
                            height={811}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </div>

                    {/*chloe folder stuff*/}
                    <button
                        type="button"
                        onClick={() =>
                            setOpenFolder(
                                openFolder === "chloe" ? null : "chloe"
                            )
                        }
                        className="
                            relative
                            z-[10]
                            block
                            w-full
                            border-0
                            bg-transparent
                            p-0
                            cursor-pointer
                            pointer-events-auto
                            transition
                            duration-200
                            hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.22)]
                        "
                    >
                        <Image
                            src="/images/team/chloe-folder.png"
                            alt="Chloe Chong folder"
                            width={1198}
                            height={917}
                            className="
                                block
                                w-full
                                h-auto
                                select-none
                                pointer-events-none
                            "
                        />
                    </button>

                </div>

            </div>

        </section>
    );
}