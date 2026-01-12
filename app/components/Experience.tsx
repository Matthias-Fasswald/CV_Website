import Section from "./Section";
import Container from "./Container";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <h2 className="text-4xl font-bold mb-16">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent" />

          <div className="space-y-16">

            <div className="relative pl-16">
              <div className="absolute left-3 top-8 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
              <ExperienceCard
                period="April 2023 – September 2025"
                role="SAP Cloud Developer"
                company="All for One Group"
                description="Designed, developed and implemented custom extensions and solutions for SAP Business ByDesign, including Custom Business Objects and validation logic. Analyzed and optimized existing SAP cloud developments to improve business process alignment, performance and reliability. Performed debugging, testing and documentation of cloud-based SAP solutions in ongoing customer projects. Worked in agile project teams using Jira and close collaboration with consultants and internal departments."
                tech={["SAP", "ABAP", "Cloud", "REST", "Jira", "Enterprise Systems"]}
              />
            </div>

            <div className="relative pl-16">
              <div className="absolute left-3 top-8 w-4 h-4 rounded-full bg-blue-500/80 shadow-[0_0_16px_rgba(59,130,246,0.6)]" />
              <ExperienceCard
                period="January 2021 – February 2023"
                role="Project Management Assistant (E-Learning)"
                company="Bitmedia E-Solutions"
                description="Supported customer projects in the e-learning domain, including project coordination and documentation. Contributed to the development and improvement of digital learning strategies and platforms and acted as an interface between technical teams and customers."
                tech={["Project Management", "E-Learning", "Documentation", "Coordination"]}
              />
            </div>

            <div className="relative pl-16">
              <div className="absolute left-3 top-8 w-4 h-4 rounded-full bg-blue-500/70 shadow-[0_0_14px_rgba(59,130,246,0.5)]" />
              <ExperienceCard
                period="March 2020 – February 2022"
                role="Co-Founder"
                company="Startup Bringsham"
                description="Co-founded and built a logistics and service platform startup. Designed and operated order processing workflows from customer request to delivery and implemented route planning and operational processes for logistics."
                tech={["Startup", "Logistics", "Operations", "Process Design"]}
              />
            </div>

            <div className="relative pl-16">
              <div className="absolute left-3 top-8 w-4 h-4 rounded-full bg-blue-500/60 shadow-[0_0_12px_rgba(59,130,246,0.4)]" />
              <ExperienceCard
                period="July 2018 – July 2023"
                role="Paramedic"
                company="Grünes Kreuz Steiermark"
                description="Worked in emergency medical services with high responsibility, stress resistance and teamwork. Developed strong communication, reliability and decision-making skills in critical situations."
                tech={["Emergency", "Teamwork", "Decision Making", "Responsibility"]}
              />
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}
