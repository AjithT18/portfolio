import "../style/Navbar.css"

function Navbar(){
    return (
        <>
            <div className="navbar">
                <a href="#" className="logo">
                    Ajith <span>T</span>
                </a>
                <ul class="nav-links" id="navLinks">
                    <li><a href="#home" class="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="nav-right">
                    <button class="theme-btn">
                        <i class="fa-solid fa-moon"></i>
                    </button>
                    <div class="menu-btn" id="menuBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Navbar