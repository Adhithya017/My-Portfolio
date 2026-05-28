"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ExternalLink,
  Send,
  Copy,
  Check,
} from "lucide-react";

interface ContactInfoEntry {
  icon: typeof Mail;
  label: string;
  value: string;
  copyValue: string;
  href: string;
}

const contactInfo: ContactInfoEntry[] = [
  {
    icon: Mail,
    label: "Email",
    value: "adithyaacharya054@gmail.com",
    copyValue: "adithyaacharya054@gmail.com",
    href: "mailto:adithyaacharya054@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 74833 84532",
    copyValue: "+917483384532",
    href: "tel:+917483384532",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/adithyaacharya-",
    copyValue: "https://linkedin.com/in/adithyaacharya-",
    href: "https://linkedin.com/in/adithyaacharya-",
  },
  {
    icon: ExternalLink,
    label: "GitHub",
    value: "github.com/Adhithya017",
    copyValue: "https://github.com/Adhithya017",
    href: "https://github.com/Adhithya017",
  },
];

function ContactInfoCard({ entry }: { entry: ContactInfoEntry }) {
  const [copied, setCopied] = useState(false);
  const Icon = entry.icon;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(entry.copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: do nothing
    }
  };

  return (
    <div className="glass-card p-5 flex items-center gap-4 group">
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: "rgba(0, 240, 255, 0.08)",
          border: "1px solid rgba(0, 240, 255, 0.15)",
        }}
      >
        <Icon size={22} style={{ color: "var(--accent-cyan)" }} />
      </div>

      {/* Label and value */}
      <div className="flex-1 min-w-0">
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-0.5"
          style={{ color: "var(--text-muted)" }}
        >
          {entry.label}
        </p>
        <a
          href={entry.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium truncate block hover:underline"
          style={{ color: "var(--text-primary)" }}
        >
          {entry.value}
        </a>
      </div>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
        style={{
          background: copied ? "rgba(0, 240, 255, 0.15)" : "rgba(255, 255, 255, 0.05)",
          border: `1px solid ${copied ? "rgba(0, 240, 255, 0.3)" : "rgba(255, 255, 255, 0.08)"}`,
        }}
        aria-label={`Copy ${entry.label}`}
      >
        {copied ? (
          <Check size={16} style={{ color: "var(--accent-cyan)" }} />
        ) : (
          <Copy size={16} style={{ color: "var(--text-muted)" }} />
        )}
      </button>
    </div>
  );
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.open(
      `mailto:adithyaacharya054@gmail.com?subject=${subject}&body=${body}`,
      "_self"
    );
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-heading gradient-text">
            Let&apos;s Build Something Together
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="neon-input"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="neon-input"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="neon-input resize-none"
                />
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary shimmer self-start">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {contactInfo.map((entry) => (
              <ContactInfoCard key={entry.label} entry={entry} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
