import React from "react";
import PropTypes from "prop-types";
import DisplayGame from "./DisplayGame";

function DisplayGames(props) {
  return (
    <div>
      {props.skills.map((skill, index) => (
        <DisplayGame name={skill.name} id={skill.id} key={index} />
      ))}
    </div>
  );
}

DisplayGames.propTypes = {
  skills: PropTypes.array
};

export default DisplayGames;
