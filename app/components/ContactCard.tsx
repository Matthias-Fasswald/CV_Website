"use client";

import { useRef, useState } from "react";

export default function ContactCard({
  title,
  value,
  href,
  icon,
}: {
  title: string;
  value: string;
  href: string;
  icon: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    const rotateX = -py * 10;
    const rotateY = px * 10;

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
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      onMouseEnter={() => {
        ref.current!.style.transition = "none";
        setActive(true);
      }}
      onMouseLeave={() => {
        reset();
        setActive(false);
      }}
      onMouseMove={onMouseMove}
      className={`relative block rounded-xl border p-6 transition-all duration-300 will-change-transform
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

      <div className="relative flex items-center gap-4" style={{ transform: "translateZ(30px)" }}>
        <div className="text-3xl text-blue-400">{icon}</div>
        <div>
          <div className="text-gray-400 text-sm">{title}</div>
          <div className="text-white font-medium">{value}</div>
        </div>
      </div>
    </a>
  );
}
