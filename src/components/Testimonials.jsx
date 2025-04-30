import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials my-5 pt-5 bg-off-white" id="testimonials">
            <div className="container pt-5">
                <div className="m-auto text-center">
                    <h2 className="display-6 heading heading-1">Testimonials</h2>
                    <p>What people say about my work.</p>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-5 text-center">
                                <h3 className="h4 mb-4">Testimonials Coming Soon</h3>
                                <p className="text-muted mb-0">
                                    Client reviews and testimonials will be added here soon. Stay tuned!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 