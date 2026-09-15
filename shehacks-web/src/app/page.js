import Image from "next/image";
import Link from "next/link";
import About from "../app/components/about";

import Faq from "./components/faq";

import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Winners from "./components/winners";
import Olympics from "./components/olympics";
import Connect from "./components/connect";
import SheHacksTeam from "./components/shehacksteam"; 
import History from "./components/history";
import Wits from "./components/wits";
import Sponsor from "./components/sponsor";

export default function Home() {
  return (

    <div className="font-sans min-h-screen text-white bg-[url('/images/background_main.png')] bg-cover bg-center">
      <Navbar />

      <main className="w-full pb-20">
        <div className="px-8 sm:px-20">
          <Landing />

          <section id="about" className="scroll-mt-28 py-24">
            <About />
          </section>
          
          <section id="sponsor" className="scroll-mt-28 py-24">
            <Sponsor/>
          </section>

          <div className="scroll-mt-28 py-24">
            <Winners /> {/* has id="winners" inside */}
          </div>
        </div>

       {/* WOODEN BACKGROUND */}
      <div 
        className="w-full relative bg-[url('/images/Wooden-Background.png')] bg-[length:100%_auto] bg-repeat-y bg-top py-16 sm:py-20 lg:py-50 px-8 sm:px-14 lg:px-26 pb-10 sm:pb-32 overflow-visible" 
        style={{ "--footprint-unit": "clamp(6px, 1.4vw, 16px)" }} 
      >
        {/* BLUE(PINK)PRINT */}
        <div
          className="w-full mx-auto bg-no-repeat bg-top bg-contain aspect-[1255/2003] relative"
          style={{ backgroundImage: "url('/images/pink-back.png')" }}
        >
            {/* Content sitting on blueprint */}
            <div className="w-full mt-[8%] sm:mt-[10%]">
              
                <Olympics /> {/* has id="olympics" inside */}

              <div className="w-full mt-[32%] sm:mt-[28%] md:mt-[24%]">

                <History /> {/* has id="history" inside */}

              </div>
            </div>
        </div>

            <Wits /> {/* has id="wits" inside */}
            <Faq />
      </div>

      </main>
          <footer className="pb-5">
          <section id="connect" className="scroll-mt-28">
            <Connect />
          </section>
          
          <section id="team" className="scroll-mt-28 py-24">
            <SheHacksTeam />
          </section>


          </footer>
        
    </div>
  );
}
