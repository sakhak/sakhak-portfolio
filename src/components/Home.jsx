import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const roles = useMemo(
    () => ["Full-Stack Developer", "Graphic Designer", "Video Editor"],
    []
  );

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  // Typewriter timing
  const TYPE_SPEED = 85;
  const DELETE_SPEED = 35;
  const PAUSE_AFTER_TYPED = 1500;
  const PAUSE_AFTER_DELETED = 350;

  useEffect(() => {
    const fullText = roles[roleIndex % roles.length];
    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPED);
        }
      }, TYPE_SPEED);
    } else {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, Math.max(0, text.length - 1)));
        if (text.length === 0) {
          timeout = setTimeout(() => {
            setIsDeleting(false);
            setRoleIndex((v) => v + 1);
          }, PAUSE_AFTER_DELETED);
        }
      }, DELETE_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 md:pt-24 flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-gray-50" />

      {/* Desktop-friendly background accents */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute -bottom-48 -left-48 w-[36rem] h-[36rem] rounded-full bg-gray-200/50 blur-3xl -z-10" />
      <div className="absolute -bottom-48 -right-48 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={item} className="inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-gray-600">
                  Available for freelance & collaborations
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-extrabold tracking-tight text-gray-900 leading-[1.02]
                         text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem]"
            >
              Hi, I'm <span className="text-primary inline-block">SakHak</span>
              <span className="block text-gray-900">Loeung</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I build modern web apps and craft clean visual content—combining
              code, design, and storytelling to create professional results.
            </motion.p>

            {/* Typewriter */}
            <motion.div variants={item} className="mt-7">
              <div className="text-gray-700 text-lg md:text-xl">
                I'm a{" "}
                <span className="relative inline-flex items-center font-semibold text-primary">
                  {text}
                  <span className="ml-1 inline-block h-6 w-[2px] bg-primary/80 animate-pulse" />
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Full-stack • UI/UX • Motion & Editing
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="/public/img/sakhakloeung.png"
                download
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-white font-semibold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.99] transition"
              >
                <i className="bx bx-download mr-2 text-xl" />
                Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/70 backdrop-blur px-6 py-3 text-gray-800 font-semibold shadow-sm hover:bg-white transition"
              >
                <i className="bx bx-paper-plane mr-2 text-xl" />
                Let's Talk
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8">
              <p className="text-sm text-gray-500 mb-3">Connect with me:</p>
              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  {
                    href: "https://github.com/sakhak",
                    icon: "bxl-github",
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/sakhak-loeung-4149a532a/",
                    icon: "bxl-linkedin",
                    label: "LinkedIn",
                  },
                  {
                    href: "https://www.facebook.com/sakhak.loeung.1",
                    icon: "bxl-facebook-circle",
                    label: "Facebook",
                  },
                  {
                    href: "https://t.me/sakhak_loeung",
                    icon: "bxl-telegram",
                    label: "Telegram",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
                  >
                    <i
                      className={`bx ${s.icon} text-2xl text-gray-700 group-hover:text-primary transition`}
                    />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Stats - improved for laptop */}
            <motion.div
              variants={item}
              className="mt-10 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0"
            >
              {[
                { k: "Projects", v: "15+" },
                { k: "Tech", v: "React • Laravel" },
                { k: "Focus", v: "Clean UI" },
              ].map((itemx) => (
                <div
                  key={itemx.k}
                  className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-4 shadow-sm"
                >
                  <div className="text-xs text-gray-500">{itemx.k}</div>
                  <div className="mt-1 font-bold text-gray-900">{itemx.v}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[26rem] lg:max-w-[30rem]">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white/60 backdrop-blur shadow-2xl"
              >
                <div className="relative h-[22rem] sm:h-[26rem] lg:h-[30rem]">
                  <img
                    src="../../public/img/sakhakloeung.png"
                    alt="SakHak Profile"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  {/* Bottom overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-end justify-between gap-3">
                      <div className="rounded-2xl bg-white/80 backdrop-blur px-4 py-3 border border-white/60 shadow-sm">
                        <div className="text-xs text-gray-500">Portfolio</div>
                        <div className="text-sm font-bold text-gray-900">
                          SakHak Loeung
                        </div>
                      </div>

                      <div className="hidden sm:flex rounded-2xl bg-white/80 backdrop-blur px-4 py-3 border border-white/60 shadow-sm items-center gap-2">
                        <i className="bx bx-code-alt text-primary text-lg" />
                        <span className="text-sm font-semibold text-gray-900">
                          Developer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges (desktop premium) */}
              <motion.div
                initial={{ opacity: 0, x: -10, y: -6 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="absolute -top-5 -left-5 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur px-4 py-3 shadow-md"
              >
                <div className="text-xs text-gray-500">Currently learning</div>
                <div className="text-sm font-bold text-gray-900">
                  React + UI Design
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur px-4 py-3 shadow-md hidden sm:block"
              >
                <div className="text-xs text-gray-500">Open to</div>
                <div className="text-sm font-bold text-gray-900">
                  Freelance Projects
                </div>
              </motion.div>

              {/* Glow */}
              <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-tr from-primary/20 to-transparent blur-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Mobile scroll indicator */}
        <div className="mt-12 flex justify-center lg:hidden animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Scroll down</span>
            <i className="bx bx-chevron-down text-2xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
