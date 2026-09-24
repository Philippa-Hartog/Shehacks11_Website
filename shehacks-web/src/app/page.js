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
import TeamCards from "./components/teamcards";

export default function Home() {
  return (
    <div className="font-sans min-h-screen text-white bg-[url('/images/background_main.png')] bg-cover bg-center">
      <Navbar />

      <main className="px-8 sm:px-20 pb-20">
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
        
        <Olympics /> {/* has id="olympics" inside */}
        
        <div className="scroll-mt-28 py-24">
          <History /> {/* has id="history" inside */}
        </div>
        <Wits /> {/* has id="wits" inside */}
        <section id="faq" className="scroll-mt-28 pt-15">
          <Faq />
        </section>               

      </main>
        <footer className="pb-5">
        <section id="connect" className="scroll-mt-28">
          <Connect />
        </section>
        
        <TeamCards />
        <section id="team" className="scroll-mt-28 py-24">
          <SheHacksTeam />
        </section>


        </footer>
      
    </div>
  );
}
