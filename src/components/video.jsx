// src/components/Video.jsx
import { useEffect, useRef } from 'react';

export default function Video() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      autoplay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover object-[90%_40%]"
    >
      <source src="/earth.mp4" type="video/mp4" />
    </video>
  );
}
