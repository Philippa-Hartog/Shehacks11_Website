"use client"

import { useEffect, useRef, useState } from 'react';
import HowHOWorks from './howHOworks.js';
import HOWinners from './ho-winners';
import HOFaq from './ho-faq';
import HOAbout from './ho-about';

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
  const [overlayOpacity, setOpacity] = useState(1);

  useEffect(() => {
    // This effect is intended to change the opacity of the overlay as the user lands on the page
    function changeOpacity() {
      setTimeout(() => {
        setOpacity(0);
      }, 2000); // Change opacity after 2 seconds
    }
    changeOpacity();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Black landing overlay — covers the real viewport, independent of any section's own scaling */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'black',
          opacity: overlayOpacity,
          zIndex: 10,
          transition: 'opacity 1s',
          pointerEvents: overlayOpacity === 0 ? 'none' : 'auto',
        }}
      />

      <ScaledCanvas height={CANVAS_A_HEIGHT}>
        <HowHOWorks />
      </ScaledCanvas>

      {/* Not scaled — needs to stay outside any transform for its scroll-pin animation to work */}
      <HOWinners />

      <ScaledCanvas height={CANVAS_B_HEIGHT}>
        <HOFaq />
        <HOAbout />
      </ScaledCanvas>
    </div>
  );
}
