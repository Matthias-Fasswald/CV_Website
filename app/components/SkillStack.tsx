import SkillGroupCard from "./SkillGroupCard";

const groups = [
  {
    title: "Languages",
    items: ["C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "ABAP", "Python"],
  },
  {
    title: "Frameworks & Runtime",
    items: ["React", "Next.js", "Node.js", "SAP SDK"],
  },
  {
    title: "Systems & Low-Level",
    items: ["POSIX Threads", "Semaphores", "Shared Memory", "IPC", "Memory Management", "Linux"],
  },
  {
    title: "Cloud & Enterprise",
    items: ["SAP Business ByDesign", "SAP Cloud", "REST APIs", "JSON", "AES 3.0"],
  },
  {
    title: "Embedded & IoT",
    items: ["ESP32", "Arduino", "Microcontrollers", "Speech Recognition"],
  },
  {
    title: "Tools",
    items: ["Git", "Jira", "VS Code", "Linux CLI"],
  },
];

export default function SkillStack() {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {groups.map((g) => (
        <SkillGroupCard key={g.title} title={g.title} items={g.items} />
      ))}
    </div>
  );
}
