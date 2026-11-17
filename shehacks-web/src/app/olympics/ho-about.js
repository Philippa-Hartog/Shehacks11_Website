import TeamCards from '../components/teamcards.js';

export default function HOAbout() {
  return (
    <div className="relative bg-[url('/images/hacker-olympics/backgrounds/ho-background6.png')] bg-cover bg-center pb-8">
      <img
        src="/images/hacker-olympics/elements/card pile.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      />
      <div className="relative flex w-full flex-col items-center">
        <header className="relative flex w-full aspect-[1451/238] items-center justify-center">
          <img src="/images/hacker-olympics/elements/meet-the-team-banner.png" alt="" className="absolute inset-0 h-full w-full" />
          <h1 className="relative font-koulen text-[clamp(28px,6.7vw,96px)] text-[#BD0000]">MEET THE TEAM</h1>
        </header>
        <TeamCards />
        <footer className="flex flex-col items-center gap-2 pt-6 text-black">
          <p className="font-koulen text-2xl sm:text-[32px]">CONNECT WITH US</p>
          <p className="font-sometype text-sm sm:text-base"><b>shehacks.ca</b></p>
          <div className="flex items-center gap-6">
            <img src="/images/hacker-olympics/elements/linkedin.png" alt="linkedin logo" className="h-[35px] w-[35px]" />
            <img src="/images/hacker-olympics/elements/instagram.png" alt="instagram logo" className="h-[35px] w-[35px]" />
            <img src="/images/hacker-olympics/elements/facebook.png" alt="facebook logo" className="h-[35px] w-[20px]" />
          </div>
        </footer>
      </div>
    </div>
  );
}
