import React from "react";
import Job from "./Job";
import Education from "./Education";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeName: "",
      firstName: "",
      lastName: "",
      location: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      jobs: [
        {
          title: "",
          employer: "",
          location: "",
          start_date: "",
          end_date: "",
          description: ""
        }
      ],
      educations: [
        { school: "", location: "", degree: "", major: "", graduation_year: "" }
      ],
      skills: "",
      summary: "",
      templateId: this.props.template.id
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

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  };

  handleError = e => {
    console.log(e.target);
  };

  backHome = () => {
    document.location.href = "/";
  };

  render() {
    console.log("in props form", this.state);
    return (
      <div>
        <br />
        <div className="leftAlign">
          <button onClick={this.backHome} className="leftAlign ui gray button">
            {"< Back"}
          </button>
        </div>

        <div className="column-1">
          <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="field">
              <label>Chosen Template - {this.props.template.name}</label>
              <div className="ui green message">
                <ul className="list">
                  <li>fill in all fields for better design</li>
                </ul>
              </div>
            </div>
            <div className="ui fluid left icon input">
              <input
                placeholder="resume name"
                name="resumeName"
                onChange={this.handleChange}
              />
              <i className="write icon" />
            </div>
            <div className="field">
              <br />
              <label>Personal Info</label>
            </div>
            <div className="equal width fields">
              <div className="field">
                <div className="ui fluid left icon input">
                  <input
                    placeholder="first name"
                    name="firstName"
                    onChange={this.handleChange}
                  />
                  <i className="user icon" />
                </div>
              </div>
              <div className="field">
                <div className="ui fluid left icon input">
                  <input
                    placeholder="last name"
                    name="lastName"
                    onChange={this.handleChange}
                  />
                  <i className="user icon" />
                </div>
              </div>
            </div>
            <div className="ui fluid left icon input">
              <input
                placeholder="location"
                name="location"
                onChange={this.handleChange}
              />
              <i className="location arrow icon" />
            </div>
            <label />
            <div className="equal width fields">
              <div className="field">
                <div className="ui fluid left icon input">
                  <input
                    placeholder="phone"
                    name="phone"
                    onChange={this.handleChange}
                  />
                  <i className="phone icon" />
                </div>
              </div>
              <div className="field">
                <div className="ui fluid left icon input">
                  <input
                    placeholder="email"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <i className="mail icon" />
                </div>
              </div>
            </div>
            <div className="ui fluid left icon input">
              <input
                placeholder="website"
                name="website"
                onChange={this.handleChange}
              />
              <i className="id card outline icon" />
            </div>
            <div className="field">
              <br />
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
              <br />
              <label>Skills</label>
            </div>
            <div className="ui fluid left icon input">
              <textarea
                rows="3"
                placeholder="skills"
                name="skills"
                onChange={this.handleChange}
              />
              <i className="write icon" />
            </div>
            <div className="field">
              <br />
              <label>Summary</label>
            </div>

            <div className="ui fluid left icon input">
              <textarea
                rows="3"
                placeholder="summary"
                name="summary"
                onChange={this.handleChange}
              />
              <i className="write icon" />
            </div>
            {/*<Link className="ui green button" to={`/template${this.state.templateId}/${this.props.resumes[2].id}`} className="ui green button">CREATE A RESUME</Link>*/}
            <div className="field" />
            <button className="ui green button" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
