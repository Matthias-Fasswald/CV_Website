"use client";

import { useRef } from "react";

export default function MagneticText({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    ref.current!.style.transform = `
      translate(${px * 20}px, ${py * 20}px)
    `;
  };

  const reset = () => {
    ref.current!.style.transition = "transform 0.4s ease";
    ref.current!.style.transform = "translate(0px, 0px)";
  };

  return (
    <h1
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      className="text-6xl font-bold tracking-tight text-white transition-transform"
    >
      {text}
    </h1>
  );
}
