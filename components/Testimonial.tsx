"use client";
import { useState, useEffect } from "react";


interface TestimonialData {
    id: number;
    name: string;
    profession: string;
    img: string;
    text: string;
}

export default function Testimonial() {
    const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
    useEffect(() => {
        fetch('/api/testimonial')
            .then(response => response.json())
            .then(data => setTestimonials(data))
            .catch(error => console.error('Error fetching testimonials:', error));
    }, []);

    if (testimonials.length === 0) {
        return null; // or a loading spinner
    }

    // Split into slides of 3
    const slides = [];
    for (let i = 0; i < testimonials.length; i += 3) {
        slides.push(testimonials.slice(i, i + 3));
    }

    // Helper for position class
    const positionClass = (index: number) => {
        if (index === 0) return "left";
        if (index === 1) return "center";
        return "right";
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
                    <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                    <h1 className="display-6 mb-4">What Our Clients Say!</h1>
                </div>

                <div id="testimonialCarousel" className="carousel testimonial-carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {slides.map((group, slideIndex) => (
                            <div
                                key={slideIndex}
                                className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
                            >
                                <div className="row justify-content-center">
                                    {group.map((t, itemIndex) => (
                                        <div
                                            key={t.id}
                                            className={`col-lg-4 col-md-6 mb-3 testimonial-col ${positionClass(itemIndex)}`}
                                        >
                                            <div className="testimonial-item bg-light rounded p-4 h-100">
                                                <div className="d-flex align-items-center mb-4">
                                                    <img
                                                        className="flex-shrink-0 rounded-circle border p-1"
                                                        src={t.img}
                                                        alt={t.name}
                                                        width={60}
                                                        height={60}
                                                    />
                                                    <div className="ms-4">
                                                        <h5 className="mb-1">{t.name}</h5>
                                                        <span>{t.profession}</span>
                                                    </div>
                                                </div>
                                                <p className="mb-0">{t.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="owl-nav">
                        <div
                            className="owl-prev"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon"></span>
                        </div>

                        <div
                            className="owl-next"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
