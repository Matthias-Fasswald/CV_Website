import Section from "./Section";
import Container from "./Container";
import SkillCard from "./SkillCard";
import SkillStack from "./SkillStack";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        {/* High-level skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <SkillCard
            icon="☁️"
            title="SAP & Cloud Engineering"
            description="SAP Business ByDesign, custom business objects, validation logic, cloud-based enterprise solutions and performance optimization."
          />

          <SkillCard
            icon="🧠"
            title="Systems Programming"
            description="C and C++ with focus on memory management, concurrency, IPC and performance-critical software design."
          />

          <SkillCard
            icon="🗄️"
            title="Backend & Data"
            description="PostgreSQL, backend data processing, system integration and data exchange in enterprise environments."
          />

          <SkillCard
            icon="⚙️"
            title="Enterprise Software"
            description="Design and implementation of customer-specific SAP extensions, testing, debugging and documentation."
          />

          <SkillCard
            icon="📊"
            title="Engineering Practice"
            description="Agile development with Jira, business process analysis, customer communication and project coordination."
          />

          <SkillCard
            icon="🧪"
            title="Quality & Reliability"
            description="Debugging, testing, performance tuning and maintaining stable production systems."
          />

        </div>

        {/* Technical stack */}
        <SkillStack />
      </Container>
    </Section>
  );
}
