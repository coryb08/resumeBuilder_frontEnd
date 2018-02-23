import React from "react"
import Template from "./Template"
import Diamond from "../template-imgs/arrow.jpg"

const TemplateList = props => {
  const templates = props.templates.map((template, i) => (
    <Template
      template={template}
      i={i}
      key={i}
      handleTemplateClick={props.handleTemplateClick}
    />
  ))
  return (
    <div className="template-list">
      <h1 className="choose">Choose your template</h1>
      {templates}
    </div>
  )
}
// <img className="imageArrow" src={Diamond} style={{ width: "100%" }} />
export default TemplateList
