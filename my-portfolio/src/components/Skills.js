// src/Skills.js
import React from "react";
import { SiMongodb, SiMysql, SiBootstrap, SiFlask, SiTailwindcss, SiC, SiDjango } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaGitAlt, FaGithub, FaFigma, FaChartBar } from "react-icons/fa";

const skills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "C", icon: <SiC className="text-blue-600" /> },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Flask", icon: <SiFlask className="text-gray-400" /> },
      { name: "Django", icon: <SiDjango className="text-green-700" /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-500" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "Data Visualization", icon: <FaChartBar className="text-yellow-600" /> },  // Replaced Power BI
    ],
  },
];

const Skills = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-yellow-500">My Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {skills.map((category, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">{category.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-3 bg-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-white text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

