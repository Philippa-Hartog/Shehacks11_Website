// "use client";
//
// import Image from "next/image";
//
// const chairs = [
//     { name: ["Ella", "Sajor"], gem: "purple-gem", gemW: 219, gemH: 392, gemScale: "w-[44%]", postW: 417, postH: 778 },
//     { name: ["Gurnoor", "Jande"], gem: "pink-gem", gemW: 205, gemH: 390, gemScale: "w-[39%]", postW: 398, postH: 827 },
//     { name: ["Raisa", "Kayastha"], gem: "yellow-gem", gemW: 209, gemH: 393, gemScale: "w-[40%]", postW: 399, postH: 803 },
// ];
//
// export default function CoChairs() {
//     return (
//         <section className="relative isolate z-0 w-full overflow-hidden bg-[#818181] py-[6%]">
//             <h2
//                 style={{ fontFamily: "var(--font-koulen)" }}
//                 className="relative z-40 mb-6 text-center text-white text-[clamp(30px,3.4vw,48px)] leading-none tracking-wide"
//             >
//                 CO-CHAIRS
//             </h2>
//
//             {/* One shared stage: every layer is positioned inside this box */}
//             <div className="relative mx-auto w-full max-w-[1100px] aspect-[2037/1948]">
//                 {/* 1. vault background (back) */}
//                 <Image
//                     src="/images/co-chairs/vault-background.png"
//                     alt=""
//                     aria-hidden="true"
//                     width={1759}
//                     height={1695}
//                     className="absolute z-10 pointer-events-none left-[30%] top-[2%] w-[68%] h-auto"
//                 />
//
//                 {/* 2. pillars (middle), no circular clip */}
//                 <div className="absolute z-20 left-[40%] top-[22%] w-[46%] flex items-end justify-center gap-[6%]">
//                     {chairs.map((c) => (
//                         <div key={c.name[0]} className="flex w-[30%] flex-col items-center">
//                             <Image
//                                 src={`/images/co-chairs/${c.gem}.png`}
//                                 alt=""
//                                 width={c.gemW}
//                                 height={c.gemH}
//                                 className={`${c.gemScale} h-auto mb-[-2px]`}
//                             />
//                             <div className="relative w-full">
//                                 <Image
//                                     src={`/images/co-chairs/${c.gem}-post.png`}
//                                     alt=""
//                                     width={c.postW}
//                                     height={c.postH}
//                                     className="w-full h-auto"
//                                 />
//                                 <p
//                                     style={{ fontFamily: "var(--font-sometype-mono)" }}
//                                     className="absolute top-[28%] left-1/2 -translate-x-1/2 text-center text-[#d8d0d0] text-[clamp(9px,1vw,14px)] leading-tight"
//                                 >
//                                     {c.name[0]}
//                                     <br />
//                                     {c.name[1]}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//
//                 {/* 3. open vault (front): covers pillar bottoms */}
//                 <Image
//                     src="/images/co-chairs/open-vault.png"
//                     alt=""
//                     aria-hidden="true"
//                     width={2037}
//                     height={1948}
//                     className="absolute z-30 pointer-events-none inset-0 w-full h-full"
//                 />
//             </div>
//         </section>
//     );
// }