import React from "react";
import { motion } from "framer-motion";
// import "./Portfolio.css"; // Custom CSS file

const Portfolio = () => {
  const projects = [
    {
      name: "School Management System",
      description: "School Management System built with React, Node.js, Express and MongoDB",
      link: "https://github.com/SabirinMohamedAli/School-Enrollment-Management-System",
    },
    {
        name: "E-commerce Website",
        description: "A full-stack e-commerce application built with React, Java Spring Boot, and PostgreSQL.",
         link: "https://github.com/SabirinMohamedAli/E-Commerce/tree/main/src",
    },
    {
      name: "Himilo Qaran community System",
      description: "this system is private.",
      
    },
  ];

  const skills = [
    {
      category: "Frontend",
      list: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
    },
    {
      category: "Backend",
      list: ["Node.js", "Express.js", "PHP", "Java (Spring Boot)"],
    },
    {
      category: "Databases",
      list: ["MongoDB", "MySQL", "PostgreSQL" , "SQL Server"],
    },
    {
      category: "Version Control",
      list: ["Git", "GitHub"],
    },
    {
      category: "Other Tools & Platforms",
      list: ["RESTful APIs", "Thunder Client", "Insomnia"],
    },
  ];

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <div className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">I’m Sabirin Mohamed Ali</h1>
            <p className="hero-subtitle">A Fullstack Developer </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="about-section">
        <h2 className="section-title">Professional Profile</h2>
        <p className="about-description">
          I am an aspiring and innovative Full-Stack Web Developer specializing in the MERN stack, PHP, and Java Spring Boot. With a strong foundation in Computer Science, I excel at building robust, responsive web applications and delivering exceptional user experiences. Enthusiastic about solving complex problems, contributing to team success, and continuously enhancing my technical skills.
        </p>
      </section>

      <section className="services-section">
        <h2 className="section-title">What I Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>Modern, responsive, and user-friendly designs using the latest technologies.</p>
          </div>
          <div className="service-card">
            <h3>Backend Development</h3>
            <p>Robust server-side logic to power scalable applications.</p>
          </div>
          <div className="service-card">
            <h3>Database Management</h3>
            <p>Efficient database design and management for optimal performance.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="portfolio-section">
        <h2 className="section-title">Highlighted Projects</h2>
        <div className="portfolio-project-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn btn-link">Explore Project</a>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <h3>{skill.category}</h3>
              <ul>
                {skill.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2 className="section-titlee">Get in Touch</h2>
        <p>Looking to collaborate or hire? I’m just an email away.</p>
        <p>Email: <a href="Thaprinmohamett1333@gmail.com">Thaprinmohamett1333@gmail.com</a></p>
        <p>phone:+252612011700</p>
      </section>

      <footer className="portfolio-footer">
        <p>&copy; 2025 Fullstack Developer Portfolio</p>
      </footer>
    </div>
  );
};

export default Portfolio;