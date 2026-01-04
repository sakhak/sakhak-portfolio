import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="loader"></div>
        </div>
      )}
      <Header />
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

      <footer className="bg-dark text-white py-8 text-center">
        <p>© 2024 Loeung SakHak. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
