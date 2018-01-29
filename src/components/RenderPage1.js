import React from "react";
import "../style.css";
import JobRender from "./JobRender";
import EducationRender from "./EducationRender";

const RenderPage1 = props => {
  console.log("in render 1", props.resume.jobs);

  const backHome = () => {
    document.location.href = "/";
  };

  while (!props.resume.educations) {
    return <div style={{ color: "white" }}>loading...</div>;
  }
  return (
    <div>
      <br />
      <div className="leftAlign">
        <button onClick={backHome} className="leftAlign ui gray button">
          {"< Back"}
        </button>
      </div>
      <div id="cv">
        <div className="mainDetails">
          <div id="name">
            <h1 className="quickFade delayTwo">
              {props.resume.first_name} {props.resume.last_name}
            </h1>
          </div>

          <div id="contactDetails" className="quickFade delayFour">
            <ul>
              <li>
                e |{" "}
                <a href={props.resume.email} target="_blank">
                  {props.resume.email}
                </a>
              </li>
              <li>
                w | <a href={props.resume.website}>{props.resume.website}</a>
              </li>
              <li>m | {props.resume.phone}</li>
            </ul>
          </div>
          <div className="clear" />
        </div>

        <div id="mainArea" className="quickFade delayFive">
          <section>
            <article>
              <div className="sectionTitle">
                <h1>Personal Profile</h1>
              </div>

              <div className="sectionContent">
                <p className="jobDescription">{props.resume.summary}</p>
              </div>
            </article>
            <div className="clear" />
          </section>

          <section>
            <div className="sectionTitle">
              <h1>Work Experience</h1>
            </div>
            {props.resume.jobs.map((job, i) => <JobRender job={job} key={i} />)}
            <div className="clear" />
          </section>

          <section>
            <div className="sectionTitle">
              <h1>Key Skills</h1>
            </div>
            <div className="sectionContent">
              <p className="jobDescription">{props.resume.skills}</p>
            </div>
            <div className="clear" />
          </section>

          <section>
            <div className="sectionTitle">
              <h1>Education</h1>
            </div>
            {props.resume.educations.map((education, i) => (
              <EducationRender education={education} key={i} />
            ))}
            <div className="clear" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default RenderPage1;
