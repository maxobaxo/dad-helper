import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class AgeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baby_age: "TBD"
    };
    this.handleAgeSubmit = this.handleAgeSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      baby_age: event.target.value
    });
  }

  handleAgeSubmit(event) {
    console.log("you have submitted the age range of ", this.state.baby_age);
    //   event.preventDefault();
    //   const { _age } = this.refs;
    //   const { dispatch } = this.props;
    //   dispatch(getBabySkills(_age.value));
    //   this.props.hideAgeForm();
  }

  render() {
    console.log("DATA", this.props.data);
    return (
      <div>
        <form onSubmit={this.handleAgeSubmit}>
          <label>How old is your little one?</label>
          <select
            value="this.state.baby_age"
            onChange={this.handleChange}
            required
          >
            <option selected disabled>
              Select an Age Range
            </option>
            <option value="ZeroToFour">0 - 4 Months</option>
            <option value="FiveToEight">5 - 8 Months</option>
            <option value="NineToTwelve">9 - 12 Months</option>
          </select>
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

AgeForm.propTypes = {
  hideAgeForm: PropTypes.func
};

const SKILLS_QUERY = gql`
  query getSkills {
    skills(ageId: 3) {
      name
    }
  }
`;

export default graphql(SKILLS_QUERY)(AgeForm);
