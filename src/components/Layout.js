import React from "react";
import { Link } from "react-scroll"
import SideBar from "./Navigation";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect } from "react";
import BackToTop from "./BackToTop";
import Experience from "./Experience";
import Education from "./Education";
import { getCopyRightYear } from "./utilities/DateCalculator";
import "./css/Layout.css";
import "./css/FadeAnimation.css";

const Layout = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + "assets/js/custom.js";
    script.async = true;
    document.body.appendChild(script);
    window.AOS.init();
  }, []);

  return (
    <div id="page-wraper" className="vg-page page-home" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "assets/images/page-bg.jpg"}` }}>

      <BackToTop />

      <SideBar />

      <section className="section about-me" id="aboutme-section">
        <About />
      </section>

      <section className="section" id="experience-section">
        <Experience />
      </section>

      <section className="section mywork" id="myworks-section">
        <Projects />
      </section>

      <section className="section" id="education-section">
        <Education />
      </section>

      <section className="section contact-me" id="contact-section" style={{ paddingBottom: "2em" }}>
        <Contact />
      </section>
    </div>
  )
}

export default Layout;