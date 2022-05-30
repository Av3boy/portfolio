import React, { useState } from "react";
import TypeWritingAnimator from "./utilities/TypeWritingAnimator"
import { getAge, getExperience } from "./utilities/DateCalculator"
import File from "./profile/Resume.pdf"
import "./css/AboutMe.css";

const About = () => {

  const [width, setWidth] = useState(document.documentElement.clientWidth);

  const onDownload = () => {
    // TODO
  }

  function getDetails() {
    return (
      <ul className="theme-list">
        <li><b>From:</b> Jyväskylä, Finland</li>
        <li><b>Age:</b> {getAge()}</li>
        <li><b>Studies:</b> CS @ <a href="https://www.jamk.fi/fi">JAMK</a></li>
        <li><b>Work:</b> <a href="https://www.recastsoftware.com/">Recast Software</a></li>
      </ul>
    );
  }

  React.useEffect(() => {
    var elements = document.getElementById('typewritetext');
    var toRotate = '["Full Stack Developer", "Software Engineer"]';
    var period = "2000";
    new TypeWritingAnimator(elements, JSON.parse(toRotate), period);
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener('resize', resize) };
  }, []);

  function resize() {
    setWidth(document.documentElement.clientWidth);
  }

  return (
    <div className="container">

      <div id="aboutme-waypoint"></div>

      <div className="section-heading about-me-heading">
        <h2>About</h2>
        <div className="line-dec"></div>
      </div>

      <div className="left-image-post">
        <div className="">
          <div className="col-md-5" style={{float: "left", width: "50%", padding: "0 3em 3em 0", zIndex: 1 }}>
            <div className="left-image fade-in-left">
              <img src="assets/images/about-img.jpg" alt="" />
              {
                width > 750
                  ?
                  <> <br /> <br /> {getDetails()} </>
                  :
                  <></>
              }
            </div>
          </div>
          <div className="col">
            <div className="right-text fade-in-right">

              <h1>Antti Veikkolainen</h1>
              <h5 id="typewritetext" className="typewrite">
                <span className="wrap"></span>
              </h5>

              <p>
                {getExperience()} years of experience in Software development with a variety of technologies
                such as Azure, .NET, React and other Front-End, Back-End technologies.
              </p>

              <p>
                My career started with the most basic web development and after that I delved into windows desktop software development with .NET Framework.
                I then expanded my skills with game development using engines such as Unity and Unreal Engine 4.
                At the start of 2019 I served my mandatory military service where I started VR development using Unreal Engine 4.
                After my military service I graduted from my Computer Science and highschool dual degree studies.
                During the worst period of the Covid 19 pandemic I explored the field further and expanded my skill in many fields such as Graphics Development using OpenGL,
                IOT with arduino, E-commerce using Stripe and more.
                I brought further my web development knownledge by using technologies such as .NET Core, React, TypeScript and CICD.
              </p>

              <p>
                I am Software Engineering student.
              </p>

              <p>
                Recently I've started writing blogs about technologies I find interesting. My blog site can be found here. (Note: The site is currently down for rewamp)
              </p>

              <p>
                I want to expand the field with my knownledge and you can see my contributions from my Grepper page.
                At this time grepper shows that I have helped close to 50000 developers
                </p>

              {
                width <= 750
                  ?
                  getDetails()
                  :
                  <></>
              }

              <div className="white-button">
                <button onClick={onDownload}>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;