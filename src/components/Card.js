import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <div className="column-2 cardChild">
      <div className="ui cards">
        <div
          className="ui card"
          key={props.resume.id}
          id={props.resume.template_id}
        >
          <div className="content CardChild" id={props.resume.id}>
            <i
              aria-hidden="true"
              className="x icon red right floated iup"
              id={props.resume.id}
              onClick={props.handleDelete}
            />
            <div className="ui horizontal divider"> {props.resume.name} </div>
            <div className="meta">
              {" "}
              {props.resume.first_name} {props.resume.last_name}{" "}
            </div>
            <div className="description">{props.resume.summary}</div>
          </div>

          <div className="ui buttons cardChild">
            <Link
              to={`/template${props.resume.template_id}/${props.resume.id}`}
              className="ui green button"
            >
              VIEW
            </Link>
            <div className="or" />
            {/*<button className="ui  button" id={props.resume.id}
            name={props.resume.template_id}
            onClick={props.handleEdit}>EDIT</button> */}
            <Link
              id={props.resume.id}
              name={props.resume.template_id}
              to={`/resume/${props.resume.id}/edit`}
              className="ui grey button"
            >
              EDIT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
