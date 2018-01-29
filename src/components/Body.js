import React from "react";
import Form from "./Form";
import FormEdit from "./FormEdit";
import CardList from "./CardList";
import TemplateList from "./TemplateList";
import RenderPage1 from "./RenderPage1";
import RenderPage2 from "./RenderPage2";
import { Route, Switch, withRouter } from "react-router-dom";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      resumes: [],
      resume: [],
      templates: [],
      clickedTemplate: [],
      clickedView: false,
      // formView: [],
      clickedEdit: []
    };
  }

  componentDidMount() {
    fetch("https://mysterious-forest-52595.herokuapp.com//resumes")
      .then(resp => resp.json())
      .then(json => this.setState({ resumes: json }, () => console.log("in fetch", this.state.resumes)));

    fetch("https://mysterious-forest-52595.herokuapp.com//templates")
      .then(resp => resp.json())
      .then(json => this.setState({ templates: json }));
  }

  handleTemplateClick = e => {
    console.log("i am here ");
    const id = e.target.id;
    const clickedTemplate = this.state.templates.find(
      template => template.id == id
    );
    this.setState({ clickedTemplate: clickedTemplate, clickedView: false });
  };

  handleViewTemplates = e => {
    e.preventDefault();
    this.setState({ clickedView: true, clickedTemplate: [] });
  };

  handleSubmit = data => {
    console.log("submitted", data.jobs, this.props.history);
    fetch("https://mysterious-forest-52595.herokuapp.com//resumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        resume: {
          name: data.resumeName,
          first_name: data.firstName,
          last_name: data.lastName,
          location: data.location,
          phone: data.phone,
          email: data.email,
          website: data.website,
          skills: data.skills,
          summary: data.summary,
          template_id: data.templateId,
          jobs: data.jobs,
          educations: data.educations,
          deleteId: ""
        }
      })
    })
      .then(resp => resp.json())
      .then(json => {
        this.setState({ resume: json }, () =>
          this.props.history.push(
            `/template${this.state.resume.template_id}/${this.state.resume.id}`
          )
        );
      });
  };

  handleEdit = (e, data) => {
    console.log("in handle", data);
    const resume = this.state.resumes.find(
      resume => ((resume.name === data.resumeName)||resume.id === parseInt(e.target.id, 10))
    );
    const id = resume.id;
    
    fetch(`https://mysterious-forest-52595.herokuapp.com//resumes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        resume: {
          name: data.resumeName,
          first_name: data.firstName,
          last_name: data.lastName,
          location: data.location,
          phone: data.phone,
          email: data.email,
          website: data.website,
          skills: data.skills,
          summary: data.summary,
          template_id: data.templateId,
          jobs: data.jobs,
          educations: data.educations
        }
      })
    }).then(resp => resp.json()).then(json => {
      const resumesNew = this.state.resumes.map(function(item) { return item.id == json.id ? json : item; });
      this.setState({ resume: json, resumes: resumesNew}, () =>
        this.props.history.push(`/`));
    });
  };

  handleDelete = e => {
    e.preventDefault();
    console.log("resume state", this.state.resumes);
    const id = e.target.id;
    console.log("id", id, "e target", e.target.id);
    this.setState({ deleteId: id });
    fetch(`https://mysterious-forest-52595.herokuapp.com//resumes/${id}`, {
      method: "DELETE",
      headers: {
        Action: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(json => {
        const index = this.state.resumes.findIndex(
          resume => parseInt(this.state.deleteId) === resume.id
        );
        console.log("index", index);
        if (index < 0) {
          const resumes = this.state.resumes;
          const newArray = resumes.slice(0, index + 1);
          console.log("in <0", index);
          this.setState({ resumes: newArray });
        } else {
          const resumesAll = this.state.resumes;
          const newArray = this.state.resumes
            .slice(0, index)
            .concat(this.state.resumes.slice(index + 1));
          console.log("in >=0", index);
          this.setState({ resumes: newArray }, () =>
            console.log("after set state", this.state.resumes)
          );
        }
      });
  };

  render() {
    console.log("rendering body", this.state);
    return (
      <Switch>
        <Route
          path="/template1/:id"
          render={arg => {
            const myResume = this.state.resumes.find(
              resume => resume.id === parseInt(arg.match.params.id)
            );
            return (
              <RenderPage2
                resume={
                  this.state.resume.educations ? this.state.resume : myResume
                }
              />
            );
          }}
        />

        <Route
          path="/template2/:id"
          render={arg => {
            const myResume = this.state.resumes.find(
              resume => resume.id === parseInt(arg.match.params.id)
            );
            console.log("my resume then state.resume", myResume, this.state.resumes)
            return (
              <RenderPage1
                resume={
                  this.state.resume.educations ? this.state.resume : myResume
                }
              />
            );
          }}
        />
        <Route
          path="/resume/:id/edit"
          render={arg => {
            const myResume = this.state.resumes.find(
              resume => resume.id === parseInt(arg.match.params.id)
            );
            // console.log("my resume then state.resume", myResume, this.state.resume)
            return (
              <div>
                <FormEdit
                  resume={myResume}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
                  />
                <CardList
                  clickedEdit={this.state.clickedEdit}
                  resumes={this.state.resumes}
                  handleViewTemplates={this.handleViewTemplates}
                  handleEdit={this.handleEdit}
                  handleView={this.handleView}
                  clickedTemplate={this.state.clickedTemplate}
                  handleDelete={this.handleDelete}
                />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/"
          render={() => {
            // console.log("clicked", this.state.clickedEdit);
            // console.log("clickedtemplate", (this.state.clickedTemplate.length<1), "clickedview", (this.state.clickedView), "clickedEdit", (this.state.clickedEdit.id == undefined));
            return (
              <div className="row">
                {this.state.clickedTemplate.length < 1 ||
                this.state.clickedView ||
                this.clickedEdit !== undefined ? (
                  <TemplateList
                    templates={this.state.templates}
                    handleTemplateClick={this.handleTemplateClick}
                  />
                ) : (
                  <Form
                    handleSubmit={this.handleSubmit}
                    resume={this.state.resume}
                    resumes={this.state.resumes}
                    template={this.state.clickedTemplate}
                    templates={this.state.templates}
                    clickedEdit={this.state.clickedEdit}
                    clickedTemplate={this.state.clickedTemplate}
                  />
                )}
                <CardList
                  clickedEdit={this.state.clickedEdit}
                  resumes={this.state.resumes}
                  handleViewTemplates={this.handleViewTemplates}
                  handleEdit={this.handleEdit}
                  handleView={this.handleView}
                  clickedTemplate={this.state.clickedTemplate}
                  handleDelete={this.handleDelete}
                />
              </div>
            );
          }}
        />
      </Switch>
    );
  }
}

export default withRouter(Body);
