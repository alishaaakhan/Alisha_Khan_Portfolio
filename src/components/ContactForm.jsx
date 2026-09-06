import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, XCircle, Loader2 } from "lucide-react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const initialForm = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim() || form.subject.trim().length < 3) {
    errors.subject = "Please enter a subject (at least 3 characters).";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Please enter a message of at least 10 characters.";
  }
  if (form.message.trim().length > 3000) {
    errors.message = "Message is too long (max 3000 characters).";
  }
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return; // prevent duplicate submissions

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMessage(
        "Contact form isn't configured yet — add VITE_WEB3FORMS_ACCESS_KEY to your environment (see README)."
      );
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          from_name: "Portfolio Contact Form — Alisha Khan",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or contact me directly via email."
      );
    }
  };

  const isLoading = status === "loading";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass flex flex-col items-center justify-center rounded-3xl p-10 text-center"
      >
        <motion.div
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
        >
          <CheckCircle2 size={48} className="text-blue" />
        </motion.div>
        <h3 className="mt-5 font-display text-xl text-ink">Message Sent Successfully! 🎉</h3>
        <p className="mt-2 text-muted text-sm">
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="cursor-hover mt-6 rounded-full glass px-5 py-2.5 text-sm text-ink"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs mono-label text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-dim focus:border-blue/60 focus:outline-none disabled:opacity-50"
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-pink">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs mono-label text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-dim focus:border-blue/60 focus:outline-none disabled:opacity-50"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-pink">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs mono-label text-muted">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          disabled={isLoading}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-dim focus:border-blue/60 focus:outline-none disabled:opacity-50"
          placeholder="What's this about?"
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-pink">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs mono-label text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          disabled={isLoading}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-dim focus:border-blue/60 focus:outline-none disabled:opacity-50"
          placeholder="Tell me a bit about the opportunity or idea..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-pink">
            {errors.message}
          </p>
        )}
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-start gap-2 rounded-xl border border-pink/30 bg-pink/10 px-4 py-3 text-sm text-pink"
          >
            <XCircle size={16} className="mt-0.5 shrink-0" />
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={isLoading}
        className="cursor-hover inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet to-blue px-6 py-3.5 text-sm font-medium text-white transition-opacity disabled:opacity-60 sm:w-auto"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}
