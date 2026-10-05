const CANVAS_WIDTH = 1440;
function TeamCard({ team, role, name, top, left, right }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: top,
        left: left,
        right: right,
        width: 300,
        height: 400,
      }}
    >
      {/* Card background */}
      <img
        src="/images/hacker-olympics/elements/emptycard.png"
        alt="team card"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />

      {/* Logo */}
      <img
        src="/images/hacker-olympics/elements/logo.png"
        alt="team logo"
        style={{
          position: 'absolute',
          width: 150,
          height: 100,
          left:-40
        }}
      />
      {/* Team */}
      <img
        src={team}
        alt="team photo"
        style={{
          position: 'absolute',
          width: '80%',
          height: '75%',
          top: 60,
          left: 30
       
        }}
      />
      {/* Role */}
      <h1
        className="font-koulen"
        style={{
          position: 'absolute',
          top: 30,
          right: 30,
          margin: 0,
          fontSize: 20,
          color: 'black',
        }}
      >
        {role}
      </h1>

      {/* Name */}
      <h1
        className="font-koulen"
        style={{
          position: 'absolute',
          bottom: 5,
          left: 30,
          margin: 0,
          fontSize: 20,
          color: 'black',
        }}
      >
        {name}
      </h1>
    </div>
  );
}
export default function HOAbout() {
  return (
    <>
      {/* Background */}
      <img
        src="/images/hacker-olympics/backgrounds/ho-background6.png"
        alt="hacker olympics background with scattered pages and blueprints"
        style={{ width: CANVAS_WIDTH, height: 1302, position: 'absolute', top: 1275, left: 0 }}
      />
      <img 
        src="/images/hacker-olympics/elements/card pile.png"
        alt="background pile of cards"
        style={{width: CANVAS_WIDTH, height: 1302, position: 'absolute', top: 1068, left:0}}
      />
      {/* Meet the team Banner*/}
      <img
        src="/images/hacker-olympics/elements/meet-the-team-banner.png"
        alt="meet the team banner"
        style={{ width: 1451, height: 238, position: 'absolute', top: 1068, left: 0 }}
      />

      <TeamCard
        team="/images/hacker-olympics/teamphotos/ella pic.png"
        role="Co-Chair Shehacks"
        name="Ella Sajor"
        top={1350}
        right={200}
      />
      <TeamCard
        team="/images/hacker-olympics/teamphotos/gurnoor pic.png"
        role="Co-Chair Shehacks"
        name="Gurnoor Jande"
        top={1350}
        right={570}
      />
      <TeamCard
        team="/images/hacker-olympics/teamphotos/raisa pic.png"
        role="Co-Chair Shehacks"
        name="Raisa Kayastha"
        top={1350}
        left={200}
      />
      <TeamCard
        team="\images\hacker-olympics\teamphotos\image 323.png"
        role="Director Shehacks"
        name="Eshanya Rukhaiyar"
        top={1790}
        left={75}
      />
      <TeamCard
        team="/images/hacker-olympics/teamphotos/headshot1 1.png"
        role="Director Shehacks"
        name="Danica Keeler"
        top={1790}
        left={400}
      />
      <TeamCard
        team="/images/hacker-olympics/teamphotos/satwika pic.png"
        role="Director Shehacks"
        name="Satwika Pujari"
        top={1790}
        right={400}
      />
      <TeamCard
        team="/images/hacker-olympics/teamphotos/image 322.png"
        role="Director Shehacks"
        name="Chloe Chong"
        top={1790}
        right={75}
      />

      <h1 
        className="font-koulen"
        style={{
          position: 'absolute',
          top: 1118,
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
          top: 2370,
          left: 632,
          fontSize: 32,
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
          top: 2410,
          left: 680,
          fontSize: 16,
          color: 'black',
        }}
      >
        <b>shehacks.ca</b>
      </p>

      <div
        style={{
          position: 'absolute',
          top: 2430,
          left: 650,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <img
          src="/images/hacker-olympics/elements/linkedin.png"
          alt="linkedin logo"
          style={{ width: 35, height: 35, marginRight: 25 }}
        />
        <img
          src="/images/hacker-olympics/elements/instagram.png"
          alt="instagram logo"
          style={{ width: 35, height: 35, marginRight: 25 }}
        />
        <img
          src="/images/hacker-olympics/elements/facebook.png"
          alt="facebook logo"
          style={{ width: 20, height: 35 }}
        />
      </div>
    </>
  );
}