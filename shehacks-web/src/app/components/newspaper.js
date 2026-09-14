const NEWSPAPER_WIDTH = 1068;
const NEWSPAPER_HEIGHT = 897;

export default function NewspaperCard({
  title,
  image,
  description,
  top,
  left,
  rotate = 0,
  width = 300,
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        width,
        aspectRatio: `${NEWSPAPER_WIDTH} / ${NEWSPAPER_HEIGHT}`,
        transform: `rotate(${rotate}deg)`,
        containerType: 'inline-size',
      }}
    >
      <img
        src="/images/hacker-olympics/elements/newspaper.png"
        alt=""
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%' 
        }}
      />

      <img
        src={image}
        alt={title}
        style={{
          position: 'absolute',
          top: '31%',
          left: '10%',
          width: '39%',
          height: '38%',
          objectFit: 'cover',
          transform: 'rotate(8deg)',
        }}
      />

      <p
        className="font-newsreader"
        style={{
          position: 'absolute',
          top: '38%',
          left: '47%',
          width: '33%',
          textAlign: 'center',
          fontSize: '5cqw',
          color: 'white',
          transform: 'rotate(8deg)'
        }}
      >
        {title}
      </p>

      <p
        className="font-inconsolata"
        style={{
          position: 'absolute',
          top: '55%',
          left: '50%',
          width: '23%',
          fontSize: '2cqw',
          color: 'white',
          lineHeight: 1.1,
          transform: 'rotate(8deg)'
        }}
      >
        {description}
      </p>
    </div>
  );
}
