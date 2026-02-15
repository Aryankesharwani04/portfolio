import "../App.css";
import CollapsibleSection from "./CollapsibleSection";

function About() {
  return (
    <CollapsibleSection title="About Me">
      <p className="text-[var(--text-200)] text-justify leading-relaxed">
        Aspiring Software Developer with hands-on experience in building scalable web applications using{" "}
        <strong className="text-[var(--primary-300)] font-semibold">React.js</strong>,{" "}
        <strong className="text-[var(--primary-300)] font-semibold">Express.js</strong>, and{" "}
        <strong className="text-[var(--primary-300)] font-semibold">Django</strong>, along with designing{" "}
        <strong className="text-[var(--primary-300)] font-semibold">microservices-based backend systems</strong>.
        Experienced in containerizing applications with{" "}
        <strong className="text-[var(--primary-300)] font-semibold">Docker</strong>, automating{" "}
        <strong className="text-[var(--primary-300)] font-semibold">AWS workflows</strong>, and applying
        strong problem-solving skills with solid CS fundamentals.
      </p>
    </CollapsibleSection>
  );
}

export default About;

