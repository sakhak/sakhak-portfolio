import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "../utils/motion";

const Portfolio = () => {
  const projects = useMemo(
    () => [
      {
        title: "Job Search Platform",
        description:
          "Full-stack web app with authentication, profiles, and job search by categories, location, and skills.",
        technologies: ["React", "TypeScript", "Laravel", "MySQL"],
        image: "/img/JobDone.jpg",
        live: "#",
        github: "#",
      },
      {
        title: "Basic System",
        description:
          "CRUD system with add/edit/delete and filtering. Built for clean workflows and quick data management.",
        technologies: ["React", "JavaScript", "Laravel", "MySQL"],
        image: "/img/basic system.jpg",
        live: "#",
        github: "#",
      },
      {
        title: "Employee CRUD",
        description:
          "Web app to manage employee records with full CRUD, using arrays + localStorage for persistence.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "/img/CrudSystem.jpg",
        live: "#",
        github: "#",
      },
      {
        title: "Login UI Project",
        description:
          "Login form with validation, show/hide password, and basic error handling for a smooth UX.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "/img/LoginForm.jpg",
        live: "#",
        github: "#",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const current = projects[active];

  const next = () => setActive((v) => (v + 1) % projects.length);
  const prev = () =>
    setActive((v) => (v - 1 + projects.length) % projects.length);

  return (
    <section id="portfolio" className="section">
      <div className="container-app">
        {/* Heading */}
        <motion.div
          variants={stagger(0.05, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          <motion.h2 variants={fadeUp(0)} className="section-heading">
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.08)}
            className="section-subtitle mx-auto"
          >
            A selection of projects showcasing full-stack development and clean
            UI.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.12, 0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid lg:grid-cols-2 gap-8 items-start"
        >
          {/* Left details */}
          <motion.div variants={fadeUp(0)} className="card p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="pill">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-gray-600">Project</span>
              </span>
              <span className="text-sm text-gray-500">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-extrabold text-gray-900">
              {current.title}
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {current.description}
            </p>

            <div className="mt-6">
              <div className="text-sm font-semibold text-gray-900">
                Tech Stack
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {current.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-sm rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                className="btn-primary"
                href={current.live}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-globe text-xl" />
                Live Demo
              </a>
              <a
                className="btn-outline"
                href={current.github}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-github text-xl" />
                Source Code
              </a>
            </div>

            <div className="mt-8 divider" />

            {/* Thumbnails */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {projects.map((p, idx) => (
                <button
                  key={p.title}
                  onClick={() => setActive(idx)}
                  className={`relative overflow-hidden rounded-xl border transition ${
                    idx === active
                      ? "border-primary ring-4 ring-primary/15"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-20 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <div className="text-xs font-semibold text-white line-clamp-1">
                      {p.title}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right image (animated switch) */}
          <motion.div variants={fadeUp(0.08)} className="card overflow-hidden">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className="w-full h-[18rem] md:h-[28rem] object-cover"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <button onClick={prev} className="btn-outline !px-4 !py-2">
                  <i className="bx bx-chevron-left text-xl" />
                  Prev
                </button>
                <button onClick={next} className="btn-outline !px-4 !py-2">
                  Next
                  <i className="bx bx-chevron-right text-xl" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
