import "./css/Experience.css";

import TimeCard from "./TimeCard";
import Skills from "./Skills";

const Experience = () => {
  return (
    <div className="container">

      <div id="experience-waypoint"></div>
      <div className="section-heading experience-heading">
        <h2>Experience</h2>
        <div className="line-dec"></div>
      </div>

      <Skills />

      <div className="section-heading skills-heading">
        <div id="skills-waypoint"></div>
        <h3>Work experience</h3>
        <div className="line-dec"></div>
      </div>

      <ul className="timeline mt-4 pr-md-5">

        {/* Reacast */}
        <TimeCard time={"Mar 2022 - Current"} company={"Recast Software"} companyLink={"https://www.recastsoftware.com/"} jobtitles={["Software Engineer"]}
                  description={
                    <p>
                      After Recast Software had acquired Centero Oy, my job is to continue working with Carillon and related products.
                      I have been working with rewamping the project infrastructure and bring new architectural changes to life. 
                    </p>
                  }
        />

        {/* Centero */}
        <TimeCard time={"Aug 2020 - Mar 2022"} company={"Centero Oy"} companyLink={"https://centero.fi/"} jobtitles={["Software Developer"]}
                  description={
                    <p>
                      At first, I developed new functionality to the Centero customer portal. 
                      After that I started to work on Centero's biggest product, Carillon. My job was to add new functionalities and make existing ones work with Azure Active Directory.
                    </p>
                  }
        />
      
        {/* Finnish Defence forces */}
        <TimeCard time={"Jan 2019 - Sep 2019"} company={"Finnish Defence Forces"} companyLink={"https://puolustusvoimat.fi/"} jobtitles={["Software Developer"]}
                  description={
                    <p>
                      I served my mandatory military service at Hämeenlinna's Armoured Brigade. There my main task was to create a new Attack Simulator and creating a VR simulator for a physical Anti Air Gun.
                    </p>
                  }
        />

        {/* Movya */}
        <TimeCard time={"Jun 2018 - Dec 2018"} company={"Movya"} companyLink={"https://www.movya.fi/"} jobtitles={["Software Developer"]}
                  description={
                    <p>
                      My main task at Movya was to create a control panel application for downloading, upadating and deleting virtual reality softwares for <a href="www.valmet.com">Valmet Oyj</a>
                    </p>
                  }
        />

      </ul>
    </div>
  );
}

export default Experience;