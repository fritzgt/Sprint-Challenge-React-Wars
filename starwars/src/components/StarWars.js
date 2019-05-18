import React from "react";
import Characters from "./Characters";
import "./StarWars.css";

// A list of Star Wars Characters rendered to the screen.

const StarWars = props => {
  return (
    <div className="card-container">
      {props.propsCrew.map(characters => (
        <Characters propsCharacter={characters} />
      ))}
    </div>
  );
};

export default StarWars;
