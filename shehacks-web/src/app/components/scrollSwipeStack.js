'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * A scroll-pinned "Tinder deck": cards sit stacked at one shared point and
 * swipe off screen one at a time, in order, as the user scrolls. Built on
 * GSAP's ScrollTrigger `pin`, which freezes the page in place and feeds
 * scroll input into the timeline instead — handles the cross-browser/
 * trackpad/touch edge cases that a hand-rolled wheel listener doesn't.
 * Not tied to any specific card design — `items[].render()` supplies the
 * content.
 */
export default function ScrollSwipeStack({
  items,
  stackPosition,
  background,
  leadIn = 0.1,
  maxWidth = 1440,
  canvasAspectRatio = '1440 / 940',
  pinDistance = '+=1800',
}) {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      if (!cards.length) return;

      gsap.set(cards, { xPercent: -50, yPercent: -50 });
      cards.forEach((el, i) => {
        gsap.set(el, { rotate: items[i].stackRotate ?? 0 });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: pinDistance,
          pin: true,
          scrub: .5,
          anticipatePin: 1,
        },
      });

      const segmentDuration = (1 - leadIn) / cards.length;
      cards.forEach((el, i) => {
        const direction = items[i].direction ?? (i % 2 === 0 ? 'left' : 'right');
        const sign = direction === 'left' ? -1 : 1;

        timeline.to(
          el,
          {
            x: `${sign * 90}vw`,
            y: '-18vh',
            rotate: (items[i].stackRotate ?? 0) + sign * 30,
            ease: 'power1.inOut',
            duration: segmentDuration,
          },
          leadIn + i * segmentDuration
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [items, leadIn, pinDistance]);

  return (
    <section ref={sectionRef} style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {background}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth,
          aspectRatio: canvasAspectRatio,
          margin: '0 auto',
          height: '100%',
        }}
      >
        {items.map((item, i) => (
          <div
            key={item.key ?? i}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{
              position: 'absolute',
              top: stackPosition.top,
              left: stackPosition.left,
              width: stackPosition.width,
              zIndex: items.length - i,
            }}
          >
            {item.render()}
          </div>
        ))}
      </div>
    </section>
  );
}
