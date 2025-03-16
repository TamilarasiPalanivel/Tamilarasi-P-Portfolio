import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="profile-image"
      />
      <h1 className="name">TAMILARASI P</h1>
      <p className="role">Full Stack Developer</p>
      <p className="description">
        I am an enthusiastic and dedicated developer with a passion for creating projects that solve real-world problems.
        I constantly strive to enhance my skills by learning new technologies and working on projects that challenge me. 
        I love turning ideas into reality through code and take pride in writing clean, efficient, and maintainable code.
      </p>
      <p className="description margin-top">
        I have a strong foundation in web development, particularly in
        <span className="highlight"> React.js</span>,
        <span className="highlight"> JavaScript</span>, and backend technologies. 
        My goal is to build user-centric applications that not only function smoothly but also provide a great user experience.
      </p>
      <p className="description margin-top">
        My passion for coding is driven by the desire to solve complex problems and build solutions that make a difference.
        I am a quick learner and thrive in environments where I can continuously expand my knowledge and skills.
      </p>
      <p className="description margin-top">
        In addition to my technical expertise, I value
        <span className="highlight"> teamwork</span> and
        <span className="highlight"> effective communication</span>.
        I believe that collaborating with others and sharing knowledge is key to achieving better results.
        I am also confident in my ability to manage my time efficiently and lead projects to successful completion.
      </p>
      <p className="description margin-top">
        Looking forward, I aspire to grow as a full-stack developer by taking on more challenging projects
        and expanding my expertise in different technologies. My ultimate goal is to create software solutions that are both
        <span className="highlight"> innovative</span> and
        <span className="highlight"> impactful</span>.
      </p>
    </div>
  );
};

export default About;
