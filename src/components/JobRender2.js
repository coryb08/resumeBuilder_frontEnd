import React from 'react'


const JobRender2 = (props) =>{

  return(
    <div className="yui-u">

      <div className="job">
        <h2><strong>{props.job.employer}</strong></h2>
        <h3>{props.job.title}</h3>
        <h4>{props.job.start_date} <img id="dashImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Wave_Dash.svg/1000px-Wave_Dash.svg.png" alt=""/> {props.job.end_date}</h4>
        <p>{props.job.description}</p>
      </div>

    </div>

  )



}

export default JobRender2
