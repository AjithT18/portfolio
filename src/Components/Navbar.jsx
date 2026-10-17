
import { useEffect, useState } from "react";
import "../style/Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition =
                window.scrollY + window.innerHeight * 0.35;

            let currentSection = "home";

            navItems.forEach(({ id }) => {
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

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("keydown", closeOnEscape);

        return () => {
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, []);

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar theme" id="navbar">
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
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="navLinks"
                onClick={() => setMenuOpen((previous) => !previous)}
            >
                <i
                    className={`fa-solid ${
                        menuOpen ? "fa-xmark" : "fa-bars"
                    }`}
                    aria-hidden="true"
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
                            <div className="under" />
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
                    <i className="fa-solid fa-moon" aria-hidden="true" />
                </button>

                <a
                    href="#contact"
                    className="lt"
                    onClick={handleNavClick}
                >
                    <div>Let's talk</div>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
