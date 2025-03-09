const About = () => {
  return (
    <div className="p-8 text-center flex flex-col items-center bg-gray-900 text-white">
      <img
        src="/profile.jpg"  // Make sure to place your photo in the 'public' folder and name it 'profile.jpg'
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-lg mb-4 border-4 border-yellow-500"
      />
      <h1 className="text-3xl font-bold mb-2">TAMILARASI P</h1>
      <p className="text-gray-400 mb-4">Full Stack Developer</p>
      <p className="max-w-xl text-center">
        I am an enthusiastic and dedicated developer with a passion for creating projects that solve real-world problems.
        I constantly strive to enhance my skills by learning new technologies and working on projects that challenge me. 
        I love turning ideas into reality through code and take pride in writing clean, efficient, and maintainable code.
      </p>
      <p className="max-w-xl text-center mt-4">
        I have a strong foundation in web development, particularly in
        <span className="text-yellow-500"> React.js</span>,
        <span className="text-yellow-500"> JavaScript</span>, and backend technologies. 
        My goal is to build user-centric applications that not only function smoothly but also provide a great user experience.
      </p>
      <p className="max-w-xl text-center mt-4">
        My passion for coding is driven by the desire to solve complex problems and build solutions that make a difference.
        I am a quick learner and thrive in environments where I can continuously expand my knowledge and skills.
      </p>
      <p className="max-w-xl text-center mt-4">
        In addition to my technical expertise, I value
        <span className="text-yellow-500"> teamwork</span> and
        <span className="text-yellow-500"> effective communication</span>.
        I believe that collaborating with others and sharing knowledge is key to achieving better results.
        I am also confident in my ability to manage my time efficiently and lead projects to successful completion.
      </p>
      <p className="max-w-xl text-center mt-4">
        Looking forward, I aspire to grow as a full-stack developer by taking on more challenging projects
        and expanding my expertise in different technologies. My ultimate goal is to create software solutions that are both
        <span className="text-yellow-500"> innovative</span> and
        <span className="text-yellow-500"> impactful</span>.
      </p>
    </div>
  );
};

export default About;
