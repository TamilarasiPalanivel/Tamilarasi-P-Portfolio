import React from "react";
import { FaTrophy, FaMedal, FaCode, FaLightbulb } from "react-icons/fa";

const achievements = [
  {
    title: "🏆 Won in Smart India Hackathon 2024",
    description: "Secured the winning position as a Data Analyst & Preprocessing lead.",
    icon: <FaTrophy className="text-yellow-500" />,
  },
  {
    title: "🥇 First Prize in 24-hours Hackathon at KEC",
    description: "Developed a scalable solution under time constraints.",
    icon: <FaMedal className="text-blue-500" />,
  },
  {
    title: "📜 First Prize in Paper Presentation at KEC",
    description: "Presented on data privacy in federated learning.",
    icon: <FaLightbulb className="text-green-500" />,
  },
  {
    title: "🥉 Third Prize in Web Scraping at KEC",
    description: "Built a tool to efficiently extract and analyze web data.",
    icon: <FaCode className="text-red-500" />,
  },
];

const Achievements = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-yellow-500">Achievements 🏆</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {achievements.map((item, index) => (
          <div key={index} className="flex items-start bg-gray-800 rounded-lg shadow-md p-6">
            <div className="text-4xl mr-4">{item.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{item.title}</h3>
              <p className="text-white text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Achievements;


