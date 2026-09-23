export default function TickerTape() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F8C650] h-[90px] sm:h-[150px] lg:h-[238px]">

      {/* stripe bands */}
      <div className="tape-stripes absolute top-0 left-0 w-full h-[15%]" />
      <div className="tape-stripes absolute bottom-0 left-0 w-full h-[15%]" />

      {/* scrolling title */}
      <div className="absolute inset-0 flex items-center overflow-hidden">
        <div className="flex w-max animate-title">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <span
              key={i}
              style={{ fontFamily: "var(--font-koulen)" }}
              className="mx-10 sm:mx-16 whitespace-nowrap leading-none text-[#BD0000] text-[36px] sm:text-[64px] lg:text-[96px]"
            >
              MEET THE TEAM
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}