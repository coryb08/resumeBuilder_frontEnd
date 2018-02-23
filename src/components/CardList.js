import React from "react"
import Card from "./Card"
import CreateButton from "./CreateButton"

const CardList = props => {
  const cards = props.resumes.map((resume, i) => (
    <Card
      clickedEdit={props.clickedEdit}
      key={i}
      resume={resume}
      handleView={props.handleView}
      handleEdit={props.handleEdit}
      handleDelete={props.handleDelete}
    />
  ))
  return (
    <div className="savedResumes">
      <h3 className="savedH3">Your Saved Resumes</h3>
      <div>{cards}</div>
    </div>
  )
}

export default CardList
