import React from "react";
import './Skills.css'

const Skills = () => {
  const skills = [
    "React.js", "Node.js", "JavaScript", "Python", "C++", "Django",
    "MySQL", "SQLite3", "HTML", "CSS", "Firebase", "MongoDB"
  ];

  return (
    <div className="skills">
      <h1 className="">My Skills</h1>
      <div className="">
        {skills.map((skill, index) => (
          <div key={index} className="">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;