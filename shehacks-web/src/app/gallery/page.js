import Navbar from "./navbar";
import Connect from "@/app/components/connect";
import SheHacksTeam from "../components/shehacksteam";
import GalleryPage from "@/app/components/GalleryPage";

export default function Gallery_Page() {
return ( <div className="font-sans min-h-screen text-white bg-[url('/images/gallery_bg.png')] bg-[length:150%_150%] bg-center"> 
<Navbar />


  <main className="pb-20">
    <h2
    className="w-full text-white text-xl sm:text-2xl md:text-3xl font-bold text-left uppercase font-koulen px-32 pt-24"
    >
      Welcome to the SheHacks+ Gallery
    </h2>
    <section
      id="gallery"
      className="scroll-mt-28 flex flex-col items-center w-full gap-10"
    >

      <div className="w-full max-w-[900px] mx-auto flex justify-center">
        <GalleryPage
          frameSrc="/images/gallery/shehacks-9/frame.png"
          pageOrder={[2, 1, 3, 0]}
          photosByPage={[
            [
              "/images/gallery/shehacks-9/photo1.jpg",
              "/images/gallery/shehacks-9/photo2.jpg",
              "/images/gallery/shehacks-9/photo3.jpg",
            ],
            [
              "/images/gallery/shehacks-9/photo4.jpg",
              "/images/gallery/shehacks-9/photo5.jpg",
              "/images/gallery/shehacks-9/photo6.jpg",
            ],
            [
              "/images/gallery/shehacks-9/photo6.jpg",
              "/images/gallery/shehacks-9/photo8.jpg",
              "/images/gallery/shehacks-9/photo7.jpg",
              "/images/gallery/shehacks-9/photo9.jpg",
            ],
            [
              "/images/gallery/shehacks-9/photo10.jpg",
              "/images/gallery/shehacks-9/photo11.jpg",
              "/images/gallery/shehacks-9/photo4.jpg",
            ],
          ]}
        />
      </div>

      <div className="w-full max-w-[900px] mx-auto flex justify-center">
        <GalleryPage
          frameSrc="/images/gallery/shehacks-10/frame_shehacks10.png"
          pageOrder={[0, 1, 2, 3]}
          coffeeStainClassName="
            absolute
            top-[3%]
            left-[50%]
            w-[13%]
            h-auto
            pointer-events-none
            select-none
            opacity-80
            scale-x-[-1]
          "
          photosByPage={[
            [
              "/images/gallery/shehacks-10/photo1.jpg",
              "/images/gallery/shehacks-10/photo2.jpg",
              "/images/gallery/shehacks-10/photo3.jpg",
              "/images/gallery/shehacks-10/photo4.jpg",
            ],
            [
              "/images/gallery/shehacks-10/photo5.jpg",
              "/images/gallery/shehacks-10/photo6.jpg",
              "/images/gallery/shehacks-10/photo7.jpg",
            ],
            [
              "/images/gallery/shehacks-10/photo8.jpg",
              "/images/gallery/shehacks-10/photo9.jpg",
              "/images/gallery/shehacks-10/photo10.jpg",
            ],
            [
              "/images/gallery/shehacks-10/photo11.jpg",
              "/images/gallery/shehacks-10/photo1.jpg",
            ],
          ]}
        />
      </div>
    </section>
  </main>
</div>


);
}
