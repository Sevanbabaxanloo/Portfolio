"use client";

import Home from "./component/Home.js";
import Skills from "./component/Skills.js";
import EduExp from "./component/EduExp.js";
import Projects from "./component/Projects.js";
import Tools from "./component/Tools.js";
import Footer from "./component/Footer.js";
import Header from "./component/Header.js";
import AnimationWrapper from "./component/AnimationWrapper.js";

export default function Page() {
  return (
    <>
      <AnimationWrapper />
      <Header />
      <Home />
      <Tools />
      <EduExp />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}