import { Icon } from '@iconify/react';
import './Works.css';

const Works = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website built with React and Bootstrap, showcasing my skills and projects.",
            techStack: ["React", "Bootstrap", "CSS"],
            link: "https://github.com/Vrushank2808/portfolio",
        },
        {
            title: "Learning Projects",
            description: "Various small projects built while learning web development, including todo apps, weather apps, and more.",
            techStack: ["React", "Node.js", "JavaScript"],
            link: "https://github.com/Vrushank2808",
        },
        {
            title: "Coming Soon",
            description: "More projects will be added as I continue my learning journey in web development.",
            techStack: ["React", "Node.js", "MongoDB"],
            link: "https://github.com/Vrushank2808",
        }
    ];

    return (
        <section className="works my-5 pt-5" id="works">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-6 heading heading-1">My Learning Projects</h2>
                    <p>Projects I've built while learning web development.</p>
                </div>

                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body d-flex flex-column">
                                    <h3 className="h5 card-title mb-3">{project.title}</h3>
                                    <p className="card-text mb-4">{project.description}</p>
                                    <div className="tech-stack mt-auto mb-4">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="badge bg-primary me-2">{tech}</span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-primary rounded-pill"
                                    >
                                        View on GitHub
                                        <Icon icon="mdi:github" className="ms-2" width="20" height="20" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works; 