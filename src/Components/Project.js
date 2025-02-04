import React from "react";

const projects = [
  {
    title: "Cryptocurrency Tracker Dashboard",
    description:
      "A cryptocurrency dashboard built using React.js that fetches real-time data from the CryptoCurrency API. Displays current prices, market caps, and trading volumes with integrated Charts.js for data visualization.",
    technologies: ["React.js", "API", "Charts.js"],
    link: "https://your-crypto-tracker-link.com",
    github: "https://github.com/yourusername/crypto-tracker",
  },
  {
    title: "News App",
    description:
      "A React.js-based news application that fetches and displays the latest news articles from a third-party news API. Provides users with up-to-date news coverage in a user-friendly format.",
    technologies: ["React.js", "API"],
    link: "https://your-news-app-link.com",
    github: "https://github.com/yourusername/news-app",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive and visually appealing personal portfolio website showcasing my projects, skills, and contact information.",
    technologies: ["React.js", "HTML", "CSS"],
    link: "https://your-portfolio-link.com",
    github: "https://github.com/yourusername/portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: "20px" }}>
      <h2>My Projects</h2>
      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                margin: "5px",
                padding: "10px 15px",
                backgroundColor: "#007bff",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              View Live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                margin: "5px",
                padding: "10px 15px",
                backgroundColor: "#28a745",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
