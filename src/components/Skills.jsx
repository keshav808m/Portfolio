import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython
} from "react-icons/fa";
import { SiMongodb, SiTypescript, SiMysql } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="section section-box">
      <h2>Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <FaHtml5 /> HTML
        </div>

        <div className="skill-card">
          <FaCss3Alt /> CSS
        </div>

        <div className="skill-card">
          <FaJs /> JavaScript
        </div>

        <div className="skill-card">
          <FaReact /> React
        </div>

        <div className="skill-card">
          <FaNodeJs /> Node.js
        </div>

        <div className="skill-card">
          <SiMongodb /> MongoDB
        </div>

        <div className="skill-card">
          <SiTypescript /> TypeScript
        </div>

        <div className="skill-card">
          <FaGitAlt /> Git
        </div>

        <div className="skill-card">
          <FaJava /> Java
        </div>

        <div className="skill-card">
          <FaPython /> Python
        </div>

        <div className="skill-card">
          <SiMysql /> MySQL
        </div>

      </div>
    </section>
  );
}

export default Skills;