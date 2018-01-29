import React from 'react'


const JobRender = (props) =>{
  console.log('JOB PROPS ', props.job)

  return(
    <div className="sectionContent">
      <article>
        <h2>{props.job.title}</h2>
        <p className="subDetails">{props.job.start_date} <img id="dashImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Wave_Dash.svg/1000px-Wave_Dash.svg.png" alt=""/> {props.job.end_date}</p>
        <p className="jobDescription">{props.job.description}</p>
        <br></br>
        </article>
    </div>
  )



}

export default JobRender
