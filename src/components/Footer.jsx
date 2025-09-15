import { Icon } from '@iconify/react';
import './Footer.css';

const Footer = () => {
    const emailAddress = 'vrushankgotawala@gmail.com';

    const handleEmailClick = async (e) => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone/i.test(navigator.userAgent);
        if (isMobile) return;
        e.preventDefault();
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(emailAddress);
            }
        } catch {
            void 0;
        }
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className="footer bg-off-white" id="contact">
            <div className="container">
                <div className="row gy-4 align-items-start">
                    <div className="col-12 col-md-6">
                        <h2 className="h4 theme-secondary mb-3">Let's connect</h2>
                        <p className="mb-4">I'm open to freelance work, internships, and collaboration.</p>

                        <div className="d-flex flex-column gap-2 contact-list">
                            <a className="contact-item" href={`mailto:${emailAddress}`} onClick={handleEmailClick}>
                                <Icon icon="mdi:email-outline" width="22" height="22" />
                                <span>{emailAddress}</span>
                            </a>
                            <a className="contact-item" href="tel:+919601294940">
                                <Icon icon="mdi:phone-outline" width="22" height="22" />
                                <span>+91 96012 94940</span>
                            </a>
                            <div className="contact-item">
                                <Icon icon="mdi:map-marker-outline" width="22" height="22" />
                                <span>Surat, Gujarat, India</span>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-2 mt-4 social-links">
                            <a
                                className="btn btn-outline-primary social-btn"
                                href="https://www.linkedin.com/in/vrushank-gotawala-160671363"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Icon icon="jam:linkedin" width="22" height="22" />
                            </a>
                            <a
                                className="btn btn-outline-primary social-btn"
                                href="https://github.com/Vrushank2808"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <Icon icon="mdi:github" width="22" height="22" />
                            </a>
                            <a
                                className="btn btn-outline-primary social-btn"
                                href={`mailto:${emailAddress}`}
                                onClick={handleEmailClick}
                                aria-label="Email"
                            >
                                <Icon icon="mdi:email-outline" width="22" height="22" />
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="footer-cta card p-4">
                            <h3 className="h5 mb-2">Have a project in mind?</h3>
                            <p className="mb-3">Send me a message and I'll get back to you soon.</p>
                            <a href={`mailto:${emailAddress}`} onClick={handleEmailClick} className="btn btn-outline-primary align-self-start">
                                Contact Me
                                <Icon icon="material-symbols:arrow-outward-rounded" width="20" height="20" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-5 footer-bottom">
                    <small className="text-muted">© {new Date().getFullYear()} Vrushank Gotawala</small>
                    <a className="text-decoration-none theme-primary" href="#heros">Back to top</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


