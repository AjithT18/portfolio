import "../style/Navbar.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../script/script.js"

function Navbar(){
    return (
        <>
            <div className="navbar theme" id = "navbar">
                <a href="#" className="logo">
                    <div>
                        Ajith T
                    </div>
                </a>
                <ul className="nav-links" id="navLinks">
                    <li><a href="#home"><span>Home</span></a><div className="undermain"><div className="under"></div></div></li>
                    <li><a href="#about">About</a> <div className="undermain"><div className="under"></div></div></li>
                    <li><a href="#skills">Skills</a> <div className="undermain"><div className="under"></div></div></li>
                    <li><a href="#projects">Projects</a> <div className="undermain"><div className="under"></div></div></li>
                    <li><a href="#experience">Experience</a> <div className="undermain"><div className="under"></div></div></li>
                    <li><a href="#skills">Education</a> <div className="undermain"><div className="under"></div></div></li>
                    <li><a href="#skills">Achivements</a> <div className="undermain"><div className="under"></div></div></li>
                    <li><a href="#contact">Contact</a> <div className="undermain"><div className="under"></div></div></li>
                </ul>
                <div className="nav-right">
                    <button className="theme-btn" id="themeCh">
                        <i className="fa-solid fa-moon"></i>
                    </button>
                    <a href="" className="lt"><div >Let's talk</div></a>
                </div>
            </div>

        </>
    )
}

export default Navbar