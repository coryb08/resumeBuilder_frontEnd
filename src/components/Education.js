import React from "react"

const Education = props => {
  // console.log("in education", props);
  return (
    <div key={props.education.index}>
      <div className="ui fluid left icon input">
        <input
          value={props.education.school}
          placeholder="school"
          name="school"
          onChange={e => props.handleEducationChange(e, props.index)}
        />
        <i className="student icon" />
      </div>
      <br />
      <label />
      <div className="ui fluid left icon input">
        <input
          value={props.education.location}
          placeholder="location"
          name="location"
          onChange={e => props.handleEducationChange(e, props.index)}
        />
        <i className="location arrow icon" />
      </div>
      <label />
      <br />
      <div className="ui fluid left icon input">
        <input
          value={props.education.degree}
          placeholder="degree"
          name="degree"
          onChange={e => props.handleEducationChange(e, props.index)}
        />
        <i className="info circle icon" />
      </div>
      <label />
      <br />
      <div className="equal width fields">
        <div className="field">
          <div className="ui fluid left icon input">
            <input
              value={props.education.major}
              placeholder="major"
              name="major"
              onChange={e => props.handleEducationChange(e, props.index)}
            />
            <i className="write icon" />
          </div>
        </div>
        <div className="field">
          <div className="ui fluid left icon input">
            <input
              value={props.education.graduation_year}
              placeholder="graduation year"
              name="graduation_year"
              onChange={e => props.handleEducationChange(e, props.index)}
            />
            <i className="write icon" />
          </div>
        </div>
      </div>
      <div
        className="ui mini circular green icon compact button right floated"
        onClick={props.addEducationFields}
      >
        <i className="plus icon" />
      </div>
    </div>
  )
}

export default Education
