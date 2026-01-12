import Section from "./Section";
import Container from "./Container";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <h2 className="text-4xl font-bold mb-16">About</h2>

        <AboutCard>
          <p className="text-lg leading-relaxed text-gray-300 max-w-3xl">
            I am a Software Engineering student with a strong professional background in
            SAP cloud development and enterprise software. I currently work as a
            SAP Cloud Developer at All for One Group, where I build and maintain
            customer-specific solutions in ABAP and SAP cloud environments.
            In parallel, I study Software Engineering and Management at TU Graz and
            will continue in Software Design and Cloud Computing at FH Joanneum.
          </p>
        </AboutCard>
      </Container>
    </Section>
  );
}
