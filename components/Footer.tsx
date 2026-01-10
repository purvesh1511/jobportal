"use client";

import Link from "next/link";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
    email: string;
}

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

export default function Footer() {
    const [contact, setContact] = useState<ContactData | null>(null);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [loading, setLoading] = useState<boolean>(false); // Button loading state

    const [formData, setFormData] = useState<FormData>({
        email: "",
    });


    const validate = () => {
        const newErrors: Partial<FormData> = {};
        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);

        try {
            const res = await fetch("/api/subscription", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Message sent successfully!");
                setFormData({ email: "" });
                setErrors({});
            } else {
                toast.error(data.error || "Something went wrong.");
            }
        } catch (err) {
            toast.error("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetch("/api/contact")
            .then((res) => res.json())
            .then((data) => setContact(data))
            .catch((err) => console.error(err));
    }, []);

    if (!contact) return null;

    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-body footer pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Address</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{contact?.address}</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>{contact?.phone}</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>{contact?.email}</p>
                            <div className="d-flex pt-2">
                                <Link className="btn btn-square btn-outline-secondary rounded-circle me-1" href={contact?.socials?.twitter} target="_blank"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-outline-secondary rounded-circle me-1" href={contact?.socials?.facebook} target="_blank"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square btn-outline-secondary rounded-circle me-1" href={contact?.socials?.youtube} target="_blank"><i className="fab fa-youtube"></i></Link>
                                <Link className="btn btn-square btn-outline-secondary rounded-circle me-0" href={contact?.socials?.linkedin} target="_blank"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <Link className="btn btn-link" href="/about">About Us</Link>
                            <Link className="btn btn-link" href="/contact">Contact Us</Link>
                            <Link className="btn btn-link" href="/services">Our Services</Link>
                            <Link className="btn btn-link" href="/terms-and-conditions">Terms & Condition</Link>
                            <Link className="btn btn-link" href="/support">Support</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Gallery</h5>
                            <div className="row g-2">
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="img/project-1.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="img/project-2.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="img/project-3.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="img/project-4.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="img/project-5.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="img/project-6.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="position-relative mx-auto w-max-400">
                                    <input 
                                    className={`form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5 ${errors.email ? "is-invalid" : ""}`}
                                    name="email"
                                    id="email" 
                                    type="text" 
                                    placeholder="Your email" 
                                    value={formData.email}
                                    onChange={handleChange} />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    <button
                                        type="submit"
                                        className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                                        disabled={loading}
                                    >
                                        {loading ? "Sending..." : "SignUp"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a href="#">{contact?.companyName}</a>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                Designed By <a href="/">{contact?.designer}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </>
    );
}