import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import AgeForm from "./AgeForm";
import DisplayGames from "./DisplayGames";
import PropTypes from "prop-types";

class AgeFormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageFormIsHidden: false,
      skillsFormIsHidden: true,
      // gamesAreHidden: true,
      skills: []
    };
    this.hideAgeForm = this.hideAgeForm.bind(this);
    this.submitAgeForm = this.submitAgeForm.bind(this);
    this.handleSkillsFormSubmit = this.handleSkillsFormSubmit.bind(this);
  }

  hideAgeForm() {
    this.setState({
      ageFormIsHidden: true,
      skillsFormIsHidden: false
    });
  }

  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  submitAgeForm(age) {}

  handleSkillsFormSubmit() {
    const selectedSkills = [];
    for (const checkbox of this.selectedCheckboxes) {
      selectedSkills.push(checkbox);
    }
    this.setState({
      skills: selectedSkills
    });
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
        <div hidden={this.state.ageFormIsHidden}>
          <AgeForm
            handleCheckboxChange={this.toggleCheckbox}
            handleFormSubmit={this.handleSkillsFormSubmit}
            submitAgeForm={this.submitAgeForm}
          />
          <DisplayGames skills={this.state.skills} />
        </div>
      </div>
    );
  }
}

// const GAMES_QUERY = gql`
//   query getGames {

//   }
// `

export default AgeFormControl;
