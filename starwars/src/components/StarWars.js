import React from "react";

// A list of Star Wars Characters rendered to the screen.

const StarWars = props => {
  return (
    <div>
      <h3>{props.propsCharacter.name}</h3>
      <p>
        <strong>Gender: </strong> {props.propsCharacter.gender}
      </p>
    </div>
  );
};

export default StarWars;
