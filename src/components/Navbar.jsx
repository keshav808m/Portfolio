import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Portfolio</h2>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a onClick={() => setMenuOpen(!menuOpen)} href="#home">Home</a></li>
        <li><a onClick={() => setMenuOpen(!menuOpen)} href="#about">About</a></li>
        <li><a onClick={() => setMenuOpen(!menuOpen)} href="#skills">Skills</a></li>
        <li><a onClick={() => setMenuOpen(!menuOpen)} href="#education">Education</a></li>
        <li><a onClick={() => setMenuOpen(!menuOpen)} href="#experience">Experience</a></li>
        <li><a onClick={() => setMenuOpen(!menuOpen)} href="#projects">Projects</a></li>
        <li><a onClick={() => setMenuOpen(!menuOpen)} href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;