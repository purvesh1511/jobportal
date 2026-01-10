"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
  email: string;
}

export default function NewsletterForm() {
  const [formData, setFormData] = useState<FormData>({ email: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const err: Partial<FormData> = {};
    if (!formData.email.trim()) err.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = "Invalid email";
    setErrors(err);
    return Object.keys(err).length === 0;
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

      if (res.ok) {
        toast.success("Subscribed successfully!");
        setFormData({ email: "" });
      } else {
        toast.error("Subscription failed");
      }
    } catch {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-lg-3 col-md-6">
      <Toaster position="top-right" />
      <h5 className="text-light mb-4">Newsletter</h5>

      <form onSubmit={handleSubmit}>
        <div className="position-relative">
          <input
            className={`form-control bg-transparent ${errors.email ? "is-invalid" : ""}`}
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFormData({ email: e.target.value })
            }
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}

          <button className="btn btn-primary position-absolute top-0 end-0 mt-2 me-2" disabled={loading}>
            {loading ? "Sending..." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
}
