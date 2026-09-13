export const PAGES = [
  {
    // Page 1
    documentSrc: "/images/gallery/document.png",
    paperclipSrc: "/images/gallery/paperclip.png",
    docPosition: { top: "9%", left: "40%", width: "60%", height: "79%" },
    photoSlots: [
      { top: "5.83%",  left: "13.18%", width: "27.62%", height: "22.95%", rotate: "0deg" },
      { top: "24.86%", left: "15.16%", width: "27.62%", height: "22.95%", rotate: "-8.62deg" },
      { top: "45.96%", left: "11.93%", width: "27.62%", height: "22.95%", rotate: "15.63deg" },
    ],
  },
  {
    // Page 2 — lined paper page
    documentSrc: "/images/gallery/document2.png",
    paperclipSrc: "/images/gallery/paperclip.png",
    docPosition: { top: "9%", left: "40%", width: "60%", height: "79%" },
    cardRotation: "-3.26deg",
    overlays: [
      { src: "/images/gallery/lined-note.png", top: "3.69%", left: "27.49%", width: "71.26%", height: "60.97%", rotate: "0deg" },
    ],
    photoSlots: [
      { top: "18.25%", left: "47.27%", width: "40.58%", height: "37.00%", rotate: "3.33deg" },
      { top: "52.97%", left: "11.96%", width: "40.58%", height: "37.00%", rotate: "-2.11deg" },
    ],
  },
    {
  // Page 3 — fingerprint page
  documentSrc: "/images/gallery/document3.png",
  paperclipSrc: "/images/gallery/paperclip.png",
  docPosition: { top: "9%", left: "40%", width: "60%", height: "79%" },
  cardRotation: "-2deg",
  photoSlots: [
    { top: "5%", left: "8%",  width: "30%", height: "25%", rotate: "-3deg" },
    { top: "30%", left: "5%",  width: "30%", height: "25%", rotate: "-6deg" },
    { top: "50%", left: "8%",  width: "30%", height: "25%", rotate: "8deg" },
    {
      top: "64%", left: "50%", width: "35%", height: "33%", rotate: "3deg",
      frame: "/images/gallery/taped-photo-frame.png",
      photoInset: { top: "18%", left: "10%", width: "81%", height: "62%" }, // where the photo sits inside the frame graphic
    },
  ],
},
  {
  // Page 4 — matches reference exactly (measured from screenshot)
  documentSrc: "/images/gallery/document2.png",
  paperclipSrc: "/images/gallery/paperclip.png",
  docPosition: { top: "9%", left: "40%", width: "60%", height: "79%" },
  cardRotation: "0deg",
  overlays: [
    { src: "/images/gallery/lined-note-corkboard.png", top: "-2%", left: "16.55%", width: "100.94%", height: "70.13%", rotate: "0deg" },
  ],
  photoSlots: [
    { top: "12.32%", left: "51.96%", width: "35.78%", height: "29.58%", rotate: "-4deg" }, // top, taped
    { top: "40.02%", left: "31.46%", width: "25.56%", height: "25.51%", rotate: "-2deg" }, // middle, paperclip
    { top: "69.38%", left: "13.35%",  width: "30.93%", height: "25.77%", rotate: "-3deg" }, // bottom-left, paperclip
  ],
},
];