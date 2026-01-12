"use client";

import { useRef } from "react";

export default function MagneticButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current!.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const reset = () => {
    ref.current!.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      className={`inline-flex items-center px-6 py-3 rounded-md font-semibold transition ${
        primary
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "border border-zinc-700 text-white hover:bg-zinc-800"
      }`}
    >
      {children}
    </a>
  );
}
