import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../utils/motion";

const Services = () => {
  const services = [
    {
      icon: "bx bx-code-alt",
      title: "Full-Stack Development",
      description:
        "I build responsive and dynamic web applications with clean UI and reliable backend.",
      points: ["React / Laravel", "REST APIs", "Responsive UI"],
    },
    {
      icon: "bx bx-paint",
      title: "Graphic Design",
      description:
        "I design modern visuals for branding, social media, and marketing materials.",
      points: ["Branding", "Social Media", "UI Assets"],
    },
    {
      icon: "bx bx-slideshow",
      title: "Video Editing",
      description:
        "I create polished video content with pacing, transitions, sound, and effects.",
      points: ["Premiere Pro", "After Effects", "Motion Graphics"],
    },
  ];

  return (
    <section id="service" className="section bg-gray-50/60">
      <div className="container-app">
        {/* Heading animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger(0.05, 0.08)}
          className="text-center"
        >
          <motion.h2 variants={fadeUp(0)} className="section-heading">
            My <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.08)}
            className="section-subtitle mx-auto"
          >
            End-to-end support for modern web products—development, visuals, and
            content.
          </motion.p>
        </motion.div>

        {/* Cards animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={stagger(0.12, 0.1)}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp(i * 0.08)}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="card p-6 md:p-7 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <i className={`${s.icon} text-2xl`} />
                </div>
                <span className="text-xs font-semibold text-gray-500 border border-gray-200 rounded-full px-3 py-1">
                  Service
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {s.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {s.description}
              </p>

              <div className="mt-5 divider" />

              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <i className="bx bx-check-circle text-primary text-lg" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
