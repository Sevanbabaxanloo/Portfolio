"use client";

import { useEffect, useState } from "react";
import Home from "./component/Home.js";
import Skills from "./component/Skills.js";
import EduExp from "./component/EduExp.js";
import Projects from "./component/Projects.js";
import Tools from "./component/Tools.js";
import Footer from "./component/Footer.js";
import Header from "./component/Header.js";
import Animation from "./component/Animation.js";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2700);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Animation />
      ) : (
        <>
          <Header />
          <Home />
          <Tools />
          <EduExp />
          <Skills />
          <Projects />
          <Footer />
        </>
      )}
    </>
  );
}