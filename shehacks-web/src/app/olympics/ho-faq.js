const CANVAS_WIDTH = 1440;

export default function HOFaq() {
  return (
    <>
      {/* Backgrounds */}
      <img
        src="/images/hacker-olympics/backgrounds/ho-background3.png"
        alt="hacker olympics background with scattered pages and blueprints"
        style={{ width: CANVAS_WIDTH, height: 392, position: 'absolute', top: 3512, left: 0 }}
      />
      <img
        src="/images/hacker-olympics/backgrounds/ho-background4.png"
        alt="hacker olympics background with scattered pages and blueprints"
        style={{ width: CANVAS_WIDTH, height: 365, position: 'absolute', top: 3900, left: 0 }}
      />
      <img
        src="/images/hacker-olympics/backgrounds/ho-background5.png"
        alt="hacker olympics background with scattered pages and blueprints"
        style={{ width: CANVAS_WIDTH, height: 522, position: 'absolute', top: 4265, left: 0 }}
      />

      {/* TODO: FAQ text content — pending from teammate handling FAQ copy */}
    </>
  );
}