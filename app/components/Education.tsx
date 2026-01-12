import Section from "./Section";
import Container from "./Container";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <Section id="education">
      <Container>
        <h2 className="text-4xl font-bold mb-16">Education</h2>

        <div className="space-y-10">

          <EducationCard
            title="Software Engineering and Management — TU Graz"
            period="October 2018 – September 2025"
            description="University studies focused on software engineering, programming paradigms, systems programming, formal methods, and project-oriented development. Combined technical foundations with management and engineering practice."
          />

          <EducationCard
            title="Software Design & Cloud Computing — FH Joanneum (Kapfenberg)"
            period="Starting February 2026"
            description="Advanced studies with a strong focus on cloud architectures, modern software design, distributed systems and applied cloud engineering."
          />

          <EducationCard
            title="AHS Reifeprüfung — BORG Dreierschützengasse"
            period="2014 – 2017"
          />

        </div>
      </Container>
    </Section>
  );
}
