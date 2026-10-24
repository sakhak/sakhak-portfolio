import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white dark:bg-gray-950 z-50 flex items-center justify-center">
          <div className="loader"></div>
        </div>
      )}
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main
        className={
          loading ? "opacity-0" : "opacity-100 transition-opacity duration-300"
        }
      >
        <Home />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>

      <footer className="bg-dark dark:bg-black text-white py-3 text-center ">
        <p>© 2024 Loeung SakHak. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
