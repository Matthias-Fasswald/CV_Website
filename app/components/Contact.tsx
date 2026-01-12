import Section from "./Section";
import Container from "./Container";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <h2 className="text-4xl font-bold mb-16">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <ContactCard
            icon="✉️"
            title="Email"
            value="Write Email"
            href="mailto:matthias.fasswald@gmail.com"
          />

          <ContactCard
            icon="📞"
            title="Phone"
            value="+43 660 123 4567"
            href="tel:+436601234567"
          />

          <ContactCard
            icon="💼"
            title="LinkedIn"
            value="View Profile"
            href="https://www.linkedin.com/in/matthias-fasswald-3034911a3/"
          />

          <ContactCard
            icon="🐙"
            title="GitHub"
            value="View Repositories"
            href="https://github.com/Matthias-Fasswald"
          />

        </div>
      </Container>
    </Section>
  );
}
