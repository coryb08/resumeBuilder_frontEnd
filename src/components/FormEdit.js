import React from "react";
import Job from "./Job";
import Education from "./Education";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    console.log("in form EDIT!!y props", props);
    super(props);
    this.state = {
      resumeName: this.props.resume.name,
      firstName: this.props.resume.first_name,
      lastName: this.props.resume.last_name,
      location: this.props.resume.location,
      address: this.props.resume.address,
      phone: this.props.resume.phone,
      email: this.props.resume.email,
      website: this.props.resume.website,
      jobs: this.props.resume.jobs.map(job => [
        {
          title: "hi",
          employer: "",
          location: "",
          start_date: "",
          end_date: "",
          description: ""
        }
      ]),
      educations: this.props.resume.educations.map(education => [
        { school: "", location: "", degree: "", major: "", graduation_year: "" }
      ]),
      skills: this.props.resume.skills,
      summary: this.props.resume.summary,
      templateId: this.props.resume.template_id
    };
  }

  handleChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      return { [name]: value };
    });
  };

  addJobFields = e => {
    e.preventDefault();
    this.setState({
      jobs: [
        ...this.state.jobs,
        {
          title: "",
          employer: "",
          location: "",
          start_date: "",
          end_date: "",
          description: ""
        }
      ]
    });
  };

  addEducationFields = e => {
    e.preventDefault();
    this.setState({
      educations: [
        ...this.state.educations,
        { school: "", location: "", degree: "", major: "", graduation_year: "" }
      ]
    });
  };

  handleJobChange = (e, i) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      return {
        jobs: [
          ...prevState.jobs.slice(0, i),
          { ...prevState.jobs[i], [name]: value },
          ...prevState.jobs.slice(i + 1)
        ]
      };
    });
  };

  handleEducationChange = (e, i) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("in education", this.state);
    this.setState(prevState => {
      return {
        educations: [
          ...prevState.educations.slice(0, i),
          { ...prevState.educations[i], [name]: value },
          ...prevState.educations.slice(i + 1)
        ]
      };
    });
  };

  backHome = () => {
    document.location.href = "/";
  };

  // handleTemplate = e => {
  //   this.setState({
  //     templateId: e.target.value
  //   });
  // };

  handleEdit = e => {
    e.persist();
    e.preventDefault();
    this.props.handleEdit(e, this.state);
  };

  handleError = e => {
    console.log(e.target);
  };

  componentWillReceiveProps(nextProps) {
    console.log("will receive props", nextProps);
    if (nextProps.resume === undefined) {
      document.location.href = "/";
    } else {
      this.setState({
        resumeName: nextProps.resume.name,
        firstName: nextProps.resume.first_name,
        lastName: nextProps.resume.last_name,
        location: nextProps.resume.location,
        address: nextProps.resume.address,
        phone: nextProps.resume.phone,
        email: nextProps.resume.email,
        jobs: nextProps.resume.jobs,
        educations: nextProps.resume.educations,
        website: nextProps.resume.website,
        skills: nextProps.resume.skills,
        summary: nextProps.resume.summary
        // templateId: nextProps.resume.template_id
      });
      /* templateId: nextProps.resume.template_id*/
    }
  }

  render() {
    return (
      <div>
        <br />
        <div className="leftAlign">
          <button onClick={this.backHome} className="leftAlign ui gray button">
            {"< Back"}
          </button>
        </div>
        <div className="column-1">
          <form
            className="ui large form"
            onSubmit={this.handleEdit}
            id={this.props.resume.id}
          >
            {/*<div className="ui red pointing below basic label">Please enter a value</div>*/}
            {/*<select onChange={this.handleTemplate} className="ui dropdown">
            <option value="">Choose template...</option>
            <option value="1">Color</option>
            <option value="2">Black&White</option>
          </select>*/}
            <br />

            <input
              placeholder="resume name"
              id={this.props.resume.id}
              value={this.state.resumeName}
              name="resumeName"
              onChange={this.handleChange}
            />
            <div className="field">
              <label>Personal Info</label>
            </div>
            <div className="equal width fields">
              <div className="field">
                <input
                  id={this.props.resume.id}
                  placeholder="first name"
                  id={this.props.resume.id}
                  value={this.state.firstName}
                  name="firstName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  id={this.props.resume.id}
                  placeholder="last name"
                  id={this.props.resume.id}
                  value={this.state.lastName}
                  name="lastName"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <input
              id={this.props.resume.id}
              placeholder="location"
              value={this.state.location}
              name="location"
              onChange={this.handleChange}
            />
            <label />
            <div className="equal width fields">
              <div className="field">
                <input
                  id={this.props.resume.id}
                  placeholder="phone"
                  value={this.state.phone}
                  name="phone"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  id={this.props.resume.id}
                  placeholder="email"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <input
              id={this.props.resume.id}
              placeholder="website"
              value={this.state.website}
              name="website"
              onChange={this.handleChange}
            />
            <div className="field">
              <label>Jobs</label>
            </div>
            {this.state.jobs.map((job, index) => (
              <Job
                handleJobChange={this.handleJobChange}
                addJobFields={this.addJobFields}
                index={index}
                key={index}
                job={job}
              />
            ))}
            <div className="field">
              <label>Education</label>
            </div>
            {this.state.educations.map((education, index) => (
              <Education
                addEducationFields={this.addEducationFields}
                handleEducationChange={this.handleEducationChange}
                key={index}
                index={index}
                education={education}
              />
            ))}
            <div className="field">
              <label>Skills</label>
            </div>
            <textarea
              rows="3"
              value={this.state.skills}
              id={this.props.resume.id}
              placeholder="skills"
              name="skills"
              onChange={this.handleChange}
            />
            <div className="field">
              <label>Summary</label>
            </div>
            <textarea
              rows="3"
              value={this.state.summary}
              placeholder="summary"
              name="summary"
              onChange={this.handleChange}
            />
            {/*<Link className="ui green button" to={`/template${this.state.templateId}/${this.props.resumes[2].id}`} className="ui green button">CREATE A RESUME</Link>*/}
            <div className="field" />
            <div className="ui buttons cardChild">
              <button className="ui green button" type="submit">
                SAVE
              </button>
              <div className="or" />
              <button
                id={this.props.resume.id}
                onClick={this.props.handleDelete}
                className="ui red button"
              >
                DELETE
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
