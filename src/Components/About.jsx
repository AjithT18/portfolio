import "../style/About.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

function About(){
    return (
        <>
            <div className="about theme">
                <h1><div className="dot"></div>About</h1>
                <h2>An engineer who ships.</h2>
                <div className="content">
                    <div className="left">
                        <p>I'm a software developer with a strong foundation in Java, SQL, OOP, and core DSA. I build scalable web and mobile applications using Spring Boot, React.js, and Firebase, and I'm skilled in Git and Agile development workflows.</p>
                        <p>Currently completing my B.E. in Information Science & Engineering at The Oxford College of Engineering, Bengaluru. At 1Stop.ai I worked full lifecycle on production-style Java projects — from Servlets and JDBC to Spring Boot with Hibernate ORM.</p>
                        <div className="loc"><i className="fa-solid fa-location-dot"></i> Bengaluru, Karnataka, India</div>
                    </div>
                    <div className="right">
                        <div className="box">
                            <h2>100<sup>+</sup></h2>
                            <p>Leet Code <br/>Problems Solved</p>
                        </div>
                        <div className="box">
                            <h2>1</h2>
                            <p>Internship <br /> Completed</p>
                        </div>
                        <div className="box">
                            <h2>10<sup>+</sup></h2>
                            <p>Project<br/>Shipped</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About