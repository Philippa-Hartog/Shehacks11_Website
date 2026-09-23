import Image from "next/image";

export default function Landing() {
  return (
    <section
      id="home"
      className="
        relative
        w-[calc(100%+4rem)]
        -ml-8
        sm:w-[calc(100%+10rem)]
        sm:-ml-20
      "
    >
      {/* Background*/}
      <div
        className="
          absolute
          -top-24
          left-0
          right-0
          bottom-0
          z-0
          overflow-hidden
        "
      >
        {/* Main background */}
        <Image
          src="/images/landing/BG on top section 1.png"
          alt=""
          width={1440}
          height={2500}
          priority
          className="
            absolute
            top-0
            left-0
            w-full
            h-auto
          "
        />

        {/* Lower background */}
        <Image
          src="/images/landing/BG on top section 2.png"
          alt=""
          width={1440}
          height={1556}
          className="
            absolute
            top-[61.64%]
            left-0
            w-full
            h-auto
          "
        />
      </div>

      {/* Bulletin board 1 (Top Section) */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-[90%]
          max-w-[1247px]
          aspect-[1247/2500]
        "
      >
        <Image
          src="/images/landing/BULLETIN BOARD 02.png"
          alt="SheHacks bulletin board"
          fill
          priority
          className="object-contain"
        />

        {/* Magnifying glass */}

        <Image
          src="/images/landing/Title magnifying glass.png"
          alt=""
          width={1113}
          height={1170}
          className="
            absolute
            z-50
            pointer-events-none
            top-[-3%]
            left-[6%]
            w-[100%]
            h-auto
            max-w-[850px]
          "
        />

        {/* Title logo */}
        <Image
          src="/images/landing/TITLE LOGO.png"
          alt=""
          width={865}
          height={394}
          className="
            absolute
            z-20
            pointer-events-none
            top-[6%]
            left-[25%]
            w-[50%]
            h-auto
            max-w-[865px]
          "
        />

        {/* Date and place sticky note */}
        <Image
          src="/images/landing/date and place.png"
          alt=""
          width={243}
          height={323}
          className="
            absolute
            z-20
            pointer-events-none
            top-[13%]
            right-[11.5%]
            w-[18%]
            h-auto
            max-w-[243px]
          "
        />

        {/* Countdown tape */}
        <Image
          src="/images/landing/timer.png"
          alt=""
          width={1565}
          height={609}
          className="
            absolute
            z-40
            pointer-events-none
            top-[20%]
            left-[-2%]
            w-[104%]
            h-auto
            max-w-[1565px]
          "
        />

        {/* Newspaper */}
        <Image
          src="/images/landing/news paper.png"
          alt=""
          width={681}
          height={639}
          className="
            absolute
            z-10
            pointer-events-none
            top-[34%]
            left-[7%]
            w-[48%]
            h-auto
            max-w-[681px] 
          "
        />

        {/* Red text */}
        <Image
          src="/images/landing/Red Text on Board.png"
          alt=""
          width={558}
          height={422}
          className="
            absolute
            z-20
            pointer-events-none
            top-[42%]
            left-[5%]
            w-[38%]
            h-auto
            max-w-[558px]
          "
        />

        {/* Pin on 11th iteration */}
        <Image
          src="/images/landing/pin.png"
          alt=""
          width={303}
          height={333}
          className="
            absolute
            z-30
            pointer-events-none
            top-[42.5%]
            left-[24%]
            w-[4%]
            h-auto
            max-w-[303px]
          "
        />

        {/* String going to apply now */}
        <Image
          src="/images/landing/string.png"
          alt=""
          width={581}
          height={144}
          className="
            absolute
            z-30
            pointer-events-none
            top-[37%]
            left-[25%]
            w-[100%]
            h-auto
            max-w-[700px]
          "
        />

        {/* String going to tape now */}
        <Image
          src="/images/landing/string-5.png"
          alt=""
          width={203}
          height={218}
          className="
            absolute
            z-30
            pointer-events-none
            top-[35%]
            left-[10%]
            w-[100%]
            h-auto
            max-w-[200px]
          "
        />

        {/* Map */}
        <Image
          src="/images/landing/map2.png"
          alt=""
          width={597}
          height={723}
          className="
            absolute
            z-0
            pointer-events-none
            top-[41%]
            left-[-2%]
            w-[43%]
            h-auto
            max-w-[597px]
          "
        />

        {/* Fingerprint */}
        <Image
          src="/images/landing/finger print.png"
          alt=""
          width={220}
          height={288}
          className="
            absolute
            z-11
            pointer-events-none
            top-[51%]
            left-[33%]
            w-[18%]
            h-auto
            max-w-[300px]
          "
        />

        {/* Paper book page */}
        <Image
          src="/images/landing/paper book page.png"
          alt=""
          width={593}
          height={661}
          className="
            absolute
            z-10
            pointer-events-none
            top-[43%]
            right-[20%]
            w-[70%]
            h-auto
            max-w-[700px]
          "
        />

        {/* Apply now polaroid */}
        <Image
          src="/images/landing/apply now polariod.png"
          alt=""
          width={436}
          height={492}
          className="
            absolute
            z-20
            pointer-events-none
            top-[33.5%]
            right-[3%]
            w-[36%]
            h-auto
            max-w-[500px]
          "
        />

        {/* Ace card */}
        <Image
          src="/images/landing/ace black card.png"
          alt=""
          width={303}
          height={333}
          className="
            absolute
            z-10
            pointer-events-none
            top-[43%]
            right-[23%]
            w-[22%]
            h-auto
            max-w-[303px]
          "
        />

        {/* Back of card */}
        <Image
          src="/images/landing/back of card on board.png"
          alt=""
          width={303}
          height={333}
          className="
            absolute
            z-10
            pointer-events-none
            top-[43%]
            right-[3%]
            w-[22%]
            h-auto
            max-w-[303px]
          "
        />

        {/* Map behind paper */}
        <Image
          src="/images/landing/map.png"
          alt=""
          width={670}
          height={555}
          className="
            absolute
            z-7
            pointer-events-none
            top-[61%]
            right-[3%]
            w-[100%]
            h-auto
            max-w-[670px]
          "
        />

        {/* Paper with stamp */}
        <Image
          src="/images/landing/line paper with stamp.png"
          alt=""
          width={655}
          height={397}
          className="
            absolute
            z-10
            pointer-events-none
            top-[62%]
            right-[40%]
            w-[45%]
            h-auto
            max-w-[655px]
          "
        />

        {/* Our Mission*/}
        <Image
          src="/images/landing/our mission.png"
          alt=""
          width={597}
          height={751}
          className="
            absolute
            z-10
            pointer-events-none
            top-[68%]
            right-[10%]
            w-[50%]
            h-auto
            max-w-[700px]
          "
        />

        {/* 11 card 1 beside stamp*/}
        <Image
          src="/images/landing/Card board.png"
          alt=""
          width={246}
          height={283}
          className="
            absolute
            z-10
            pointer-events-none
            top-[70%]
            right-[70%]
            w-[50%]
            h-auto
            max-w-[246px]
          "
        />

        {/* 11 card 2 beside stamp*/}
        <Image
          src="/images/landing/Card on board.png"
          alt=""
          width={246}
          height={283}
          className="
            absolute
            z-10
            pointer-events-none
            top-[71%]
            right-[71%]
            w-[50%]
            h-auto
            max-w-[246px]
          "
        />

        {/* Food text box*/}
        <Image
          src="/images/landing/Food.png"
          alt=""
          width={769}
          height={223}
          className="
            absolute
            z-10
            pointer-events-none
            top-[88%]
            right-[48%]
            w-[55%]
            h-auto
            max-w-[769px]
          "
        />

        {/* experience text box*/}
        <Image
          src="/images/landing/experience.png"
          alt=""
          width={769}
          height={223}
          className="
            absolute
            z-10
            pointer-events-none
            top-[98%]
            right-[24%]
            w-[55%]
            h-auto
            max-w-[769px]
          "
        />

        {/* connections text box*/}
        <Image
          src="/images/landing/connections.png"
          alt=""
          width={769}
          height={223}
          className="
            absolute
            z-10
            pointer-events-none
            top-[106%]
            right-[46%]
            w-[55%]
            h-auto
            max-w-[769px]
          "
        />

        {/* sticky note with thief*/}
        <Image
          src="/images/landing/sticky note with thief.png"
          alt=""
          width={220}
          height={286}
          className="
            absolute
            z-10
            pointer-events-none
            top-[106%]
            right-[25%]
            w-[55%]
            h-auto
            max-w-[220px]
          "
        />

        {/* Diamond Polariod*/}
        <Image
          src="/images/landing/Diamond Polariod.png"
          alt=""
          width={302}
          height={399}
          className="
            absolute
            z-9
            pointer-events-none
            top-[98%]
            right-[10%]
            w-[55%]
            h-auto
            max-w-[302px]
          "
        />

        {/* wanted stamp*/}
        <Image
          src="/images/landing/wanted stamp.png"
          alt=""
          width={302}
          height={399}
          className="
            absolute
            z-8
            pointer-events-none
            top-[93%]
            right-[15%]
            w-[55%]
            h-auto
            max-w-[302px]
          "
        />
      </div>

      {/* Second Bulletin board */}
      <div
        className="
          relative
          z-0          
          -mt-[3%] 
          mx-auto
          w-[90%]
          max-w-[1247px]
        "
      >
        <Image
          src="/images/landing/BULLETIN BOARD 1.png"
          alt="SheHacks second bulletin board"
          width={1247}
          height={2500}
          className="
            block
            w-full
            h-auto
          "
        />
      </div>
    </section>
  );
}
