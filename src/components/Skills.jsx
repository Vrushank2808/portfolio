import './Skills.css';

const Skills = () => {
    const skills = [
        {
            category: 'Frontend',
            items: [
                { name: 'React', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'HTML5', level: 90 },
                { name: 'CSS3', level: 85 },
                { name: 'Bootstrap', level: 80 }
            ]
        },
        {
            category: 'Backend',
            items: [
                { name: 'Node.js', level: 80 },
                { name: 'Express', level: 75 },
                { name: 'MongoDB', level: 70 },
                { name: 'RESTful APIs', level: 80 }
            ]
        },
        {
            category: 'Tools & Others',
            items: [
                { name: 'Git', level: 85 },
                { name: 'VS Code', level: 90 },
                { name: 'Postman', level: 70 }, 
                // { name: 'Figma', level: 70 }
            ]
        }
    ];

    return (
        <section className="skills my-5 pt-5 bg-off-white" id="skills">
            <div className="container pt-5">
                <div className="m-auto text-center">
                    <h2 className="display-6 heading heading-1">My Skills</h2>
                    <p>Here are the technical skills I've acquired throughout my learning journey.</p>
                </div>
                <div className="row mt-5">
                    {skills.map((category, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div className="card h-100 border-0 shadow-sm rounded-4">
                                <div className="card-body p-4">
                                    <h3 className="card-title h5 mb-4">{category.category}</h3>
                                    {category.items.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="mb-3">
                                            <div className="d-flex justify-content-between mb-1">
                                                <span>{skill.name}</span>
                                                <span>{skill.level}%</span>
                                            </div>
                                            <div className="progress" style={{ height: '8px' }}>
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style={{ width: `${skill.level}%` }}
                                                    aria-valuenow={skill.level}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 