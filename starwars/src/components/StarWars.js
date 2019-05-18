import React from "react";

// A list of Star Wars Characters rendered to the screen.

const StarWars = props => {
  return (
    <div className="cards">
      <h3>{props.propsCharacter.name}</h3>
      <p>
        <strong>Gender: </strong> {props.propsCharacter.gender}
      </p>
      <p>
        <strong>HomeWorld: </strong> {props.propsCharacter.homeworld}
      </p>
    </div>
  );
};

export default StarWars;
