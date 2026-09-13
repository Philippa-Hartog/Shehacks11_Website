"use client";

import { useState } from "react";
import Image from "next/image";
import { PAGES } from "./galleryLayout";

export default function GalleryPage({
  frameSrc,
  photosByPage,
  pageOrder,
  coffeeStainClassName,
}) {
  const order = pageOrder || PAGES.map((_, i) => i);

  const n = order.length;

  const [topPointer, setTopPointer] = useState(0);
  const [slidingActive, setSlidingActive] = useState(false);
  const [resetting, setResetting] = useState(false);

  const slideDistance = "-70%";

  const goNext = () => {
    if (slidingActive || resetting) return;
    
    if (topPointer >= n - 1) {
      setResetting(true);
      return;
    }


    setSlidingActive(true);
  };

  const handleSlideEnd = () => {
    setTopPointer((current) => current + 1);
    setSlidingActive(false);
  };

  const handleResetEnd = () => {
    setTopPointer(0);
    setResetting(false);
  };

  return (
    <div className="relative w-full aspect-[1164/894]">
      {/* =====================================================
          FOLDER FRAME
      ====================================================== */}
      <Image
        src={frameSrc}
        alt=""
        fill
        className="object-contain select-none pointer-events-none"
        priority
      />

      {/* =====================================================
          COFFEE STAIN
      ====================================================== */}
      <Image
        src="/images/gallery/coffeestain.png"
        alt=""
        width={200}
        height={200}
        className={
          coffeeStainClassName ||
          "absolute bottom-[8%] left-[1%] w-[33%] h-auto pointer-events-none select-none opacity-80"
        }
      />

      {/* =====================================================
          GALLERY STACK
      ====================================================== */}
      <div
        className="absolute gallery-flip-stack"
        style={{
          ...PAGES[order[0]].docPosition,
        }}
      >
        <div className="relative w-full h-full">
          {order.map((pageIdx, i) => {
            const page = PAGES[pageIdx];

            const photos = photosByPage[pageIdx] || [];
            const hasBeenMoved = i < topPointer;
            const isCurrent = i === topPointer;
            const isLast = i === n - 1;

            let transform;

            if (resetting) {
              transform = "translateX(0)";
            } else if (hasBeenMoved) {
              transform = `translateX(${slideDistance})`;
            } else if (isCurrent && slidingActive) {
              transform = `translateX(${slideDistance})`;
            } else {
              transform = "translateX(0)";
            }
            const shouldAnimate =
              (isCurrent && slidingActive) ||
              (hasBeenMoved && resetting);

            return (
              <div
                key={pageIdx}
                className="absolute inset-0"
                style={{
                  zIndex: n - i,

                  transform,
                  transition: shouldAnimate
                    ? "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)"
                    : "none",

                  transformOrigin: "center center",
                }}
                onTransitionEnd={
                  resetting && i === 0
                    ? handleResetEnd
                    :
                      isCurrent && slidingActive
                    ? handleSlideEnd
                    : undefined
                }
              >
                <div
                  className="relative w-full h-full"
                  style={{
                    transform: `rotate(${
                      page.cardRotation || "0deg"
                    })`,
                  }}
                >
                  {/* =================================================
                      DOCUMENT
                  ================================================== */}
                  <Image
                    src={page.documentSrc}
                    alt=""
                    fill
                    className="object-contain select-none pointer-events-none"
                  />

                  {/* =================================================
                      PAGE OVERLAYS
                  ================================================== */}
                  {page.overlays?.map((ov, oi) => (
                    <div
                      key={oi}
                      className="absolute"
                      style={{
                        top: ov.top,
                        left: ov.left,
                        width: ov.width,
                        height: ov.height,
                        transform: `rotate(${ov.rotate})`,
                      }}
                    >
                      <Image
                        src={ov.src}
                        alt=""
                        fill
                        className="object-contain pointer-events-none select-none"
                      />
                    </div>
                  ))}

                  {/* =================================================
                      PHOTOS
                  ================================================== */}
                  {photos
                    .slice(0, page.photoSlots.length)
                    .map((src, pi) => {
                      const slot = page.photoSlots[pi];

                      /*
                       * FRAMED PHOTO
                       */
                      if (slot.frame) {
                        return (
                          <div
                            key={src}
                            className="absolute"
                            style={{
                              top: slot.top,
                              left: slot.left,
                              width: slot.width,
                              height: slot.height,
                              transform: `rotate(${slot.rotate})`,
                            }}
                          >
                            <div className="relative w-full h-full">
                              {/* Photo */}
                              <div
                                className="absolute"
                                style={{
                                  ...slot.photoInset,
                                }}
                              >
                                <Image
                                  src={src}
                                  alt=""
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              {/* Frame */}
                              <Image
                                src={slot.frame}
                                alt=""
                                fill
                                className="object-contain pointer-events-none select-none"
                              />
                            </div>
                          </div>
                        );
                      }

                      /*
                       * NORMAL PHOTO / POLAROID
                       */
                      return (
                        <div
                          key={src}
                          className="absolute bg-white p-1.5 shadow-md"
                          style={{
                            top: slot.top,
                            left: slot.left,
                            width: slot.width,
                            height: slot.height,
                            transform: `rotate(${slot.rotate})`,
                          }}
                        >
                          <div className="relative w-full h-[78%]">
                            <Image
                              src={src}
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      );
                    })}

                  {/* =================================================
                      PAPERCLIP
                  ================================================== */}
                  <Image
                    src={page.paperclipSrc}
                    alt=""
                    width={40}
                    height={90}
                    className="absolute -top-[3%] left-[14%] w-[17%] h-auto pointer-events-none select-none"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          NEXT BUTTON
      ====================================================== */}
      <button
        onClick={goNext}
        className="absolute bottom-[11%] right-[5%] w-[4%] hover:scale-110 transition-transform"
      >
        <Image
          src="/images/gallery/next-button.png"
          alt="Next"
          width={80}
          height={80}
          className="w-full h-auto pointer-events-none select-none"
        />
      </button>
    </div>
  );
}

