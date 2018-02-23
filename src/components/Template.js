import React from "react"

const Template = props => {
  const image = require(`../template-imgs/${props.template.name}.jpg`)
  return (
    <div>
      <div
        className={`templateCard${props.i}`}
        onClick={props.handleTemplateClick}
      >
        <h1 className="cardTitle">{props.template.name.toUpperCase()}</h1>
        <div
          className="templateImage"
          id={props.template.id}
          style={{
            backgroundImage: `url(${image})`
          }}
          alt={props.template.name}
        />
      </div>
    </div>
  )
}

export default Template

//
//
