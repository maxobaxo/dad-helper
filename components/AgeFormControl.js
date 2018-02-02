import React from "react";
// import { graphql } from "react-apollo";
// import gql from "graphql-tag";
import AgeForm from "./AgeForm";
import DisplayGames from "./DisplayGames";
import PropTypes from "prop-types";

class AgeFormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageFormIsHidden: false,
      skillsFormIsHidden: true
      // gamesAreHidden: true
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
    // do something with selectedSkills
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  render() {
    return (
      <div>
        <div hidden={this.state.ageFormIsHidden}>
          <AgeForm
            handleCheckboxChange={this.toggleCheckbox}
            handleFormSubmit={this.handleSkillsFormSubmit}
            submitAgeForm={this.submitAgeForm}
          />
        </div>
        {/* <div hidden={this.state.skillsFormIsHidden}>
          <DisplaySkills
            handleFormSubmit={this.props.handleFormSubmit}
            handleCheckboxChange={this.props.handleCheckboxChange}
            babySkills={this.props.babySkills}
          />
        </div>
        <div hidden={this.state.gamesAreHidden}>
          <DisplayGames gamesToPlay={this.props.gamesToPlay} />
        </div> */}
      </div>
    );
  }
}

export default AgeFormControl;
