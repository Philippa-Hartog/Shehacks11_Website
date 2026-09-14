import NewspaperCard from '../components/newspaper';
import ScrollSwipeStack from '../components/scrollSwipeStack';

const winners = [
  {
    title: '[HO] Star Quest',
    image: '/images/hacker-olympics/winners/starquest.jpg',
    description: 'The Galactic Girls present you the to-do list that fulfills your futuristic dreams! Simply add a task and check it off, adding more star badges to your galaxy, keeping you motivated.',
    rotate: -8,
    direction: 'left',
  },
  {
    title: 'iKAAN',
    image: '/images/hacker-olympics/winners/ikaan.jpg',
    description: 'We are iKAAN, because in the year 2200, you KAAN protect memory at every stage. Created by health & medical sciences students, iKAAN reimagines a todo list as a tool for memory and neurological care.',
    rotate: 8,
    direction: 'right',
  },
  {
    title: 'Punch It',
    image: '/images/hacker-olympics/winners/placeholder.jpg',
    description: 'Our first repo at SheHacks10 for Hacker Olympics. Set your goals with this futuristic checklist tool and punch it in when you reach them. Let\'s make 2200 our year!',
    rotate: 4,
    direction: 'left',
  },
];

// Single shared stack point + card size — % of this section's own 1440px-wide box.
// top/left is the stack's CENTER (the card is re-centered on this point via
// translate(-50%, -50%) in ScrollSwipeStack), not its corner.
const stackPosition = { top: '1%', left: '50%', width: '55%' };

function loadNewspapers(winnerList) {
  return winnerList.map((winner, i) => ({
    key: i,
    stackRotate: winner.rotate,
    direction: winner.direction,
    render: () => (
      <NewspaperCard
        title={winner.title}
        image={winner.image}
        description={winner.description}
        top={0}
        left={0}
        rotate={0}
        width="100%"
      />
    ),
  }));
}

export default function HOWinners() {
  return (
    <section style={{ position: 'relative', width: '100%' }}>
      <ScrollSwipeStack
        items={loadNewspapers(winners)}
        stackPosition={stackPosition}
        background={
          <img
            src="/images/hacker-olympics/backgrounds/ho-background2.png"
            alt="hacker olympics background with scattered pages and blueprints"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        }
      />
    </section>
  );
}
