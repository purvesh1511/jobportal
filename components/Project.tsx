"use client";
import { useEffect, useState } from "react";

interface ProjectData {
    id: number;
    img: string;
    title: string;
    desc: string;
}

export default function Project() {
    const [projects, setProjects] = useState<ProjectData[]>([]);

    useEffect(() => {
        // Fetch project data from API
        fetch("/api/project")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error fetching projects:", err));
    }, []);

    if (projects.length === 0) {
        return null; // or a loading spinner
    }

    // Split into slides of 3
    const slides = [];
    for (let i = 0; i < projects.length; i += 3) {
        slides.push(projects.slice(i, i + 3));
    }

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" >
                    <h6 className="section-title bg-white text-center text-primary px-3">
                        Our Projects
                    </h6>
                    <h1 className="display-6 mb-4">
                        Learn More About Our Complete Projects
                    </h1>
                </div>

                <div
                    id="projectCarousel"
                    className="carousel project-carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {slides.map((group, slideIndex) => (
                            <div
                                key={slideIndex}
                                className={`carousel-item ${slideIndex === 0 ? "active" : ""
                                    }`}
                            >
                                <div className="row g-4 justify-content-center">
                                    {group.map((project) => (
                                        <div
                                            key={project.id}
                                            className="col-lg-4 col-md-6"
                                        >
                                            <div className="project-item border rounded h-100 p-4">
                                                <div className="position-relative mb-4">
                                                    <img
                                                        className="img-fluid rounded"
                                                        src={project.img}
                                                        alt={project.title}
                                                    />
                                                    <a href={project.img}>
                                                        <i className="fa fa-eye fa-2x"></i>
                                                    </a>
                                                </div>
                                                <h6>{project.title}</h6>
                                                <span>{project.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="owl-dots">
                        <button
                            className="owl-dot carousel-control-prev"
                            type="button"
                            data-bs-target="#projectCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon"></span>
                        </button>

                        <button
                            className="owl-dot carousel-control-next"
                            type="button"
                            data-bs-target="#projectCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
