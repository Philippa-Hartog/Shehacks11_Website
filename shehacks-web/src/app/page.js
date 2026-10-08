import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Winners from "./components/winners";
import Olympics from "./components/olympics";
import Connect from "./components/connect";
import History from "./components/history";
import Wits from "./components/wits";
import Sponsor from "./components/sponsor";
import Faq from "./components/faq";
import TeamCards from "./components/teamcards";
import TeamFolders from "./components/teamfolders";
// import CoChairs from "./components/cochairs";

export default function Home() {
    return (
        <div className="font-sans min-h-screen text-white">
            <Navbar />

            <main className="w-full">

                {/*landing stuff*/}
                <div className="px-4 sm:px-20">
                    <Landing />
                </div>
                
                {/*sponsor stuff*/}
                <section
                    id="sponsor"
                    className="scroll-mt-28 pt-24"
                >
                    <Sponsor />
                </section>

                {/*past winners stuff*/}
                <Winners />

                {/*main wooden section*/}
                <div
                    className="
                        w-full
                        relative
                        bg-[url('/images/Wooden-Background.png')]
                        bg-[length:100%_100%]
                        bg-no-repeat
                        bg-top
                        py-16
                        sm:py-20
                        lg:py-50
                        px-8
                        sm:px-14
                        lg:px-26
                        pb-10
                        sm:pb-32
                        overflow-visible
                    "
                    style={{
                        "--footprint-unit": "clamp(6px, 1.4vw, 16px)",
                    }}
                >

                    {/*caution tape stuff*/}
                    <img
                        src="/images/tapes.png"
                        alt=""
                        aria-hidden="true"
                        className="
                            absolute
                            top-[-30%]
                            left-1/2
                            -translate-x-1/2
                            w-[120vw]
                            max-w-none
                            z-30
                            pointer-events-none
                        "
                    />

                    {/*pink blueprint stuff*/}
                    <div
                        className="
                            w-full
                            mx-auto
                            bg-no-repeat
                            bg-top
                            bg-contain
                            aspect-[1255/2003]
                            relative
                        "
                        style={{
                            backgroundImage: "url('/images/pink-back.png')",
                        }}
                    >

                        {/*content on the pink background*/}
                        <div className="w-full mt-[8%] sm:mt-[10%]">

                            {/*hacker olympics stuff*/}
                            <Olympics />

                            {/*history stuff*/}
                            <div className="w-full mt-[32%] sm:mt-[28%] md:mt-[24%]">
                                <History />
                            </div>

                        </div>
                    </div>

                    {/*wits stuff*/}
                    <Wits />

                    {/*faq stuff*/}
                    <section
                        id="faq"
                        className="scroll-mt-28 mt-24 sm:mt-32 lg:mt-40"
                    >
                        <Faq />
                    </section>

                </div>

                {/*co chairs stuff*/}
                {/*<section*/}
                {/*    id="cochairs"*/}
                {/*    className="scroll-mt-28"*/}
                {/*>*/}
                {/*    <CoChairs />*/}
                {/*</section>*/}

                {/*team and connect stuff*/}
                <section
                    className="
                        relative
                        w-full
                        m-0
                        p-0
                        bg-[url('/images/team/bottom-floor.png')]
                        bg-cover
                        bg-top
                        bg-no-repeat
                    "
                >

                    {/*criss cross tape stuff*/}
                    <img
                        src="/images/team/criss-cross-tape.png"
                        alt=""
                        aria-hidden="true"
                        className="
                            absolute
                            left-1/2
                            top-[-10%]
                            -translate-x-1/2
                            -translate-y-1/2
                            w-[130vw]
                            max-w-none
                            h-auto
                            z-40
                            pointer-events-none
                        "
                    />

                    {/*team stuff*/}
                    <section
                        id="team"
                        className="scroll-mt-28 m-0 p-0"
                    >
                        <TeamFolders />
                    </section>

                    {/*connect stuff*/}
                    <section
                        id="connect"
                        className="scroll-mt-28 m-0 p-0"
                    >
                        <Connect />
                    </section>

                </section>

            </main>
        </div>
    );
}