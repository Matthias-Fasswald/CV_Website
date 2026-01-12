"use client";

import { useRef, useState } from "react";

export default function TechBadge({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    ref.current!.style.transform = `
      translate(${px * 8}px, ${py * 8}px)
    `;
  };

  const reset = () => {
    ref.current!.style.transition = "transform 0.3s ease";
    ref.current!.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
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
      className={`px-3 py-1 text-xs rounded-full border transition-all duration-300
        ${
          active
            ? "border-blue-500 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            : "border-zinc-700 text-gray-400"
        }`}
    >
      {label}
    </div>
  );
}
