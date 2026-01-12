"use client";

import { useRef, useState } from "react";

export default function AboutCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    const rotateX = -py * 8;
    const rotateY = px * 8;

    const moveX = px * 10;
    const moveY = py * 10;

    ref.current!.style.transform = `
      translate(${moveX}px, ${moveY}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transition = "transform 0.4s ease";
    ref.current.style.transform =
      "translate(0px, 0px) rotateX(0deg) rotateY(0deg)";
    setActive(false);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        ref.current!.style.transition = "none";
        setActive(true);
      }}
      onMouseLeave={reset}
      onMouseMove={onMouseMove}
      className={`relative rounded-2xl p-12 border will-change-transform transition-all duration-300
        ${
          active
            ? "bg-zinc-900 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.35)]"
            : "bg-zinc-900/70 border-zinc-800"
        }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow overlay */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/25 to-transparent transition-opacity
          ${active ? "opacity-100" : "opacity-0"}`}
      />

      <div style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </div>
  );
}
