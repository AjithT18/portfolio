import "../style/Experience.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Experience(){
    return(
        <>
            <div>
                <div className="experience">
                    <h1><div className="dot"></div>Experience</h1>
                    <h2>Where I've worked.</h2>
                    <div className="contents">
                        <div className="line">
                            <div className="line1">    
                            </div>
                            <i class="fa-solid fa-suitcase"></i>
                        </div>
                        <div className="content">
                            <div><h3>Full Stack Web Development Intern</h3><p>Jan 2026 - May 2026</p></div>
                            <p className="cname">Rooman Technologies Ltd</p>
                            <p className="techLearn">Java, JDBC, Servlets, Hibernate, Spring Boot, Maven, Gradle, MySQL</p>
                            <ul>
                                <li>Built a database-driven website using Java Servlets and JDBC with MySQL.</li>
                                <li>Developed an Employee Management System using Spring Boot and Hibernate ORM.</li>
                                <li>Worked full lifecycle on two production-style projects with Maven/Gradle pipelines.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Experience