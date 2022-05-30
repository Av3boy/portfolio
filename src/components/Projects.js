import { useEffect, useState } from "react";
import "./css/MyWorks.css";
import { getArticleCountRound } from "./utilities/DateCalculator";
import { readRssFeed } from "./utilities/ReadRssFeed";

const Projects = () => {
  const [articleCount, setArticleCount] = useState(25);

  useEffect(() => {
    const gerCSharpCornerData = async () => {
      const data = await readRssFeed('https://www.c-sharpcorner.com/members/ganesan-c5/rss');
      setArticleCount(data ?? 29);
    }
    gerCSharpCornerData();
  }, []);

  return (
    <div className="container">

      <div id="myworks-waypoint"></div>
      <div className="section-heading mywork-heading">
        <h2>Projects</h2>
        <div className="line-dec"></div>
      </div>

      <div className="row skills-left-image">
        <div className="col-md-5">
          <div className="left-image" data-aos="fade-right" data-aos-once={true}>
            <img src="assets/images/mywork-2.png" alt="" />
          </div>
        </div>
        <div className="col-md-7">
          <div className="right-text" data-aos="fade-left" data-aos-once={true}>
            <p>
              I've worked created various projects from the groud up as well as maintained active projects.
              I have managed teams as a team leader and acted as a representative.
            </p>
            
          </div>
        </div>
      </div>
      <div id="work-counter-animation" className="work-counter" data-aos="fade-right" data-aos-once={true}>
        <div className="container">
          <div className="row">
            
            {/*
            <div className="col-lg">
              <h1 className="animateNumber" data-number={articleCount}>0</h1>
              <span>ARTICLES</span>
            </div>
            */}
            <div className="col-lg">
              <h1 className="animateNumber" data-number="4">0</h1>
              <span>CLIENTS</span>
            </div>
            <div className="col-lg">
              <h1 className="animateNumber" data-number="7">0</h1>
              <span>PROJECTS</span>
            </div>
            <div className="col-lg">
              <h1 className="animateNumber" data-number="5">0</h1>
              <span>TEAMS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">

          <div className="col-md-12 mywork-section" data-aos="fade-left" data-aos-once={true}>
            <div className="section-heading mywork-heading">
              <h2>Tech Forums</h2>
              <div className="line-dec"></div>
            </div>

            <ul className="point-list">

              <li style={{ display: "list-item" }}>
                <a className="mywork-link" href="https://stackoverflow.com/users/12210670/antti-veikkolainen"
                  rel="noreferrer" target="_blank">
                  <span>Stackoverflow</span>
                </a>
              </li>

              <li style={{ display: "list-item" }}>
                <a className="mywork-link" href="https://docs.microsoft.com/en-us/users/anttiveikkolainen-7739/"
                  rel="noreferrer" target="_blank">
                  <span>Microsoft Learn</span>
                </a>
              </li>

              <li style={{ display: "list-item" }}>
                <a className="mywork-link" href="https://www.codegrepper.com/profile/antti-veikkolainen"
                   rel="noreferrer" target="_blank">
                  <span>Grepper</span>
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;