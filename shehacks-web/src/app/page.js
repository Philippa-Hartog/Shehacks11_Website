import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Winners from "./components/winners";
import Olympics from "./components/olympics";
import Connect from "./components/connect";
import SheHacksTeam from "./components/shehacksteam";
import History from "./components/history";
import Wits from "./components/wits";
import Sponsor from "./components/sponsor";
import FlyAways from "./components/flyaways";

export default function Home() {
    return (
        <div className="font-sans min-h-screen text-white">
            <Navbar />

            <main className="w-full pb-20">
                <section id="home">

                {/*landing stuff*/}
                <div className="px-4 sm:px-20">
                    <Landing />
                </div>
                </section>
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
                        <FlyAways />

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

                </div>
            </main>

            <footer className="pb-5">

                {/*team stuff*/}
                <section
                    id="team"
                    className="scroll-mt-28 py-24"
                >
                    <SheHacksTeam />
                </section>

                {/*connect stuff*/}
                <section
                    id="connect"
                    className="scroll-mt-28"
                >
                    <Connect />
                </section>

            </footer>
        </div>
    );
}