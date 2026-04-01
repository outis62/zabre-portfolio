"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const EMAILJS_SERVICE_ID         = "service_hz7l3lb";
const EMAILJS_TEMPLATE_ID        = "template_1qjy16r";
const EMAILJS_AUTOREPLY_TEMPLATE = "template_08pdeb4"; 
const EMAILJS_PUBLIC_KEY         = "m4qmPTBwNORsd5IXJ";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+226) 74352563 / 62694878" },
  { icon: <FaEnvelope />, title: "Email", description: "zabreboureima236@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Karpala, Ouagadougou, Burkina Faso" },
];

const INITIAL_FORM = {
  firstname: "", lastname: "", email: "", phone: "", service: "", message: "",
};

const services = [
  { value: "Web Development", label: "Web Development" },
  { value: "Network System Engineer", label: "Network System Engineer" },
  { value: "Digital Marketing", label: "Digital Marketing" },
];

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstname || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await Promise.all([
        // 1. Notification → toi
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_firstname: form.firstname,
            from_lastname:  form.lastname,
            from_email:     form.email,
            from_phone:     form.phone,
            service:        form.service || "Not specified",
            message:        form.message,
            reply_to:       form.email,
          },
          EMAILJS_PUBLIC_KEY
        ),
        // 2. Auto-reply → visiteur
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTOREPLY_TEMPLATE,
          {
            from_firstname: form.firstname,
            from_email:     form.email,
          },
          EMAILJS_PUBLIC_KEY
        ),
      ]);

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .contact-root {
          --accent: #e8c97e;
          --accent-dim: rgba(232, 201, 126, 0.12);
          --accent-border: rgba(232, 201, 126, 0.3);
          --surface: #1c1c20;
          --surface-2: #232328;
          --surface-3: #2a2a30;
          --border: rgba(255,255,255,0.07);
          --text: #f0ede8;
          --text-muted: rgba(240, 237, 232, 0.45);
          --text-dim: rgba(240, 237, 232, 0.65);
          --success: #6fcf97;
          --error: #eb5757;
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
          background: var(--surface);
          min-height: 100vh;
          padding: 4rem 1.5rem;
        }

        .contact-inner { max-width: 1100px; margin: 0 auto; }
        .contact-header { margin-bottom: 3.5rem; }

        .contact-eyebrow {
          font-size: 0.7rem; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem;
        }

        .contact-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.1; font-weight: 400; color: var(--text); margin: 0 0 1rem;
        }

        .contact-title em { font-style: italic; color: var(--accent); }

        .contact-desc {
          font-size: 0.95rem; color: var(--text-muted);
          max-width: 480px; line-height: 1.7; font-weight: 300;
        }

        .contact-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; }

        @media (min-width: 900px) {
          .contact-grid { grid-template-columns: 1fr 360px; gap: 4rem; align-items: start; }
        }

        .contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

        @media (max-width: 540px) { .field-row { grid-template-columns: 1fr; } }

        .field-wrap { display: flex; flex-direction: column; gap: 0.4rem; }

        .field-label {
          font-size: 0.72rem; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--text-muted); transition: color 0.2s;
        }

        .field-wrap.is-focused .field-label { color: var(--accent); }

        .field-input {
          background: var(--surface-2); border: 1px solid var(--border);
          border-radius: 8px; padding: 0.75rem 1rem; color: var(--text);
          font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 400;
          outline: none; transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          width: 100%; box-sizing: border-box;
        }

        .field-input::placeholder { color: var(--text-muted); }

        .field-input:focus {
          border-color: var(--accent-border);
          background: var(--surface-3);
          box-shadow: 0 0 0 3px var(--accent-dim);
        }

        .field-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 1rem center; cursor: pointer;
        }

        .field-select option { background: #2a2a30; color: var(--text); }
        .field-textarea { resize: none; height: 140px; line-height: 1.6; }

        .submit-row { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; }

        .submit-btn {
          display: inline-flex; align-items: center; gap: 0.6rem;
          background: var(--accent); color: #1c1c20;
          font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 0.85rem 1.75rem; border: none; border-radius: 8px;
          cursor: pointer; transition: opacity 0.2s, transform 0.15s;
        }

        .submit-btn:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
        .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }

        .submit-btn .arrow { font-size: 1rem; transition: transform 0.2s; display: inline-block; }
        .submit-btn:hover:not(:disabled) .arrow { transform: translateX(4px); }

        .status-msg { font-size: 0.85rem; font-weight: 400; }
        .status-success { color: var(--success); }
        .status-error   { color: var(--error); }

        .info-sidebar { display: flex; flex-direction: column; }
        .info-divider { height: 1px; background: var(--border); }
        .info-item { display: flex; align-items: flex-start; gap: 1.1rem; padding: 1.5rem 0; }

        .info-icon-wrap {
          width: 40px; height: 40px; border-radius: 8px;
          background: var(--accent-dim); border: 1px solid var(--accent-border);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent); font-size: 0.9rem; flex-shrink: 0; margin-top: 2px;
        }

        .info-label {
          font-size: 0.7rem; font-weight: 500; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.3rem;
        }

        .info-value { font-size: 0.92rem; color: var(--text-dim); font-weight: 300; line-height: 1.5; }

        .availability {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(111, 207, 151, 0.08); border: 1px solid rgba(111, 207, 151, 0.2);
          border-radius: 100px; padding: 0.4rem 0.9rem;
          font-size: 0.75rem; color: var(--success); font-weight: 500;
          margin-top: 2rem; width: fit-content;
        }

        .availability-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--success); animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      <motion.section
        className="contact-root"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="contact-inner">

          <motion.div className="contact-header" variants={itemVariants}>
            <p className="contact-eyebrow">Get in touch</p>
            <h1 className="contact-title">
              Let&apos;s build something<br /><em>remarkable</em>
            </h1>
            <p className="contact-desc">
              Whether you need a powerful website, network solutions, or a sharp digital strategy — I&apos;m ready to collaborate and make it happen.
            </p>
          </motion.div>

          <div className="contact-grid">

            <motion.form className="contact-form" onSubmit={handleSubmit} variants={itemVariants}>
              <div className="field-row">
                {[
                  { name: "firstname", placeholder: "First name", type: "text", required: true },
                  { name: "lastname",  placeholder: "Last name",  type: "text" },
                ].map(({ name, placeholder, type, required }) => (
                  <div key={name} className={`field-wrap${focused === name ? " is-focused" : ""}`}>
                    <label className="field-label">{placeholder}</label>
                    <input
                      className="field-input" type={type} name={name}
                      placeholder={placeholder} value={form[name]}
                      onChange={handleChange} onFocus={() => setFocused(name)}
                      onBlur={() => setFocused(null)} required={required}
                    />
                  </div>
                ))}
              </div>

              <div className="field-row">
                {[
                  { name: "email", placeholder: "Email address", type: "email", required: true },
                  { name: "phone", placeholder: "Phone number",  type: "tel" },
                ].map(({ name, placeholder, type, required }) => (
                  <div key={name} className={`field-wrap${focused === name ? " is-focused" : ""}`}>
                    <label className="field-label">{placeholder}</label>
                    <input
                      className="field-input" type={type} name={name}
                      placeholder={placeholder} value={form[name]}
                      onChange={handleChange} onFocus={() => setFocused(name)}
                      onBlur={() => setFocused(null)} required={required}
                    />
                  </div>
                ))}
              </div>

              <div className={`field-wrap${focused === "service" ? " is-focused" : ""}`}>
                <label className="field-label">Service</label>
                <select
                  className="field-input field-select" name="service" value={form.service}
                  onChange={handleChange} onFocus={() => setFocused("service")}
                  onBlur={() => setFocused(null)}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>

              <div className={`field-wrap${focused === "message" ? " is-focused" : ""}`}>
                <label className="field-label">Message</label>
                <textarea
                  className="field-input field-textarea" name="message"
                  placeholder="Tell me about your project…" value={form.message}
                  onChange={handleChange} onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)} required
                />
              </div>

              <div className="submit-row">
                <button type="submit" className="submit-btn" disabled={status === "sending"}>
                  {status === "sending"
                    ? "Sending…"
                    : <> Send message <span className="arrow">→</span> </>
                  }
                </button>
                {status === "success" && (
                  <span className="status-msg status-success">✓ Message sent successfully!</span>
                )}
                {status === "error" && (
                  <span className="status-msg status-error">✗ Failed to send. Please try again.</span>
                )}
              </div>
            </motion.form>

            <motion.div className="info-sidebar" variants={itemVariants}>
              <div className="info-divider" />
              {info.map((item, i) => (
                <div key={i}>
                  <div className="info-item">
                    <div className="info-icon-wrap">{item.icon}</div>
                    <div>
                      <p className="info-label">{item.title}</p>
                      <p className="info-value">{item.description}</p>
                    </div>
                  </div>
                  <div className="info-divider" />
                </div>
              ))}
              <div className="availability">
                <span className="availability-dot" />
                Available for new projects
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>
    </>
  );
}