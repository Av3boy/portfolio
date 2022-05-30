import "./css/Experience.css";
import TimeCard from "./TimeCard";

const Education = () => {
  return (
    <div className="container">

      <div className="section-heading experience-heading" style={{ paddingTop: 0 }}>
        <h2>Education</h2>
        <div className="line-dec"></div>
      </div>

      <ul className="timeline mt-4 pr-md-5">

        <TimeCard time={"Aug 2020 - Current"} company={"Jamk"} companyLink={"https://www.jamk.fi/fi"} jobtitles={["Software Engineer"]}
                  description={
                    <p>
                      Open Computer Science studies at the polytechnical of Jyväskylä.
                    </p>
                  }
        />

        <TimeCard time={"Aug 2016 - Feb 2020"} company={"Gradia"} companyLink={"https://www.gradia.fi/"} jobtitles={["Datanomi", "High School"]}
                  description={
                    <p>
                      I graduated from my dual degree studies at the start of 2020. During my studies I attended my mandatory military service.
                      My main studies included .NET development with C#. At high school I studied Maths, Physics, English and Finnish.
                    </p>
                  }
        />
      </ul>
    </div>
  );
}

export default Education;