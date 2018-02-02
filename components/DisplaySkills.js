import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import SkillCheckbox from "./SkillCheckbox";

class DisplaySkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age_id: this.props.ageId
    };
  }

  render() {
    return (
      <div>
        <p>
          Given your baby's age range, (s)he may have mastered one or more of
          the following skills: Please let us know which fetes your little one
          has accomplished.
        </p>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            {this.props.data.skills
              ? this.props.data.skills.map((skill, index) => (
                  <SkillCheckbox
                    skill={skill}
                    handleCheckboxChange={this.props.handleCheckboxChange}
                    key={index}
                  />
                ))
              : null}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

DisplaySkills.propTypes = {
  ageId: PropTypes.number,
  handleCheckboxChange: PropTypes.func,
  handleFormSubmit: PropTypes.func
};

const SKILLS_QUERY = gql`
  query getSkills($ageId: Int!) {
    skills(ageId: $ageId) {
      name
      id
      ageId
    }
  }
`;

export default graphql(SKILLS_QUERY)(DisplaySkills);
