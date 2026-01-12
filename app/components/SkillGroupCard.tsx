"use client";

import { useRef, useState } from "react";
import TechBadge from "./TechBadge";

export default function SkillGroupCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
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
    ref.current!.style.transition = "transform 0.4s ease";
    ref.current!.style.transform =
      "translate(0px,0px) rotateX(0deg) rotateY(0deg)";
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
      className={`relative rounded-xl border p-6 will-change-transform transition-all duration-300
        ${
          active
            ? "bg-zinc-900 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.35)]"
            : "bg-zinc-900/70 border-zinc-800"
        }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent transition-opacity
          ${active ? "opacity-100" : "opacity-0"}`}
      />

      <div style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-blue-400 font-semibold mb-4">{title}</h3>

        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <TechBadge key={skill} label={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
