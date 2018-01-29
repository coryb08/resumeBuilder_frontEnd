import React from "react";
import Template from "./Template";
import Diamond from "../template-imgs/arrow.jpg";

const TemplateList = props => {
  const templates = props.templates.map((template, i) => (
    <Template
      template={template}
      i={i}
      key={i}
      handleTemplateClick={props.handleTemplateClick}
    />
  ));
  return (
    <div>
      <h3 className="column-templates">
        <img className="imageArrow" src={Diamond} />
      </h3>
      <div className="column-templates">
        <div className="ui grid">
          <div className=" ui two column grid moveUp">
            <br />
            {templates}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateList;
