import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import './BackToTop.css'; 

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`}>
            <button
                className="btn btn-outline-primary"
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                <Icon icon="bytesize:arrow-top" width="24" height="24" className="theme-primary" />
            </button>
        </div>
    );
};

export default BackToTop;
