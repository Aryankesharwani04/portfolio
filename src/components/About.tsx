import "../App.css";
import CollapsibleSection from "./CollapsibleSection";

function About() {
  return (
    <CollapsibleSection title="About Me">
      <p className="text-[var(--text-200)] text-justify leading-relaxed">
        Software Engineer with production experience across{" "}
        <strong className="text-[var(--primary-300)] font-semibold">.NET Core</strong> and the{" "}
        <strong className="text-[var(--primary-300)] font-semibold">MERN stack</strong>, building
        backend services, REST APIs, and distributed, high-throughput systems handling{" "}
        <strong className="text-[var(--primary-300)] font-semibold">7,500+ RPS</strong>. Strong
        foundation in data structures, system design, and clean coding, with{" "}
        <strong className="text-[var(--primary-300)] font-semibold">900+ DSA problems</strong> solved.
      </p>
    </CollapsibleSection>
  );
}

export default About;