import { render } from "react-dom";

const TimeCard = (props) => {
  return (
      <li data-aos="fade-left" data-aos-once={true}>
          <div className="title">{props.time}</div>
          <div className="details">
            <h5><a href={props.companyLink} target="_blank" rel="noreferrer">{props.company}</a></h5>
            <small className="fg-theme">{props.description}</small>

            <ul className="exp-theme-list">
            {
              props.jobtitles.map((title) => {
                return (
                  <li><b>{title}</b> | {props.time}</li>
                )
              })
            }
            </ul>

          </div>
      </li>
  );
}

export default TimeCard;