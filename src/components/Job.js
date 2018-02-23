import React from "react"

const Job = props => {
  return (
    <div key={props.job.index}>
      <div className="ui fluid left icon input">
        <input
          value={props.job.title}
          placeholder="title"
          name="title"
          onChange={e => props.handleJobChange(e, props.index)}
        />
        <br />
        <i className="write icon" />
      </div>
      <label />
      <br />
      <div className="ui fluid left icon input">
        <input
          value={props.job.employer}
          placeholder="employer"
          name="employer"
          onChange={e => props.handleJobChange(e, props.index)}
        />
        <i className="user icon" />
      </div>
      <label />
      <br />
      <div className="ui fluid left icon input">
        <input
          value={props.job.location}
          placeholder="location"
          name="location"
          onChange={e => props.handleJobChange(e, props.index)}
        />
        <i className="location arrow icon" />
      </div>

      <div className="field">
        <label> Start date</label>

        <input
          value={props.job.start_date}
          type="date"
          placeholder="start date"
          name="start_date"
          onChange={e => props.handleJobChange(e, props.index)}
        />
      </div>
      <div className="field">
        <label>End date</label>
        <input
          value={props.job.end_date}
          type="date"
          placeholder="end date"
          name="end_date"
          onChange={e => props.handleJobChange(e, props.index)}
        />
      </div>

      <div className="ui fluid left icon input">
        <textarea
          value={props.job.description}
          rows="3"
          placeholder="description"
          name="description"
          onChange={e => props.handleJobChange(e, props.index)}
        />
        <i className="write icon" />
      </div>
      <br />
      <div
        className="ui mini circular green icon compact button right floated"
        onClick={props.addJobFields}
      >
        <i className="plus icon" />
      </div>
      <label />
    </div>
  )
}

export default Job
