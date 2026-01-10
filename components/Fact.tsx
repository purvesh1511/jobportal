export default function Fact() {
    return (
        <>
            {/* <!-- Facts Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
                                <h5 className="mb-3">Years Experience</h5>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">1234</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-users-cog fa-4x text-primary mb-4"></i>
                                <h5 className="mb-3">Team Members</h5>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">4555</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-users fa-4x text-primary mb-4"></i>
                                <h5 className="mb-3">Satisfied Clients</h5>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">658</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-check fa-4x text-primary mb-4"></i>
                                <h5 className="mb-3">Projects Done</h5>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">234</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Facts End --> */}
        </>
    );
}