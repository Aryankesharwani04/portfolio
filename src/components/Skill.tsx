import "../App.css";

function Skill() {
  return (
    <div className="media pb-4">
      <h1 className="text-3xl font-bold mb-4 text-[var(--primary-300)]">Skills</h1>
      <div className="skills flex flex-wrap gap-4">
        {/* Programming Languages */}
        <span>JavaScript</span>
        <span>C++</span>
        <span>C</span>
        <span>Python</span>
        <span>Java</span>
        <span>SQL</span>

        {/* Web Technologies */}
        <span>ReactJS</span>
        <span>ExpressJS</span>
        <span>NodeJS</span>
        <span>Tailwind CSS</span>
        <span>Puppeteer</span>

        {/* DevOps & Cloud */}
        <span>Linux (Ubuntu)</span>
        <span>Docker</span>
        <span>Jenkins</span>
        <span>Git</span>
        <span>AWS (EC2, S3, IAM)</span>

        {/* Databases */}
        <span>MongoDB</span>
        <span>MySQL</span>


        {/* Coursework */}
        <span>Operating System</span>
        <span>Data Structures</span>
        <span>DBMS</span>
        <span>Object-Oriented Design</span>
      </div>
    </div>
  );
}

export default Skill;
