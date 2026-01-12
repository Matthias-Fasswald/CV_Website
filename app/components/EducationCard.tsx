"use client";

import { useRef, useState } from "react";

export default function EducationCard({
  title,
  period,
  description,
}: {
  title: string;
  period: string;
  description?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (open) return;

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
    <div
      ref={ref}
      onMouseEnter={() => {
        if (!open) ref.current!.style.transition = "none";
        setActive(true);
      }}
      onMouseLeave={() => {
        if (!open) reset();
        setActive(false);
      }}
      onMouseMove={onMouseMove}
      className={`relative rounded-xl border transition-all duration-300 will-change-transform
        ${
          active || open
            ? "bg-zinc-900 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.35)]"
            : "bg-zinc-900/70 border-zinc-800"
        }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent transition-opacity
          ${active || open ? "opacity-100" : "opacity-0"}`}
      />

      <div className="relative p-6" style={{ transform: "translateZ(30px)" }}>
        {/* Header */}
        <div className="flex justify-between items-start gap-6">
          <div>
            <h3 className="text-xl font-bold leading-tight">{title}</h3>
            <div className="text-blue-400 text-sm">{period}</div>
          </div>

          {description && (
            <button
              onClick={() => setOpen(!open)}
              className="text-sm text-blue-400 hover:underline whitespace-nowrap"
            >
              {open ? "Hide" : "Details"}
            </button>
          )}
        </div>

        {/* Expandable body */}
        {description && (
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              open ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}