import "../style/Experience.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Experience() {
  return (
    <>
      <div>
        <div className="experience theme" id="experience">
          <h1>
            <div className="dot"></div>Experience
          </h1>
          <h2>Where I've worked.</h2>
          <div className="contents">
            <div className="line">
              <div className="line1"></div>
              <i className="fa-solid fa-suitcase"></i>
            </div>
            <div className="content">
              <div>
                <h3>Web Development with Gen AI</h3>
                <p>Feb 2026 - May 2026</p>
              </div>
              <p className="cname">Rooman Technologies Ltd</p>
              <p className="techLearn">
                Java, HTML, CSS, Java Script, React.js, JDBC, Spring Boot, MySQL
              </p>
              <ul>
                <li>
                  Worked on an AI-Powered Resume Builder with Role-Specific
                  Content Suggestions project using modern web development
                  technologies and AI-based functionalities.{" "}
                </li>
                <li>
                  Developed and integrated frontend components using
                  technologies like HTML, CSS, JavaScript, and React.js for
                  creating responsive and user-friendly interfaces.{" "}
                </li>
                <li>
                  Worked on backend development concepts using Java, JDBC for
                  application logic and database connectivity.{" "}
                </li>
                <li>
                  Improved problem-solving, debugging, teamwork, and project
                  management skills through practical implementation and regular
                  project activities.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
