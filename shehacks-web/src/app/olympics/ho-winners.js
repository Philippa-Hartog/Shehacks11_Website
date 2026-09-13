const CANVAS_WIDTH = 1440;

export default function HOWinners() {
  return (
    <>
      {/* Background */}
      <img
        src="/images/hacker-olympics/backgrounds/ho-background2.png"
        alt="hacker olympics background with scattered pages and blueprints"
        style={{ width: CANVAS_WIDTH, height: 940, position: 'absolute', top: 2576, left: 0 }}
      />

      {/* Winner cards */}
      <img
        src="/images/hacker-olympics/elements/card.png"
        alt="card"
        style={{
          width: 270,
          height: 330,
          position: 'absolute',
          top: 3074,
          left: 109,
          transform: 'rotate(0deg)',
        }}
      />
      <img
        src="/images/hacker-olympics/elements/card.png"
        alt="card"
        style={{
          width: 270,
          height: 330,
          position: 'absolute',
          top: 3180,
          left: 1058,
          transform: 'rotate(-123deg)',
        }}
      />
    </>
  );
}