import "../style/Home.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import profilePhoto from "../assets/images/portfolio_image.png"
import Navbar from "./Navbar"
import resume from "../assets/Resume/Ajith_Resume(DCL).pdf"
// import Color from "../Colors/Color";




function Home(){
    
    return (
        <>
        <div className="mainhome theme" id="mainhome">
            <div className="navbar1">
                <Navbar/>
            </div>
            <div className="home" id="home">
                <div className="right">
                    <div className="introduction">
                        <h1 className="one">Hi, I'am </h1>
                        <h1 className="two"> Ajith T </h1>
                        <h1 className="three">Software Developer</h1>
                        <p>Software Developer with a strong knowledge of Java, SQL, React.js, HTML, CSS, and JavaScript. 
                            Passionate about software development, web technologies, and problem-solving. Seeking an opportunity to work in 
                            a challenging environment where I can apply my technical skills, learn emerging technologies, and contribute to 
                            developing innovative and efficient software solutions while growing professionally.</p>
                        <p>- biulding scalable Software Applications with Java, SpringBoot, React.js and MySQL .</p>
                    </div>
                    <div className="first"> 
                        <a href={resume} download = "Ajith_Resume"><div className="rp" ><i className="fa-solid fa-download"></i> Download Resume</div></a>
                        <a href="#project"><div className="rp" >View Projects <i className="fa-solid fa-chevron-right"></i></div></a>
                    </div>
                    <div className="second">
                        <a className="rlm" href="https://github.com/AjithT18" target="_blank"><i className="fa-brands fa-github"></i></a>
                        <a className="rlm" href="https://www.linkedin.com/in/ajith-t-988069320" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        <a className="rlm" href=""><i className="fa-regular fa-envelope" target="_blank"></i></a>
                    </div>
                </div>
                <div className="left">
                    <div className="photo">
                        <img className ="profile_p" src={profilePhoto} alt="Img Loading"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home