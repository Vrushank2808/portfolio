import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['services', 'works', 'resume', 'skills', 'testimonials'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (section) => {
        setIsMenuOpen(false);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header-area ${isScrolled ? 'header-sticky sticky-out' : ''}`}>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="mailto:vrushankgotawala@gmail.com">
                        <span className="theme-secondary heading-email fs-6 d-none d-md-inline-block">
                            vrushankgotawala@gmail.com
                        </span>
                    </a>
                    <button
                        className="navbar-toggler order-2"
                        type="button"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        <Icon icon="solar:hamburger-menu-outline" width="36" height="36" style={{ color: '#8750f7' }} />
                    </button>
                    <div className={`collapse navbar-collapse rounded-4 ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav m-0 ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item mx-2 pt-2 p-lg-0 position-relative">
                                <a
                                    className={`nav-link theme-secondary ${activeSection === 'services' ? 'active' : ''}`}
                                    href="#services"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick('services');
                                    }}
                                >
                                    Services
                                </a>
                            </li>
                            <li className="nav-item mx-2 pt-2 p-lg-0 position-relative">
                                <a
                                    className={`nav-link theme-secondary ${activeSection === 'works' ? 'active' : ''}`}
                                    href="#works"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick('works');
                                    }}
                                >
                                    Works
                                </a>
                            </li>
                            <li className="nav-item mx-2 pt-2 p-lg-0 position-relative">
                                <a
                                    className={`nav-link theme-secondary ${activeSection === 'resume' ? 'active' : ''}`}
                                    href="#resume"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick('resume');
                                    }}
                                >
                                    Resume
                                </a>
                            </li>
                            <li className="nav-item mx-2 pt-2 p-lg-0 position-relative">
                                <a
                                    className={`nav-link theme-secondary ${activeSection === 'skills' ? 'active' : ''}`}
                                    href="#skills"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick('skills');
                                    }}
                                >
                                    Skills
                                </a>
                            </li>
                            <li className="nav-item mx-2 pt-2 p-lg-0 position-relative">
                                <a
                                    className={`nav-link theme-secondary ${activeSection === 'testimonials' ? 'active' : ''}`}
                                    href="#testimonials"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick('testimonials');
                                    }}
                                >
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header; 