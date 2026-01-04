import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "../utils/motion";
import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from "react-icons/si";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
  ];

  const skills = useMemo(
    () => [
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: FaJs, name: "JavaScript" },
      { icon: FaReact, name: "React" },
      { icon: FaPhp, name: "PHP" },
      { icon: FaLaravel, name: "Laravel" },
      { icon: FaDatabase, name: "SQL" },
      { icon: FaCode, name: "C#" },
      { icon: SiAdobephotoshop, name: "Photoshop" },
      { icon: SiAdobeillustrator, name: "Illustrator" },
      { icon: SiAdobepremierepro, name: "Premiere Pro" },
      { icon: SiAdobeaftereffects, name: "After Effects" },
    ],
    []
  );

  const personalInfo = [
    { label: "Name", value: "Loeung SakHak" },
    { label: "City", value: "Phnom Penh" },
    { label: "Nationality", value: "Cambodia" },
    { label: "Experience", value: "1+ year" },
    { label: "Phone", value: "(+855) 016 607 238" },
    { label: "Email", value: "loeungsakhak438@gmail.com" },
    { label: "Languages", value: "Khmer (Native), English (Intermediate)" },
  ];

  const TimelineItem = ({ date, title, org, bullets }) => (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary" />
      <div className="absolute left-[5px] top-5 bottom-0 w-px bg-gray-200" />
      <div className="text-sm font-semibold text-primary">{date}</div>
      <div className="mt-1 text-lg font-bold text-gray-900">{title}</div>
      <div className="mt-1 text-sm text-gray-500">{org}</div>
      <ul className="mt-3 space-y-2 text-gray-600">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <i className="bx bx-check text-primary text-xl -mt-0.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const panelMotion = {
    initial: { opacity: 0, y: 12, scale: 0.99 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 12, scale: 0.99 },
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <section id="resume" className="section bg-gray-50/60">
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
            Resume <span className="text-primary">Overview</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.08)}
            className="section-subtitle mx-auto"
          >
            Full-stack developer with a strong eye for design and clean,
            reliable web experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.12, 0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid lg:grid-cols-12 gap-8"
        >
          {/* Left: Tabs */}
          <motion.div variants={fadeUp(0)} className="lg:col-span-4">
            <div className="card p-6 md:p-7">
              <h3 className="text-xl font-extrabold text-gray-900">
                Why hire me?
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                I build modern, responsive web applications with clean UI and
                strong backend logic.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition border ${
                      activeTab === tab.id
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                        : "bg-white/70 border-gray-200 text-gray-700 hover:bg-white"
                    }`}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Content (animated switch) */}
          <motion.div variants={fadeUp(0.08)} className="lg:col-span-8">
            <div className="card p-6 md:p-8">
              <AnimatePresence mode="wait">
                {activeTab === "experience" && (
                  <motion.div key="experience" {...panelMotion}>
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      Experience <span className="text-primary">Timeline</span>
                    </h3>

                    <div className="mt-8 space-y-10">
                      <TimelineItem
                        date="2023 — Present"
                        title="IT Support Internship"
                        org="Pethyoeung Healthtech Co., LTD"
                        bullets={[
                          "Supported customers with app installation and setup",
                          "Assisted in solving minor technical issues",
                          "Improved user experience through clear guidance",
                        ]}
                      />
                      <TimelineItem
                        date="2023 — 2024"
                        title="Personal Projects"
                        org="Independent"
                        bullets={[
                          "Built multiple front-end and full-stack projects",
                          "CRUD systems and reusable UI components",
                          "Job search platform using React + Laravel + MySQL",
                        ]}
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "education" && (
                  <motion.div key="education" {...panelMotion}>
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      Education <span className="text-primary">Background</span>
                    </h3>

                    <div className="mt-8 space-y-10">
                      <TimelineItem
                        date="2022 — Present"
                        title="Information Technology"
                        org="SETEC Institute"
                        bullets={[
                          "Web Development and Programming fundamentals",
                          "Software design and practical project work",
                        ]}
                      />
                      <TimelineItem
                        date="2021 — 2022"
                        title="High School (BacII)"
                        org="Chea Sim SonthorMok High School"
                        bullets={["Completed BacII certification."]}
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "skills" && (
                  <motion.div key="skills" {...panelMotion}>
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      Skills <span className="text-primary">Toolkit</span>
                    </h3>
                    <p className="mt-3 text-gray-600">
                      Development + design tools to build complete, polished
                      digital products.
                    </p>

                    <motion.div
                      variants={stagger(0.1, 0.06)}
                      initial="hidden"
                      animate="visible"
                      className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                      {skills.map((s, i) => (
                        <motion.div
                          key={s.name}
                          variants={fadeUp(i * 0.03)}
                          whileHover={{ y: -3 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 18,
                          }}
                          className="card p-4 flex items-center gap-3"
                        >
                          <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                            <s.icon className="text-2xl" />
                          </div>
                          <div className="font-semibold text-gray-900">
                            {s.name}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "about" && (
                  <motion.div key="about" {...panelMotion}>
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      About <span className="text-primary">Me</span>
                    </h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      I’m Loeung SakHak, a full-stack developer based in Phnom
                      Penh. I focus on modern, responsive websites and apps
                      using React, Laravel, and SQL.
                    </p>

                    <motion.div
                      variants={stagger(0.08, 0.06)}
                      initial="hidden"
                      animate="visible"
                      className="mt-8 grid sm:grid-cols-2 gap-4"
                    >
                      {personalInfo.map((info, i) => (
                        <motion.div
                          key={info.label}
                          variants={fadeUp(i * 0.03)}
                          className="card p-4"
                        >
                          <div className="text-xs text-gray-500">
                            {info.label}
                          </div>
                          <div className="mt-1 font-semibold text-gray-900">
                            {info.value}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
