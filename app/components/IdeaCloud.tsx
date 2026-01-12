"use client";

import { useEffect, useRef, useState } from "react";

const IDEAS = [
  "Cloud Scaling",
  "Low-level C",
  "Clean Architecture",
  "AI Pipelines",
  "Embedded Systems",
  "Performance",
  "DevOps",
  "Security",
  "Automation",
  "Build SaaS",
];

type Bubble = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;       // collision radius
  label: string;
};

export default function IdeaCloud({ side }: { side: "left" | "right" }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const minX = side === "left" ? 40 : width * 0.6;
    const maxX = side === "left" ? width * 0.4 : width - 40;

    const initial: Bubble[] = IDEAS.map((label) => {
      const visualWidth = label.length * 9 + 32; // text + padding
      return {
        label,
        r: visualWidth / 2,
        x: minX + Math.random() * (maxX - minX),
        y: 80 + Math.random() * (height - 160),
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      };
    });

    setBubbles(initial);

    const animate = () => {
      setBubbles((prev) => {
        const next = prev.map((b) => ({ ...b }));

        // Move
        for (const b of next) {
          b.x += b.vx;
          b.y += b.vy;

          if (b.x < minX || b.x > maxX) b.vx *= -1;
          if (b.y < 40 || b.y > height - 40) b.vy *= -1;
        }

        // Collisions
        for (let i = 0; i < next.length; i++) {
          for (let j = i + 1; j < next.length; j++) {
            const a = next[i];
            const b = next[j];

            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const minDist = a.r + b.r;

            if (dist === 0) {
              b.x += Math.random() - 0.5;
              b.y += Math.random() - 0.5;
              continue;
            }

            if (dist < minDist) {
              const overlap = minDist - dist;
              const nx = dx / dist;
              const ny = dy / dist;

              const pushX = nx * overlap * 0.5;
              const pushY = ny * overlap * 0.5;

              a.x -= pushX;
              a.y -= pushY;
              b.x += pushX;
              b.y += pushY;
            }
          }
        }

        return next;
      });

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [side]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute text-sm text-blue-300/80 bg-blue-500/10 backdrop-blur-md px-4 py-2 rounded-full"
          style={{
            transform: `translate(${b.x}px, ${b.y}px)`,
            width: b.r * 2,
            textAlign: "center",
            transition: "transform 0.08s linear",
          }}
        >
          {b.label}
        </div>
      ))}
    </div>
  );
}
