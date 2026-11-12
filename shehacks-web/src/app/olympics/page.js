"use client"

import { useEffect, useRef, useState } from 'react';
import HowHOWorks from './howHOworks.js';
import HOWinners from './ho-winners';
import HOFaq from './ho-faq';
import HOAbout from './ho-about';
import NavBar from './ho-navbar';

const CANVAS_WIDTH = 1440;
const CANVAS_A_HEIGHT = 2576; // HowHOWorks
const CANVAS_B_HEIGHT = 2490; // HOFaq + HOAbout
function ScaledCanvas({ height, children }) {
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      setScale(wrapperRef.current.offsetWidth / CANVAS_WIDTH);
    }
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div ref={wrapperRef} style={{ width: '100%', overflow: 'hidden' }}>
      <div
        style={{
          width: CANVAS_WIDTH,
          height: height * scale,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function HackerOlympicsPage() {
  return (
    <div style={{ position: 'relative' }}>
      <ScaledCanvas height={CANVAS_A_HEIGHT}>
        <NavBar/>
        <HowHOWorks />
      </ScaledCanvas>

      {/* Not scaled — needs to stay outside any transform for its scroll-pin animation to work */}
      <HOWinners />

      <ScaledCanvas height={CANVAS_B_HEIGHT}>
        <section id="faq"><HOFaq /></section>
        <section id="about"><HOAbout /></section>
      </ScaledCanvas>
    </div>
  );
}
