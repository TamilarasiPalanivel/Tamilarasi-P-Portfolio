// src/Projects.js
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Face Liveness Detection",
    techStack: ["React.js", "Flask", "Deep Learning"],
    description:
      "Developed a system to enhance biometric security by accurately distinguishing between real and spoofed representations using CNN-based liveness detection.",
    github: "https://github.com/TamilarasiPalanivel/Face_detection_liveness",
  },
  {
    name: "Recipe Finder",
    techStack: ["React.js", "Express.js", "Node.js", "MongoDB"],
    description:
      "A web application allowing users to search for recipes based on cooking time and upload their favorite dishes after creating a profile.",
    github: "https://github.com/TamilarasiPalanivel/Recipe-Finder",
  },
  {
    name: "AutoMart Hub",
    techStack: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
    description:
      "Facilitates seamless interaction between managers and customers for buying and selling vehicles.",
    github: "https://github.com/TamilarasiPalanivel/Online-Automobile-Project",
  },
  {
    name: "MediNexus",
    techStack: ["HTML", "CSS", "JavaScript", "Express.js", "MySQL"],
    description:
      "Enables patients to schedule appointments and manage their prescriptions efficiently.",
    github: "https://github.com/TamilarasiPalanivel/Hospital-Management-System",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-yellow-500">
        My Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
              {project.name}
            </h3>
            <p className="text-gray-400 mb-2">{project.description}</p>
            <div className="mb-2">
              <span className="font-semibold text-yellow-500">Tech Stack:</span>{" "}
              {project.techStack.join(", ")}
            </div>
            
            <div className="flex justify-end">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-300 mr-4"
              >
                <FaGithub className="inline mr-1" /> GitHub
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-300"
              >
                <FaExternalLinkAlt className="inline mr-1" /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
