
import { useEffect, useState } from "react";
import "../style/Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(() => {
        return localStorage.getItem("portfolio-theme") === "light";
    });

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

    // Apply the selected theme to the entire application
    useEffect(() => {
        const theme = isLightTheme ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("portfolio-theme", theme);
    }, [isLightTheme]);

    // Highlight the active navbar section while scrolling
    useEffect(() => {
        const sections = navItems.map((item) => item.id);

        const handleScroll = () => {
            const scrollPosition =
                window.scrollY + window.innerHeight * 0.35;

            let currentSection = sections[0];

            sections.forEach((id) => {
                const section = document.getElementById(id);

                if (
                    section &&
                    section.getBoundingClientRect().top +
                        window.scrollY <= scrollPosition
                ) {
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

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    const toggleTheme = () => {
        setIsLightTheme((previousTheme) => !previousTheme);
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

            <button
                type="button"
                className="menu-toggle"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((previous) => !previous)}
            >
                <i
                    className={`fa-solid ${
                        menuOpen ? "fa-xmark" : "fa-bars"
                    }`}
                />
            </button>

            <ul
                className={`nav-links ${menuOpen ? "menu-open" : ""}`}
                id="navLinks"
            >
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
                    onClick={toggleTheme}
                    aria-label={
                        isLightTheme
                            ? "Switch to dark theme"
                            : "Switch to light theme"
                    }
                    title={
                        isLightTheme
                            ? "Switch to dark theme"
                            : "Switch to light theme"
                    }
                >
                    <i
                        className={`fa-solid ${
                            isLightTheme ? "fa-moon" : "fa-sun"
                        }`}
                        aria-hidden="true"
                    ></i>
                </button>

                <a
                    href="#contact"
                    className="lt"
                    onClick={handleNavClick}
                >
                    <div>Let's talk</div>
                </a>
            </div>
        </div>
    );
}

export default Navbar;