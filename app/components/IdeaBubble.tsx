"use client";

import { useEffect, useRef } from "react";

export default function IdeaBubble({
  text,
  x,
  y,
  delay,
}: {
  text: string;
  x: string;
  y: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    let t = 0;

    const animate = () => {
      t += 0.01;
      const float = Math.sin(t) * 8;
      el.style.transform = `translateY(${float}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute text-sm text-gray-200 px-4 py-2 rounded-full
                 bg-zinc-900/60 backdrop-blur-md border border-zinc-700
                 shadow-lg pointer-events-none select-none"
      style={{
        left: x,
        top: y,
        animationDelay: `${delay}s`,
      }}
    >
      {text}
    </div>
  );
}
