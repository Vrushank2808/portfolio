import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Frontend Development',
            description: 'Creating responsive and interactive user interfaces using React, HTML, CSS, and JavaScript. Building modern web applications with a focus on user experience and performance.'
        },
        {
            id: 2,
            title: 'Backend Development',
            description: 'Developing robust server-side applications using Node.js, Express, and various databases. Implementing RESTful APIs and ensuring secure data handling.'
        },
        {
            id: 3,
            title: 'Full Stack Solutions',
            description: 'End-to-end web development solutions, from database design to frontend implementation. Creating scalable and maintainable applications that meet business requirements.'
        }
    ];

    return (
        <section className="services my-5 pt-5 bg-off-white" id="services">
            <div className="container pt-5">
                <div className="m-auto text-center">
                    <h2 className="display-6 heading heading-1">My Quality Services</h2>
                    <p>I provide comprehensive web development solutions that bring your ideas to life.</p>
                </div>
                <div className="services-list my-5 pb-5">
                    <ul className="list-unstyled pb-5">
                        {services.map((service) => (
                            <li
                                key={service.id}
                                className="d-flex align-items-center justify-content-between rounded-4 p-4 border-bottom hover-bg-gradiant-1 global-transition"
                            >
                                <div className="row w-100">
                                    <div className="col-lg-4">
                                        <div className="d-flex align-items-center theme-primary mb-2 mb-lg-0">
                                            <span className="fs-4 fw-bold global-transition">0{service.id}</span>
                                            <h3 className="fw-bold mb-0 d-inline ms-3 global-transition">{service.title}</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="mb-0">{service.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services; 