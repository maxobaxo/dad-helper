import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import AgeForm from "./AgeForm";
import DisplayGames from "./DisplayGames";
import PropTypes from "prop-types";
import { Flex } from "rebass";

class AgeFormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
  }

  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    const selectedSkills = [];

    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }

    for (const checkbox of this.selectedCheckboxes) {
      selectedSkills.push(checkbox);
    }

    this.setState({
      skills: selectedSkills
    });
  };

  render() {
    console.log(this.state.skills);
    return (
      <div>
        <AgeForm handleCheckboxChange={this.toggleCheckbox} />
        <DisplayGames skills={this.state.skills ? this.state.skills : null} />
      </div>
    );
  }
}

export default AgeFormControl;
