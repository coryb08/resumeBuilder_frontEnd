import React from 'react'


const EducationRender2 = (props) =>{

  return(
    <div className="yui-u">
      <h2><strong>{props.education.school}</strong></h2>
        <h3>Year of Graduation: {props.education.year}</h3><br />

      <h3><strong>{props.education.degree}</strong><br></br> {props.education.major}</h3>
      <br /><br />
    </div>

  )
}

export default EducationRender2
