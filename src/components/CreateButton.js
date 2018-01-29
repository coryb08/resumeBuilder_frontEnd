import React from 'react';

const CreateButton = (props) => {
  return (
    <button className="ui grey button" onClick={props.handleViewTemplates} >VIEW TEMPLATES</button>
  )
}

export default CreateButton;
