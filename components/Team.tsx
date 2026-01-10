"use client";
import { useState, useEffect } from "react";

export default function Team({ teamSize }: { teamSize?: number }) {
    const [teamMembers, setTeamMembers] = useState([]);
    useEffect(() => {
        fetch('/api/team')
            .then(response => response.json())
            .then(data => setTeamMembers(data))
            .catch(error => console.error('Error fetching team data:', error));
    }, []);

    if (teamMembers.length === 0) {
        return null; // or a loading spinner
    }

    const displayedTeamMembers = teamSize ? teamMembers.slice(0, teamSize) : teamMembers;

    return (
        <>
            {/* <!-- Team Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp w-max-600" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Our Team</h6>
                        <h1 className="display-6 mb-4">We Are A Creative Team For Your Dream Project</h1>
                    </div>
                    <div className="row g-4">
                        {displayedTeamMembers.map((member, index) => (
                        <div key={index}  className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item text-center p-4">
                                <img className="img-fluid border rounded-circle w-75 p-2 mb-4" src={member.image} alt="" />
                                <div className="team-text">
                                    <div className="team-title">
                                        <h5>{member.name}</h5>
                                        <span>{member.designation}</span>
                                    </div>
                                    <div className="team-social">
                                        <a className="btn btn-square btn-primary rounded-circle" href={member.facebook}><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary rounded-circle" href={member.twitter}><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary rounded-circle" href={member.instagram}><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}
        </>
    );
}