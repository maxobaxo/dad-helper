import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import AgeFormControl from "./AgeFormControl";
import SkillsControl from "./SkillsControl";
// import GamesControl from "./GamesControl";

const Index = props => {
  if (props.data && props.data.loading) {
    return <p>Loading...</p>;
  }

  if (props.data && props.data.error) {
    return <p>error, bro</p>;
  }

  // handleSkillsFormSubmit = event => {
  //   event.preventDefault();
  //   const { dispatch } = this.props;
  //   const selectedSkills = [];
  //   for (const checkbox of this.selectedCheckboxes) {
  //     selectedSkills.push(checkbox);
  //   }

  //   dispatch(getGames(selectedSkills));
  // };

  return (
    <div>
      <AgeFormControl />
    </div>
  );
};

export default Index;
