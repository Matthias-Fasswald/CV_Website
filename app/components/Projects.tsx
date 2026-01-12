import Section from "./Section";
import Container from "./Container";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <h2 className="text-4xl font-bold mb-16">Projects</h2>

        <div className="space-y-10">

          <ProjectCard
            title="SAP Business ByDesign – Cloud Integrations & Custom Objects"
            category="Enterprise Cloud Systems"
            description="Designed and implemented custom Business Objects, validation logic and cloud-based extensions for SAP Business ByDesign in customer projects. This included business process integration, performance optimization, testing and long-term maintainability in productive SAP environments."
            tech={["SAP", "ABAP", "Cloud", "REST", "Enterprise Systems"]}
          />

          <ProjectCard
            title="Shared-Memory Airport Simulation"
            category="C, IPC, Concurrency — TU Graz"
            description="Implemented a multi-process airport communication system using shared memory, semaphores and custom message protocols. The project required careful handling of race conditions, synchronization, state machines and failure-safe cleanup across independent processes."
            tech={["C", "POSIX", "Shared Memory", "Semaphores", "Concurrency", "IPC"]}
          />

          <ProjectCard
            title="Custom Memory Allocator (malloc/free)"
            category="Low-Level Systems Engineering"
            description="Built a complete dynamic memory allocator from scratch in C, including chunk management, free lists, coalescing and error detection. The implementation focused on minimizing syscalls, efficient memory reuse and robustness against double-free and invalid access."
            tech={["C", "Memory", "malloc", "Free Lists", "Coalescing", "Syscalls"]}
          />

          <ProjectCard
            title="Embedded Voice-Controlled Systems"
            category="ESP32 / Arduino — Embedded & IoT"
            description="Designed microcontroller-based systems using ESP32 and Arduino to process microphone input, perform speech recognition and control LEDs and hardware outputs. Focused on low-latency signal processing and cloud-assisted text-to-speech pipelines."
            tech={["ESP32", "Arduino", "C++", "IoT", "Signal Processing", "Speech"]}
          />

        </div>
      </Container>
    </Section>
  );
}
