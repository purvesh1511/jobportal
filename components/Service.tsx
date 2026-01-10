"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ServiceData {
    id: number;
    service_image: string;
    service_title: string;
    service_url: string;
}

export default function Service() {
    const [services, setServices] = useState<ServiceData[]>([]);

    useEffect(() => {
        fetch("/api/service")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            {/* <!-- Service Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp w-max-600" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                        <h1 className="display-6 mb-4">We Focuse On Making The Best In All Sectors</h1>
                    </div>
                    <div className="row g-4">
                        {services.map((service) => (
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={service.id}>
                            <a className="service-item d-block rounded text-center h-100 p-4" href={service.service_url}>
                                <img className="img-fluid rounded mb-4" src={service.service_image} alt={service.service_title} />
                                    <h4 className="mb-0">{service.service_title}</h4>
                            </a>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}
        </>
    );
}