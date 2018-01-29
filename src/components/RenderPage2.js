import React from "react";
import "../resume.css";
import JobRender2 from "./JobRender2";
import EducationRender2 from "./EducationRender2";

const RenderPage2 = props => {
  console.log("in render 2", props.resume)

  const backHome = () => {
    document.location.href = '/'
  }

  while (!props.resume.educations) {
    return <div style={{ color: "white" }}>loading...</div>;
    }
    return (



      <div>
        <br></br>
        <div className="leftAlign">
          <button onClick={backHome} className="ui button gray">{'< Back'}</button>
        </div>

        <div id="doc2" className="yui-t7 smallerDiv">
          <div id="inner">
            <div id="hd">
              <div className="yui-gc">
                <div className="yui-u first">
                  <h1>
                    {props.resume.first_name} {props.resume.last_name}
                  </h1>
                </div>

                <div className="yui-u">
                  <div className="contact-info">
                    <h3>{props.resume.email}</h3>
                    <h3>{props.resume.phone}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div id="bd">
              <div id="yui-main">
                <div className="yui-b">
                  <div className="yui-gf verticalA">
                    <div className="yui-u first">
                      <h2>Profile</h2>
                    </div>
                    <div className="yui-u">
                      <p className="enlarge">{props.resume.summary}</p>
                    </div>
                  </div>

                  <div className="yui-gf">
                    <div className="yui-u first">
                      <h2>Experience</h2>
                    </div>
                    {props.resume.jobs.map((job, i) => <JobRender2 job={job} key={i}/>)}
                  </div>

                  <div className="yui-gf last">
                    <div className="yui-u first">
                      <h2>Education</h2>
                    </div>
                    {props.resume.educations.map((education, i) => (
                      <EducationRender2 education={education} key={i}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div id="ft">
              <p>
                {props.resume.first_name} {props.resume.last_name} |{" "}
                {props.resume.email} | {props.resume.phone}
              </p>
            </div>
          </div>
        </div>

      </div>
    );

  };

  export default RenderPage2;
