import './Resume.css';

const Resume = () => {
    const education = [
        {
            id: 1,
            degree: 'Bachelor of Computer Application',
            institution: 'Vidhyadeep University',
            year: '2023 - Present',
            description: 'Currently pursuing a Bachelor of Computer Application from Vidhyadeep University, focused on web development and computer applications.'
        }
    ];

    const experience = [
        {
            id: 1,
            role: 'Web Development Learner',
            company: 'Red & White Multimedia',
            year: '2023 - 2025',
            description: 'Currently learning and building projects in web development, focusing on React, Node.js, and full-stack development. Building personal projects to enhance skills and understanding of modern web technologies.'
        }
    ];

    return (
        <section className="resume my-5 pt-5" id="education">
            <div className="container pt-5">
                <div className="m-auto text-center">
                    <h2 className="display-6 heading heading-1">My Journey</h2>
                    <p>My educational background and learning path.</p>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">
                                <h3 className="card-title h5 mb-4">Education</h3>
                                {education.map((edu) => (
                                    <div key={edu.id} className="mb-4">
                                        <h4 className="h6 mb-1">{edu.degree}</h4>
                                        <p className="mb-1 text-muted">{edu.institution}</p>
                                        <p className="mb-1 text-muted">{edu.year}</p>
                                        <p className="mb-0">{edu.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">
                                <h3 className="card-title h5 mb-4">Learning Journey</h3>
                                {experience.map((exp) => (
                                    <div key={exp.id} className="mb-4">
                                        <h4 className="h6 mb-1">{exp.role}</h4>
                                        <p className="mb-1 text-muted">{exp.company}</p>
                                        <p className="mb-1 text-muted">{exp.year}</p>
                                        <p className="mb-0">{exp.description}</p>
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