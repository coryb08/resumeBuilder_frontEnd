import React from 'react'


const EducationRender = (props) =>{

  return(
    <div className="sectionContent">
      <article>
        <h2>{props.education.school}</h2>
        <p className="jobDescription">{props.education.degree}: {props.education.major}<br>
        </br>Year of graduation: {props.education.year}</p>
      <br></br>

      </article>
    </div>
  )
}

export default EducationRender
