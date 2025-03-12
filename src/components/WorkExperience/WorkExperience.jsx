import React, { useContext } from "react";
import "./WorkExperience.css";
import { themeContext } from "../../Context";

const WorkExperience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const experiences = [
    {
      company: "E-developers",
      position: "Full Stack Developer",
      period: "Feb 2023 – Nov 2023",
      achievements: [
        "Optimized website performance, reducing page load time by 30%, enhancing user experience and overall efficiency.",
        "Successfully implemented intricate UI/UX designs, translating wireframes into fully responsive components with 100% pixel-perfect accuracy.",
        "Led a team of 4 developers to deliver a high-impact project within tight deadlines, ensuring smooth collaboration and timely delivery.",
        "Developed and maintained reusable React components, streamlining codebases and boosting development productivity by 20%.",
      ],
    },
    {
      company: "OnGraph",
      position: "React Developer",
      period: "Sep 2020 – Sep 2022",
      achievements: [
        "Led two key projects: one independently from start to finish, handling full development cycles, and another while mentoring and guiding junior team members to ensure successful delivery.",
        "Worked on complete project lifecycles, from initial planning and design implementation to deployment and post-launch optimization.",
        "Gained valuable exposure to React Native, contributing to mobile application development and broadening expertise in cross-platform solutions.",
        "Collaborated with designers and backend developers to create scalable and responsive user interfaces, achieving consistent performance improvements and seamless integration.",
      ],
    },
    {
      company: "webcelixs",
      position: "React Developer",
      period: "Feb 2019 – Aug 2020",
      achievements: [
        "Collaborated with senior developers to integrate RESTful APIs, ensuring efficient data handling and application functionality.",
        "Learned and implemented Redux for state management, enhancing the scalability and maintainability of web applications.",
        "Gained hands-on experience in React code integration, building reusable components and following best coding practices.",
        "Utilized web packages like Axios, React Router, and Formik to optimize development workflows and improve user experience.",
        "Worked with GitHub for version control, managing repositories and resolving conflicts effectively.",
        "Applied ESLint to maintain code consistency and reduce debugging time by adhering to industry standards.",
      ],
    },
  ];

  return (
    <div className="work-experience" id="work">
      <div className="w-heading">
        <span style={{ color: darkMode ? "white" : "" }}>My Work</span>
        <span>Experience</span>
        <div className="blur w-blur1" style={{ background: "#ABF1FF94" }}></div>
        <div
          className="blur w-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>

      <div className="experiences">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-card"
            style={{
              background: darkMode ? "black" : "",
              color: darkMode ? "white" : "",
            }}
          >
            <div className="exp-header">
              <h3>{exp.position}</h3>
              <h4>{exp.company}</h4>
              <span className="period">{exp.period}</span>
            </div>
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
