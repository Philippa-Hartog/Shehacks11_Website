const CANVAS_WIDTH = 1440;

export default function HOAbout() {
  return (
    <>
      {/* Background */}
      <img
        src="/images/hacker-olympics/backgrounds/ho-background6.png"
        alt="hacker olympics background with scattered pages and blueprints"
        style={{ width: CANVAS_WIDTH, height: 1302, position: 'absolute', top: 4787, left: 0 }}
      />

      
      {/* Meet the team Banner*/}
      <img
        src="/images/hacker-olympics/elements/meet-the-team-banner.png"
        alt="meet the team banner"
        style={{ width: 1451, height: 238, position: 'absolute', top: 4580, left: 0 }}
      />
      <h1 
        className="font-koulen"
        style={{
          position: 'absolute',
          top: 4630,
          left: 470,
          fontSize: 96,
          color: '#BD0000',
        }}
      >
        MEET THE TEAM
      </h1>

      {/* Footer */}
      <p
        className="font-koulen"
        style={{
          position: 'absolute',
          top: 5760,
          left: 525,
          fontSize: 68,
          transform: 'rotate(0deg)',
          color: 'black',
        }}
      >
        CONNECT WITH US
      </p>

      <p
        className="font-sometype"
        style={{
          position: 'absolute',
          top: 5850,
          left: 632,
          fontSize: 32,
          color: 'black',
        }}
      >
        <b>shehacks.ca</b>
      </p>

      <div
        style={{
          position: 'absolute',
          top: 5910,
          left: 647,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <img
          src="/images/hacker-olympics/elements/linkedin.png"
          alt="linkedin logo"
          style={{ width: 40, height: 40, marginRight: 25 }}
        />
        <img
          src="/images/hacker-olympics/elements/instagram.png"
          alt="instagram logo"
          style={{ width: 60, height: 50, marginRight: 25 }}
        />
        <img
          src="/images/hacker-olympics/elements/facebook.png"
          alt="facebook logo"
          style={{ width: 25, height: 40 }}
        />
      </div>
    </>
  );
}