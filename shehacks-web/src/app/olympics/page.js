"use client"

import { useEffect, useRef, useState } from 'react';
import HowHOWorks from '../howHOworks.js';
import HOWinners from '../ho-winners';
import HOFaq from '../ho-faq';
import HOAbout from '../ho-about';

const CANVAS_WIDTH = 1440;
const CANVAS_HEIGHT = 6002;

export default function HackerOlympicsPage() {
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [overlayOpacity, setOpacity] = useState(1);

  useEffect(() => {
    function updateScale() {
      setScale(wrapperRef.current.offsetWidth / CANVAS_WIDTH);
    }
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

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
    <div
      ref={wrapperRef}
      style={{
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT * scale,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'relative',
        }}
      >
        {/* Black overlay and spotlights — spans the whole canvas, stays here rather than in any one section */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: CANVAS_WIDTH,
            height: CANVAS_HEIGHT,
            backgroundColor: 'black',
            opacity: overlayOpacity,
            zIndex: 10,
            transition: 'opacity 1s',
          }}
        />

        <HowHOWorks />
        <HOWinners />
        <HOFaq />
        <HOAbout />
      </div>
    </div>
  );
}