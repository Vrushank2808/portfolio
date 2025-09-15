import './Resume.css';

const Resume = () => {
    const summary = `Full-stack developer focused on building fast, accessible React frontends and secure, scalable Node.js/Express backends. I ship end-to-end features with clean UI, robust APIs, and strong attention to performance and UX.`;

    const experience = [
        {
            id: 1,
            role: 'Full-Stack Developer (Projects & Training)',
            company: 'Self-driven + Red & White Multimedia',
            year: '2023 – 2025',
            bullets: [
                'Built 10+ responsive projects with React, Bootstrap, and modern CSS, improving Lighthouse performance to 90+ on average.',
                'Implemented reusable components, routing, and state patterns to reduce duplicate UI code by ~40%.',
                'Designed REST APIs with Express and MongoDB (Mongoose), added JWT auth and role-based access for multi-user apps.',
            ],
        },
    ];

    const projects = [
        {
            id: 1,
            name: 'Personal Portfolio (this site)',
            stack: ['React', 'Bootstrap', 'Iconify'],
            outcome: 'Modularized sections and animations; improved CLS and accessibility scores; added resume and certificate CTAs.',
            demo: '#',
            repo: 'https://github.com/Vrushank2808/portfolio'
        },
        {
            id: 2,
            name: 'HMS Frontend — Hostel Management System',
            stack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Context API'],
            outcome: 'Role-based dashboards (Admin/Warden/Security/Student), OTP auth flow, responsive UI, and notifications.',
            repo: 'https://github.com/Vrushank2808/HMS-frontend'
        },
        {
            id: 3,
            name: 'HMS Backend — Hostel Management System',
            stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer'],
            outcome: 'REST API with OTP-based auth, RBAC, password reset, and room/complaint management with secure JWT sessions.',
            repo: 'https://github.com/Vrushank2808/HMS-backend'
        },
    ];

    const skills = {
        languages: ['JavaScript (ES6+)', 'HTML5', 'CSS3'],
        frontend: ['React', 'Bootstrap', 'Tailwind CSS', 'Responsive Design', 'Accessibility'],
        backend: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
        tools: ['Git & GitHub', 'Postman', 'Iconify', 'VS Code'],
    };

    const education = [
        {
            id: 1,
            degree: 'Bachelor of Computer Application',
            institution: 'Vidhyadeep University',
            year: '2023 – Present',
            description: 'Coursework focused on web development, data structures, and software fundamentals.',
        },
    ];

    const certifications = [
        {
            id: 1,
            title: 'Web Development Certificate',
            org: 'Red & White Multimedia',
            year: '2025',
            link: 'https://drive.google.com/file/d/1xjUBKj543mz3bnl-chF3JCP_29WGF1cc/view?usp=sharing',
        },
    ];

    return (
        <section className="resume my-5 pt-5" id="resume">
            <div className="container pt-5">
                <div className="m-auto text-center">
                    <h2 className="display-6 heading heading-1">Resume</h2>
                    <p>Results-focused front-end developer with hands-on project experience.</p>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">
                                <h3 className="card-title h5 mb-3">Summary</h3>
                                <p className="mb-0">{summary}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">
                                <h3 className="card-title h5 mb-4">Experience</h3>
                                {experience.map((exp) => (
                                    <div key={exp.id} className="mb-4">
                                        <h4 className="h6 mb-1">{exp.role}</h4>
                                        <p className="mb-1 text-muted">{exp.company}</p>
                                        <p className="mb-2 text-muted">{exp.year}</p>
                                        <ul className="mb-0 ps-3">
                                            {exp.bullets.map((b, i) => (
                                                <li key={i}>{b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">
                                <h3 className="card-title h5 mb-4">Key Projects</h3>
                                {projects.map((p) => (
                                    <div key={p.id} className="mb-4">
                                        <h4 className="h6 mb-1">{p.name}</h4>
                                        <p className="mb-1 text-muted">Stack: {p.stack.join(', ')}</p>
                                        <p className="mb-2">{p.outcome}</p>
                                        <div className="d-flex gap-2 flex-wrap">
                                            {p.repo && (
                                                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">View Code</a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">
                                <h3 className="card-title h5 mb-3">Skills</h3>
                                <div className="mb-3">
                                    <h4 className="h6 mb-1">Languages</h4>
                                    <p className="mb-0">{skills.languages.join(', ')}</p>
                                </div>
                                <div className="mb-3">
                                    <h4 className="h6 mb-1">Frontend</h4>
                                    <p className="mb-0">{skills.frontend.join(', ')}</p>
                                </div>
                                <div className="mb-3">
                                    <h4 className="h6 mb-1">Backend</h4>
                                    <p className="mb-0">{skills.backend.join(', ')}</p>
                                </div>
                                <div>
                                    <h4 className="h6 mb-1">Tools</h4>
                                    <p className="mb-0">{skills.tools.join(', ')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">
                                <h3 className="card-title h5 mb-3">Education</h3>
                                {education.map((edu) => (
                                    <div key={edu.id} className="mb-3">
                                        <h4 className="h6 mb-1">{edu.degree}</h4>
                                        <p className="mb-1 text-muted">{edu.institution}</p>
                                        <p className="mb-0 text-muted">{edu.year}</p>
                                        <p className="mb-0">{edu.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">
                                <h3 className="card-title h5 mb-3">Certifications</h3>
                                {certifications.map((c) => (
                                    <div key={c.id} className="d-flex flex-wrap align-items-center justify-content-between mb-2">
                                        <div>
                                            <h4 className="h6 mb-0">{c.title}</h4>
                                            <p className="mb-0 text-muted">{c.org} • {c.year}</p>
                                        </div>
                                        <a href={c.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary mt-2 mt-md-0">View Certificate</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume; 