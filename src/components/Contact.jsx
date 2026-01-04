import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "../utils/motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type, message }

  const contactDetails = useMemo(
    () => [
      { icon: "bx bxs-phone", title: "Phone", value: "(+855) 016 607 238" },
      {
        icon: "fa-brands fa-telegram",
        title: "Telegram",
        value: "(+855) 962 619 282",
      },
      {
        icon: "bx bxl-gmail",
        title: "Email",
        value: "loeungsakhak438@gmail.com",
      },
      {
        icon: "bx bx-map",
        title: "Address",
        value:
          "#F37k, Sangkat Kakab 2, Por Sen Chey District, Phnom Penh, Cambodia",
      },
    ],
    []
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((p) => ({ ...p, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await new Promise((r) => setTimeout(r, 1200));
      console.log("Form submitted:", formData);

      setStatus({
        type: "success",
        message: "Message sent successfully. I’ll reply soon!",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 3500);
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
      setTimeout(() => setStatus(null), 3500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-app">
        <motion.div
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          <motion.h2 variants={fadeUp(0)} className="section-heading">
            Let’s <span className="text-primary">Work Together</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.08)}
            className="section-subtitle mx-auto"
          >
            Tell me about your project—web app, design, or video. I’ll respond
            as soon as possible.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.15, 0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          className="mt-12 grid lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left */}
          <motion.div variants={fadeUp(0)} className="lg:col-span-5">
            <div className="card p-6 md:p-8">
              <div className="pill">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-gray-600">Contact Details</span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-gray-900">
                Reach me directly
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Prefer quick contact? Use phone or Telegram. For business
                inquiries, email is best.
              </p>

              <div className="mt-8 space-y-5">
                {contactDetails.map((d) => (
                  <div key={d.title} className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <i className={`${d.icon} text-2xl`} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{d.title}</div>
                      <div className="text-gray-600 leading-relaxed">
                        {d.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 divider" />

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="btn-outline"
                  href="https://github.com/sakhak"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-github text-xl" />
                  GitHub
                </a>
                <a
                  className="btn-outline"
                  href="https://www.linkedin.com/in/sakhak-loeung-4149a532a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin text-xl" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={fadeUp(0.08)} className="lg:col-span-7">
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Send a message
              </h3>
              <p className="mt-2 text-gray-600">
                Fill the form below and I’ll reply shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-gray-800"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="field mt-2"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-800"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="field mt-2"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-800"
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="field mt-2"
                      placeholder="(+855) ..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-gray-800"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="field mt-2"
                      placeholder="Project inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="field mt-2 resize-none"
                    placeholder="Tell me what you want to build..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="inline-flex h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="bx bx-send text-xl" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.35 }}
                      className={`rounded-xl p-4 text-sm font-semibold ${
                        status.type === "success"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
