import "../style/Project.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Projects() {
  return (
    <>
      <div>
        <div className="project theme" id="project">
          <h1>
            <div className="dot"></div>Projects
          </h1>
          <h2>
            Things I've built. <br />
            <p>
              7+ repositories on{" "}
              <a href="https://github.com/AjithT18" target="_blank">
                <span>GitHub </span>
              </a>
              — full-stack web apps, Spring Boot, and AI/ML projects.
            </p>
          </h2>
          <div className="boxes">
            <div className="box">
              <div className = "titdes">
                <p className="title">Elite Resume</p>
                <p className="description">
                  An AI-powered resume builder that helps users create
                  ATS-friendly, role-specific resumes using Google Gemini AI. It
                  provides personalized career objectives, project and
                  experience descriptions, job description-based resume
                  optimization, live resume previews, and PDF export
                  functionality.
                </p>
              </div>
              <div className="techcode">
                <div className="tech">
                  <div>Java</div>
                  <div>React.js</div>
                  <div>MySQL</div>
                  <div>SpringBoot</div>
                </div>
                <a href="https://github.com/AjithT18/AI-Powered-Resume-Builder-with-Role-Specific-Content-Suggestions" target="_blank">
                  <i className="fa-brands fa-github"></i> Code
                </a>
              </div>
            </div>
            <div className="box">
              <div className = "titdes">
                <p className="title">MediSlot</p>
                <p className="description">
                  A full-stack doctor appointment booking system that enables
                  patients to book appointments with verified doctors. It
                  includes doctor credential verification and approval,
                  appointment slot management, and an admin dashboard for
                  managing doctors, user accounts, medical specializations, and
                  appointment statistics.
                </p>
              </div>
              <div className="techcode">
                <div className="tech">
                  <div>Java</div>
                  <div>React.js</div>
                  <div>MySQL</div>
                  <div>SpringBoot</div>
                </div>
                <a href="https://github.com/AjithT18/Medislot-Smart-Appointment" target="_blank">
                  <i className="fa-brands fa-github"></i> Code
                </a>
              </div>
            </div>
            <div className="box">
              <div className = "titdes">
                <p className="title">In-motion EV Charging</p>
                <p className="description">
                  A smart wireless EV charging system that enables contactless
                  power transfer to moving electric vehicles using inductive
                  power transfer, with NodeMCU ESP8266 and ThingSpeak for
                  real-time voltage, temperature, and battery monitoring to
                  improve charging efficiency and safety.
                </p>
              </div>
              <div className="techcode">
                <div className="tech">
                  <div>Embedded C</div>
                  <div>ThingSpeak</div>
                </div>
                <a href="https://github.com/AjithT18/Smart-Infrastructure-for-In-motion-EV-Charging" target="_blank">
                  <i className="fa-brands fa-github"></i> Code
                </a>
              </div>
            </div>
            <div className="box">
              <div className = "titdes">
                <p className="title">Food Delivery App</p>
                <p className="description">
                  A food delivery application that allows users to browse
                  restaurants, explore menus, add food items to their cart, and
                  place orders through a user-friendly interface. It includes
                  order tracking, customer account management, and a seamless
                  ordering experience with efficient database integration.
                </p>
              </div>
              <div className="techcode">
                <div className="tech">
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>JavaScript</div>
                  <div>MongoDB</div>
                </div>
                <a href="https://github.com/AjithT18/Food_Delivery_App" target="_blank">
                  <i className="fa-brands fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
