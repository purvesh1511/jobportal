"use client";

import Nav from "@/components/Nav";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ContactData {
    address: string;
    phone: string;
    email: string;
    companyName: string;
    designer: string;
    openingHours: string;
    socials: {
        twitter: string;
        facebook: string;
        youtube: string;
        linkedin: string;
    };
}

export default function Header() {
    const [contact, setContact] = useState<ContactData | null>(null);

    useEffect(() => {
        fetch("/api/contact")
        .then((res) => res.json())
        .then((data) => setContact(data))
        .catch((err) => console.error(err));
    }, []);

    if (!contact) return null;

    return (
        <div>
            <div className="container-fluid bg-light px-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-6 px-5 text-start">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link className="small text-secondary" href="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link className="small text-secondary" href="/career">Career</Link></li>
                            <li className="breadcrumb-item"><Link className="small text-secondary" href="/terms-and-conditions">Terms</Link></li>
                            <li className="breadcrumb-item"><Link className="small text-secondary" href="/privacy">Privacy</Link></li>
                        </ol>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <small>Follow us:</small>
                        <div className="h-100 d-inline-flex align-items-center">
                            <Link className="btn-square text-primary border-end rounded-0" href={contact.socials.facebook} target="_blank"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn-square text-primary border-end rounded-0" href={contact.socials.twitter} target="_blank"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn-square text-primary border-end rounded-0" href={contact.socials.linkedin} target="_blank"><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn-square text-primary border-end rounded-0" href={contact.socials.youtube} target="_blank"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-4 px-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="row align-items-center top-bar">
                    <div className="col-lg-4 col-md-12 text-center text-lg-start">
                        <Link href="/" className="navbar-brand m-0 p-0">
                            <h1 className="fw-bold text-primary m-0"><i className="fa fa-laptop-code me-3"></i>{contact.companyName}</h1>
                        </Link>
                    </div>
                    <div className="col-lg-8 col-md-7 d-none d-lg-block">
                        <div className="row">
                            <div className="col-4">
                                <div className="d-flex align-items-center justify-content-end">
                                    <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                                        <i className="far fa-clock text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <p className="mb-2">Opening Hour</p>
                                        <h6 className="mb-0">{contact.openingHours}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="d-flex align-items-center justify-content-end">
                                    <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                                        <i className="fa fa-phone text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <p className="mb-2">Call Us</p>
                                        <h6 className="mb-0">{contact.phone}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="d-flex align-items-center justify-content-end">
                                    <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                                        <i className="far fa-envelope text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <p className="mb-2">Email Us</p>
                                        <h6 className="mb-0">{contact.email}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Nav />
        </div>
    );
}   