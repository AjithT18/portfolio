import "../style/About.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function About() {
  return (
    <>
      <div className="about theme" id="about">
        <h1>
          <div className="dot"></div>About
        </h1>
        <h2>An engineer who ships.</h2>
        <div className="content">
          <div className="left">
            <p>
              I'm a Computer Science Engineering graduate with a strong
              foundation in Java, SQL, Object-Oriented Programming, and Data
              Structures & Algorithms. I enjoy building scalable web
              applications using Java, Spring Boot, React.js, and MySQL, with a
              focus on writing clean, efficient, and maintainable code.
            </p>
            <p>
              I have hands-on experience in full-stack development, AI-powered
              applications, and IoT-based solutions through my technical
              projects and internship experience. With 100+ LeetCode problems
              solved, I continuously strengthen my problem-solving and
              programming skills while exploring new technologies and building
              practical solutions.
            </p>
            <p>
              I'm passionate about software development, continuous learning,
              and creating technology-driven solutions that solve real-world
              problems.
            </p>
            <div className="loc">
              <i className="fa-solid fa-location-dot"></i> Bengaluru, Karnataka,
              India
            </div>
          </div>
          <div className="right">
            <div className="box">
              <h2>
                100<sup>+</sup>
              </h2>
              <p>
                Leet Code <br />
                Problems Solved
              </p>
            </div>
            <div className="box">
              <h2>1</h2>
              <p>
                Internship <br /> Completed
              </p>
            </div>
            <div className="box">
              <h2>
                10<sup>+</sup>
              </h2>
              <p>
                Project
                <br />
                Shipped
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
