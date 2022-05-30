import "./css/Skills.css";
import SkillCard from './SkillCard'

const Skills = () => {

  const Skills = {
    JavaScript: "90%",
    CSharp: "90%",
    AWS: "70%",
    Azure: "65%",
    React: "85%",
    Devops: "60%",
    Golang: "75%",
    SQL: "85%",
    Web: "85%",
    WinForm: "90%"
  };

  return (
    <div className="container">

        <div className="section-heading" style={{ padding: 0 }}>
          <h3>Software development methodologies</h3>
          <div className="line-dec"></div>
        </div>
        

        <div className="col-md-12">
          <div className="right-text" data-aos="fade-left" data-aos-once={true}>
            <br />
            <br />
            <p>
                Experienced in <a href="https://en.wikipedia.org/wiki/Agile_software_development">Agile</a> and
                <a href="https://www.atlassian.com/agile/scrum">Scrum</a> methodology. Work with clients, managers to providing
                inputs throughout project and coming up with resource requirements, design solutions,
                development estimates, and so forth and confirm business objectives are met.
            </p>

            <p>
              During my latest work related project, I became proficient with planning software from design and architectural perspectives.
              I wrote extensive documentation and improved DTO usage hence making the application more memory efficient.
            </p>
          </div>
        </div>

      <div className="section-heading skills-heading">
        <div id="skills-waypoint"></div>
        <h3>Programming languages</h3>
        <div className="line-dec"></div>
      </div>

      <div className="row">
        <SkillCard img={`${process.env.PUBLIC_URL + "assets/images/dotnet.svg"}`} description={
                  <p>
                    From all the technolgies I'm most proficent with .NET. I started with it and work with projects that are built with it.
                    I have worked with many projects using C#, Entity Framework, .NET Core and others. 
                  </p>} />

                  <SkillCard img={`${process.env.PUBLIC_URL + "assets/images/python.svg"}`} description={
                  <p>
                    While studying AI, computer vision and other computer learning related technologies Python has been the go to.
                  </p>} />

                  <SkillCard img={`${process.env.PUBLIC_URL + "assets/images/javascript.svg"}`} description={
                  <p>
                    This site is built on JavaScript. I have used it since the first day I started learning computer science with the most basic websites.
                    Among JavaScript, Node, TypeScript, NEXT.JS I have created many projects that help me in my daily life.
                  </p>} />

                  <SkillCard img={`${process.env.PUBLIC_URL + "assets/images/cplusplus.svg"}`} description={
                  <p>
                    C++ is a fairly new addition to my catalog. I aim to study computer graphics with OpenGL and later expand through parallel programming to CUDA programming and better understand grpahics and related studies.
                  </p>} />
      </div>

    </div>
  );
}

export default Skills;