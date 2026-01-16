"use client";

import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";
import Container from "./Container";
import HeroTile from "./HeroTile";
import useScroll from "../hooks/useScroll";
import MagneticText from "./MagneticText";
import IdeaCloud from "./IdeaCloud";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const scroll = useScroll();

  useEffect(() => {
    const update = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    const reset = () => setMouse({ x: 0.5, y: 0.5 });

    window.addEventListener("mousemove", update);
    window.addEventListener("resize", reset);

    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("resize", reset);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IDEA CLOUDS */}
      <div className="absolute inset-0 z-0">
        <IdeaCloud side="left" />
        <IdeaCloud side="right" />
      </div>

      {/* HERO CARD */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <Container>
          <div
            className="relative bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-2xl p-16 shadow-2xl transition-transform duration-300"
            style={{
              transform: `
                translateY(${scroll * 0.05}px)
                translate(${(mouse.x - 0.5) * 20}px, ${(mouse.y - 0.5) * 20}px)
              `,
            }}
          >
            {/* NAME */}
            <div className="mb-6 inline-block">
              <MagneticText text="Matthias Fasswald" />
            </div>

            <h2 className="text-2xl text-blue-400 mb-8">
              Software Engineer & SAP Cloud Developer
            </h2>

            <p className="text-lg max-w-3xl text-gray-300 leading-relaxed">
              I design and build reliable software systems across cloud platforms,
              enterprise SAP environments, and low-level infrastructure. My background
              spans SAP cloud development, systems programming in C/C++, and real-world
              customer and startup projects.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex gap-6">
              <MagneticButton href="/Lebenslauf_Original.pdf" primary>
                Download CV
              </MagneticButton>

              <MagneticButton href="#contact">
                Contact
              </MagneticButton>
              
              <MagneticButton href="Abschlusszeugnis-Matthias-Fasswald_signed.pdf">
                Letter of Reference
              </MagneticButton>
            </div>

            {/* SKILL TILES */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <HeroTile
                icon="☁"
                title="Cloud"
                description="SAP Business ByDesign, custom objects, enterprise cloud systems."
              />

              <HeroTile
                icon="🧠"
                title="Systems"
                description="C, C++, memory allocators, concurrency, IPC, performance."
              />

              <HeroTile
                icon="⚙"
                title="Enterprise"
                description="Customer projects, integration, process automation, reliability."
              />
            </div>
          </div>
        </Container>
      </div>

    </section>
  );
}
