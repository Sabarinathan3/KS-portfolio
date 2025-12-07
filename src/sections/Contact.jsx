import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_uhzce0o",
        "template_u111n09",
        {
          title: "Contact Form Submission",
          name: formData.name,
          message: formData.message,
          from_name: formData.name,
          from_email: formData.email,
        },
        "wuQCpVFgD21mo6nPF"
      )
      .then(
        () => {
          setStatus("SUCCESS");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("ERROR");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-10 max-w-4xl mx-auto"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -right-20 -top-10 h-80 w-80 bg-blue-500/15 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 bg-purple-500/15 blur-3xl rounded-full" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-100 mb-10 text-center md:text-left"
      >
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Contact Me
        </span>
      </motion.h2>

      {/* Form Card */}
      <motion.form
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative grid gap-6 rounded-2xl border border-slate-700/60 
          bg-slate-900/60 backdrop-blur-xl p-8 shadow-[0_0_35px_rgba(15,23,42,0.45)]
        "
      >
        {/* Glow Overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/15" />

        {/* Name Field */}
        <div className="relative z-10">
          <label className="block text-slate-300 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="
              w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/60 
              text-slate-100 placeholder:text-slate-500
              focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/50 
              transition-all duration-300
            "
          />
        </div>

        {/* Email Field */}
        <div className="relative z-10">
          <label className="block text-slate-300 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="yourmail@example.com"
            className="
              w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/60 
              text-slate-100 placeholder:text-slate-500
              focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/50 
              transition-all duration-300
            "
          />
        </div>

        {/* Message */}
        <div className="relative z-10">
          <label className="block text-slate-300 font-medium mb-1">Message</label>
          <textarea
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="
              w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/60 
              text-slate-100 placeholder:text-slate-500 resize-none
              focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/50 
              transition-all duration-300
            "
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="
            w-full py-3 rounded-full font-medium text-white text-sm
            bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
            shadow-[0_18px_45px_rgba(37,99,235,0.45)]
            hover:shadow-[0_22px_60px_rgba(37,99,235,0.65)]
            transition-all duration-300
          "
        >
          Send Message
        </motion.button>

        {/* Status Message */}
        {status === "SUCCESS" && (
          <p className="text-green-400 font-medium text-center pt-1">
            Message sent successfully!
          </p>
        )}

        {status === "ERROR" && (
          <p className="text-red-400 font-medium text-center pt-1">
            Failed to send message. Try again later.
          </p>
        )}
      </motion.form>
    </section>
  );
}
