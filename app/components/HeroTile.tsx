"use client";

import { useRef, useState } from "react";

export default function HeroTile({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = x / rect.width - 0.5;
    const percentY = y / rect.height - 0.5;

    const rotateX = -percentY * 10;
    const rotateY = percentX * 10;

    const moveX = percentX * 10;
    const moveY = percentY * 10;

    ref.current!.style.transform = `
      translate(${moveX}px, ${moveY}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transition = "transform 0.4s cubic-bezier(.2,.8,.2,1)";
    ref.current.style.transform =
      "translate(0px, 0px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        if (ref.current) ref.current.style.transition = "none";
        setActive(true);
      }}
      onMouseLeave={() => {
        reset();
        setActive(false);
      }}
      onMouseMove={onMouseMove}
      className={`relative rounded-xl p-6 border transition-all duration-300 will-change-transform
        ${
          active
            ? "bg-zinc-900 border-blue-500 shadow-[0_0_45px_rgba(59,130,246,0.45)]"
            : "bg-zinc-900/70 border-zinc-800"
        }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/25 to-transparent transition-opacity
          ${active ? "opacity-100" : "opacity-0"}`}
      />

      <div style={{ transform: "translateZ(40px)" }}>
        <div className="text-blue-400 text-2xl mb-3">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
