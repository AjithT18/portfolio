import "../style/Navbar.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar(){
    return (
        <>
            <div className="navbar theme">
                <a href="#" className="logo">
                    <div>
                        Ajith T
                    </div>
                </a>
                <ul className="nav-links" id="navLinks">
                    <li><a href="#home"><span>Home</span></a> <div className="under"></div></li>
                    <li><a href="#about">About</a> <div className="under"></div></li>
                    <li><a href="#skills">Skills</a> <div className="under"></div></li>
                    <li><a href="#projects">Projects</a> <div className="under"></div></li>
                    <li><a href="#experience">Experience</a> <div className="under"></div></li>
                    <li><a href="#skills">Education</a> <div className="under"></div></li>
                    <li><a href="#skills">Achivements</a> <div className="under"></div></li>
                    <li><a href="#contact">Contact</a> <div className="under"></div></li>
                </ul>
                <div className="nav-right">
                    <button className="theme-btn">
                        <i className="fa-solid fa-moon"></i>
                    </button>
                    <a href="" className="lt"><div >Let's talk</div></a>
                </div>
            </div>

        </>
    )
}

export default Navbar