import React from 'react';

const Education = (props) => {
  // console.log("in education", props);
  return (
    <div key={props.education.index}>
    <div className="ui fluid left icon input">
      <input value={props.education.school} placeholder="school" name="school" onChange={(e) => props.handleEducationChange(e, props.index)}></input>
      <i className="student icon"></i>
    </div>
      <label/>
      <div className="ui fluid left icon input">
      <input value={props.education.location} placeholder="location" name="location" onChange={(e) => props.handleEducationChange(e, props.index)}></input>
      <i className="location arrow icon"></i>
    </div>
      <label/>
      <div className="ui fluid left icon input">

      <input value={props.education.degree} placeholder="degree" name="degree" onChange={(e) => props.handleEducationChange(e, props.index)}></input>
      <i className="info circle icon"></i>
    </div>
      <label/>
      <div className="equal width fields">
        <div className="field">
        <div className="ui fluid left icon input">
          <input value={props.education.major} placeholder="major" name="major" onChange={(e) => props.handleEducationChange(e, props.index)}></input>
          <i className="write icon"></i>
        </div>
        </div>
        <div className="field">
        <div className="ui fluid left icon input">

          <input value={props.education.graduation_year} placeholder="graduation year" name="graduation_year" onChange={(e) => props.handleEducationChange(e, props.index)}></input>
          <i className="write icon"></i>
          </div>
        </div>
      </div>
      <div className="ui mini circular green icon compact button right floated" onClick={props.addEducationFields}>
        <i className="plus icon" />
      </div>
    </div>
  )
}

export default Education;
