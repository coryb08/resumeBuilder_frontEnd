import React from "react";

const Template = props => {
  return (
    <div className="ui column">
      <div className="ui segment customLabel">
        <div
          key={props.i}
          id={props.template.id}
          onClick={props.handleTemplateClick}
        >
          <label className="customLabel">
            {props.template.name.toUpperCase()}
          </label>
          <img
            className="ui center align image"
            id={props.template.id}
            src={require(`../template-imgs/${props.template.name}.png`)}
            alt={props.template.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
