"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState<boolean>(false); // Button loading state

  // Validation function
  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject";
    if (!formData.message.trim()) newErrors.message = "Please enter a message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contactform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
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

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Toast container */}
        
        <div className="text-center mx-auto mb-5 w-max-600">
          <h6 className="section-title bg-white text-primary px-3">Contact Us</h6>
          <h1 className="display-6 mb-4">
            If You Have Any Query, Please Feel Free Contact Us
          </h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-3">

                {/* Name */}
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label>Your Name</label>
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label>Your Email</label>
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>

                {/* Subject */}
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="subject"
                      className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <label>Subject</label>
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>
                </div>

                {/* Message */}
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      name="message"
                      className={`form-control ${errors.message ? "is-invalid" : ""}`}
                      style={{ height: "200px" }}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <label>Message</label>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                </div>


                {/* Button */}
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill py-3 px-5"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
