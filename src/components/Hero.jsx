import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const texts = ['Web Developer', 'UI/UX Designer', 'Problem Solver'];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const timer = setTimeout(() => {
            if (!isDeleting && currentCharIndex < texts[currentTextIndex].length) {
                setTypedText(texts[currentTextIndex].substring(0, currentCharIndex + 1));
                setCurrentCharIndex(currentCharIndex + 1);
            } else if (isDeleting && currentCharIndex > 0) {
                setTypedText(texts[currentTextIndex].substring(0, currentCharIndex - 1));
                setCurrentCharIndex(currentCharIndex - 1);
            } else if (!isDeleting && currentCharIndex === texts[currentTextIndex].length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentCharIndex === 0) {
                setIsDeleting(false);
                setCurrentTextIndex((currentTextIndex + 1) % texts.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentCharIndex, currentTextIndex, isDeleting]);

    const techIcons = [
        { icon: "mdi:react", label: "React" },
        { icon: "mdi:language-javascript", label: "JavaScript" },
        { icon: "mdi:language-html5", label: "HTML5" },
        { icon: "mdi:language-css3", label: "CSS3" },
        { icon: "mdi:bootstrap", label: "Bootstrap" },
        { icon: "mdi:nodejs", label: "Node.js" }
    ];

    return (
        <section className="heros" id="heros">
            <div className="background-hi">
                <svg viewBox="0 0 100 100" className="hi-svg">
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                        Hi!
                    </text>
                </svg>
            </div>
            <div className="container">
                <div className={`main-banner ${isVisible ? 'fade-in' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="hero-content">
                                <h1 className="display-6 fw-bolder theme-secondary mb-3">I am Vrushank</h1>
                                <div className="typing-container mb-4">
                                    <span className="display-3 heading heading-1">
                                        <span className="typing-text">{typedText}</span>
                                        <span className="cursor">|</span>
                                    </span>
                                </div>
                                <p className="fs-5 lh-base mb-5">Creating Seamless, Stunning, and High-Performance Web Experiences</p>

                                <div className="stats-section">
                                    <div className="row g-3">
                                        {[
                                            { value: '2+', label: 'Years Learning' },
                                            { value: '10+', label: 'Projects' },
                                            { value: '5+', label: 'Technologies' },
                                            { value: '100%', label: 'Dedication' }
                                        ].map((stat, index) => (
                                            <div key={index} className="col-6 col-md-3">
                                                <div className="stat-item">
                                                    <h3 className="theme-primary">{stat.value}</h3>
                                                    <p className="text-muted">{stat.label}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="action-buttons">
                                    <a href="./Resume.pdf" download className="btn btn-outline-primary action-btn">
                                        Download Resume
                                        <Icon icon="material-symbols:download" width="24" height="24" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/vrushank-gotawala-160671363" target="_blank" rel="noopener noreferrer"
                                        className="btn btn-outline-primary action-btn">
                                        <Icon icon="jam:linkedin" width="24" height="24" />
                                    </a>
                                    <a href="https://github.com/Vrushank2808" target="_blank" rel="noopener noreferrer"
                                        className="btn btn-outline-primary action-btn">
                                        <Icon icon="mdi:github" width="24" height="24" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="hero-image">
                                <div className="floating-elements">
                                    {techIcons.map((tech, index) => (
                                        <div key={index} className={`floating-element element-${index + 1}`}>
                                            <Icon icon={tech.icon} width="40" height="40" className="theme-primary" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 