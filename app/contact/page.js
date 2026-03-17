"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSuccess("");
      setError("Semua field wajib diisi.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setSuccess("");
      setError("Format email tidak valid.");
      return;
    }

    setError("");
    setSuccess("Pesan berhasil dikirim.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="container py-5">
      <section className="row justify-content-center" aria-labelledby="contact-title">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm form-card">
            <div className="card-body p-4">
              <h1 id="contact-title" className="h3 mb-2">
                Contact Me
              </h1>
              <p className="text-secondary">Silakan kirim pesan untuk kolaborasi atau diskusi project.</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nama lengkap"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan kamu di sini"
                  />
                </div>

                {error && <p className="text-danger mb-3">{error}</p>}
                {success && <p className="text-success mb-3">{success}</p>}

                <button className="btn btn-primary w-100" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
