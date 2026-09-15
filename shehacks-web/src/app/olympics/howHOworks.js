const CANVAS_WIDTH = 1440;

export default function HowHOWorks() {
  return (
    <>
      {/* Background */}
      <img
        src="/images/hacker-olympics/backgrounds/ho-background1.png"
        alt="background image with scattered papers and folders"
        style={{ width: CANVAS_WIDTH, height: 2576, position: 'absolute', top: 0, left: 0 }}
      />

      {/* Text content */}
      <p
        className="font-koulen"
        style={{
          position: 'absolute',
          top: 795,
          left: 120,
          fontSize: 64,
          transform: 'rotate(-4deg)',
          color: 'black',
        }}
      >
        HACKER OLYMPICS
      </p>

      <p
        className="font-londrina"
        style={{
          position: 'absolute',
          top: 877.08,
          left: 89,
          width: 537.88,
          textAlign: 'center',
          fontSize: 32,
          transform: 'rotate(-4deg)',
          color: '#BD0000',
        }}
      >
        New to tech or hackathons in general?
      </p>

      <p
        className="font-sometype"
        style={{
          width: 415,
          position: 'absolute',
          top: 950,
          left: 145,
          fontSize: 24,
          transform: 'rotate(-4deg)',
          color: 'black',
          lineHeight: '1.2',
        }}
      >
        <strong>SheHacks </strong> offers <strong>Hacker Olympics</strong> for beginners who are
        new and open to learning more about tech through <strong>beginner workshops</strong> and{' '}
        <strong>hacker challenges. Win prizes</strong> and other opportunities with{' '}
        <strong>Hacker Olympics</strong>. Compete against other beginners at a similar skill
        level.
      </p>

      <p
        className="font-koulen"
        style={{
          position: 'absolute',
          top: 1445,
          left: 273,
          fontSize: 49,
          transform: 'rotate(3.5deg)',
          color: 'black',
        }}
      >
        HOW DOES HACKER OLYMPICS WORK?
      </p>

      <p
        className="font-sometype"
        style={{
          width: 415,
          position: 'absolute',
          top: 1690,
          left: 510,
          fontSize: 18,
          transform: 'rotate(-2.36deg)',
          color: 'black',
          lineHeight: '1.2',
        }}
      >
        <strong>Hackers </strong>in this stream will work in <strong> teams of 4 </strong>to
        complete a <strong>project (“mini hack”</strong>) instead of competing in the regular
        stream. The project will be built upon <strong>skills taught in workshops</strong> that
        run during <strong>SheHacks+</strong>, and are specifically{' '}
        <strong>designed for beginners</strong> in the <strong>Hacker Olympics</strong> stream.
        Bridge the <strong>skills gap</strong> that drives the{' '}
        <strong>lack of diversity</strong> in the tech industry.
        <br />
        <br />
        <strong>Women and non-binary individuals</strong> face more barriers to exploring{' '}
        <strong>tech interests</strong> and getting the{' '}
        <strong>education and experience</strong> to enter the tech industry.{' '}
        <strong>Hacker Olympics </strong>is their <strong>first <br />step</strong> in{' '}
        <strong>bridging the gap</strong>.
      </p>

      {/* SheHacks top logo as text */}
      <p
        className="font-lobster"
        style={{
          position: 'absolute',
          top: 270,
          left: 1025,
          fontSize: 300,
          transform: 'rotate(8deg)',
          color: '#FD0000',
        }}
      >
        11
      </p>

      <p
        className="font-koulen"
        style={{
          position: 'absolute',
          top: 440,
          left: 975,
          fontSize: 85,
          transform: 'rotate(8deg)',
          color: 'white',
          filter: 'drop-shadow(0 6px 4px rgba(0,0,0,0.5))',
        }}
      >
        SHEHACKS
      </p>

      {/* Decorative images */}
      <img
        src="/images/hacker-olympics/elements/logo-with-glass.png"
        alt="hacker olympics logo with a magnifying glass"
        style={{ width: 675, height: 557, position: 'absolute', top: 1620, left: 3 }}
      />
      <img
        src="/images/hacker-olympics/elements/l-lamp.png"
        alt="lamp"
        style={{ width: 1200, height: 1550, position: 'absolute', top: 35, left: -5 }}
      />
      <img
        src="/images/hacker-olympics/elements/r-lamp.png"
        alt="lamp"
        style={{
          width: 660,
          height: 1500,
          position: 'absolute',
          top: 945,
          left: 780,
          transform: 'rotate(1deg)',
        }}
      />

      {/* Strings */}
      <div
        style={{
          width: 618.6339972177843,
          height: 2,
          position: 'absolute',
          top: 758,
          left: 367,
          transform: 'rotate(2.59deg)',
          backgroundColor: '#BD0000',
          filter: 'drop-shadow(0 6px 4px rgba(0,0,0,1))',
        }}
      />
      <div
        style={{
          width: 270.7803503791412,
          height: 2,
          position: 'absolute',
          top: 1550,
          left: 483,
          transform: 'rotate(-105deg)',
          backgroundColor: '#BD0000',
          filter: 'drop-shadow(0 6px 4px rgba(0,0,0,1))',
        }}
      />

      {/* Pins */}
      <img
        src="/images/hacker-olympics/elements/pin.png"
        alt="pin"
        style={{ width: 59, height: 57, position: 'absolute', top: 719, left: 337 }}
      />
      <img
        src="/images/hacker-olympics/elements/pin.png"
        alt="pin"
        style={{ width: 59, height: 57, position: 'absolute', top: 747, left: 955 }}
      />
      <img
        src="/images/hacker-olympics/elements/pin.png"
        alt="pin"
        style={{ width: 59, height: 57, position: 'absolute', top: 1389, left: 552 }}
      />
      <img
        src="/images/hacker-olympics/elements/pin.png"
        alt="pin"
        style={{ width: 59, height: 57, position: 'absolute', top: 1644, left: 621 }}
      />
    </>
  );
}