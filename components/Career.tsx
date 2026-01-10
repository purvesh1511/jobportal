export default function Career() {
    const activeJobs = [
        {
            title: "Frontend Developer",
            experience: "2–4 Years",
            skills: "React, Next.js, Bootstrap, Tailwind CSS",
            delay: "0.1s"
        },
        {
            title: "Backend Developer",
            experience: "3–5 Years",
            skills: "Laravel, MySQL, REST APIs",
            delay: "0.3s"
        },
        {
            title: "UI/UX Designer",
            experience: "1–3 Years",
            skills: "Figma, Adobe XD, User Research",
            delay: "0.5s"
        },
        {
            title: "Backend Developer",
            experience: "3–5 Years",
            skills: "Laravel, MySQL, REST APIs",
            delay: "0.3s"
        },
        {
            title: "UI/UX Designer",
            experience: "1–3 Years",
            skills: "Figma, Adobe XD, User Research",
            delay: "0.5s"
        },
        {
            title: "Backend Developer",
            experience: "3–5 Years",
            skills: "Laravel, MySQL, REST APIs",
            delay: "0.3s"
        },
        {
            title: "UI/UX Designer",
            experience: "1–3 Years",
            skills: "Figma, Adobe XD, User Research",
            delay: "0.5s"
        },
        {
            title: "Backend Developer",
            experience: "3–5 Years",
            skills: "Laravel, MySQL, REST APIs",
            delay: "0.3s"
        },
        {
            title: "UI/UX Designer",
            experience: "1–3 Years",
            skills: "Figma, Adobe XD, User Research",
            delay: "0.5s"
        }
    ];


    return (
        <>
            {/* <!-- Career Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp w-max-600" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Active Job</h6>
                        <h1 className="display-6 mb-4">Apply For A Job To Join Our Team</h1>
                    </div>
                    <div className="container-xxl py-5">
                        <div className="container">
                            <div className="row g-4">

                                {/* Job Card */}
                                {activeJobs.map((job, index) => (
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={job.delay} key={index}>
                                        <div className="card h-100 border-0 bg-light shadow-sm p-4">
                                            <h5>{job.title}</h5>
                                            <p className="text-muted mb-2">Experience: {job.experience}</p>
                                            <p className="small">
                                                {job.skills}
                                            </p>
                                            <a href="#" className="btn btn-primary mt-auto">
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                ))}
                                {/* End of Job Card */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}