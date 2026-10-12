
import { useEffect, useState } from "react";
import "../style/Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const sections = [
            "home",
            "about",
            "skills",
            "project",
            "experience",
            "education",
            "achivements",
            "contact"
        ];

        const handleScroll = () => {
            const scrollPosition =
                window.scrollY + window.innerHeight * 0.35;

            let currentSection = sections[0];

            sections.forEach((id) => {
                const section = document.getElementById(id);

                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = id;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { label: "Home", id: "home" },
        { label: "About", id: "about" },
        { label: "Skills", id: "skills" },
        { label: "Projects", id: "project" },
        { label: "Experience", id: "experience" },
        { label: "Education", id: "education" },
        { label: "Achivements", id: "achivements" },
        { label: "Contact", id: "contact" }
    ];

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="navbar theme" id="navbar">
            <a
                href="#home"
                className="logo"
                onClick={handleNavClick}
            >
                <div>Ajith T</div>
            </a>

            <ul className={`nav-links ${menuOpen ? "menu-open" : ""}`} id="navLinks">
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className={
                            activeSection === item.id ? "active" : ""
                        }
                    >
                        <a
                            href={`#${item.id}`}
                            onClick={handleNavClick}
                        >
                            {item.label}
                        </a>

                        <div className="undermain">
                            <div className="under"></div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="nav-right">
                <button
                    className="theme-btn"
                    id="themeCh"
                    type="button"
                    aria-label="Toggle theme"
                >
                    <i className="fa-solid fa-moon"></i>
                </button>

                <a href="#contact" className="lt">
                    <div>Let's talk</div>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
