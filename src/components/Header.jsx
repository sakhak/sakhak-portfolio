import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "service", label: "Services" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const ThemeToggle = ({ className = "" }) => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white/70 text-gray-800 backdrop-blur transition hover:bg-white dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-100 dark:hover:bg-gray-900 ${className}`}
    >
      <i className={`bx ${theme === "dark" ? "bx-sun" : "bx-moon"} text-xl`} />
    </button>
  );

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveSection(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  // lock body scroll when menu open (prevents weird behavior)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition ${
        scrolled
          ? "bg-white/80 backdrop-blur border-b border-gray-200 dark:bg-gray-950/80 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container-app h-16 md:h-20 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="flex items-center gap-2 font-extrabold tracking-tight text-gray-900 dark:text-gray-100"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
            S
          </span>
          <span className="text-lg md:text-xl">
            <span className="brand-sakhak">SakHak</span>{" "}
            <span className="text-primary">Loeung</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navlink ${
                activeSection === item.id ? "navlink-active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle className="ml-2" />
          <a
            href="#contact"
            className="btn-soft"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            <i className="bx bx-paper-plane text-lg" />
            Hire Me
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 bg-white/70 backdrop-blur dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-100"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"} text-2xl`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu backdrop"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/30 md:hidden z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer panel */}
            <motion.div
              className="fixed top-16 left-0 right-0 md:hidden z-[9999] bg-white/95 backdrop-blur border-b border-gray-200 dark:bg-gray-950/95 dark:border-gray-800"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container-app py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`navlink ${
                      activeSection === item.id ? "navlink-active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="mt-3">
                  <a
                    href="#contact"
                    className="btn-primary w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                  >
                    <i className="bx bx-paper-plane text-lg" />
                    Let’s Work
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
