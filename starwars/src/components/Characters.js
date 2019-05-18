import React from "react";

const Characters = props => {
  return (
    <div className="cards">
      <h3> {props.propsCharacter.name} </h3>
      <p>
        <strong> Gender: </strong> {props.propsCharacter.gender}
      </p>
      <p>
        <strong> Height: </strong> {props.propsCharacter.height}
      </p>
      <p>
        <strong> HomeWorld: </strong>{" "}
        <a href={props.propsCharacter.homeworld} target="blank">
          {props.propsCharacter.homeworld}
        </a>
      </p>
    </div>
  );
};

export default Characters;
