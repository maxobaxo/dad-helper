import React from "react";
import PropTypes from "prop-types";
import DisplaySkills from "./DisplaySkills";

class AgeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baby_age_id: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      baby_age_id: parseInt(event.target.value)
    });
  }

  handleAgeSubmit(event) {
    console.log("you have submitted the age range of ", this.state.baby_age_id);

    this.props.submitAgeForm(this.state.baby_age_id);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAgeSubmit}>
          <label>How old is your little one?</label>
          <select
            value={this.state.baby_age_id}
            onChange={this.handleChange}
            required
          >
            <option selected disabled>
              Select an Age Range
            </option>
            <option value="1">0 - 4 Months</option>
            <option value="2">5 - 8 Months</option>
            <option value="3">9 - 12 Months</option>
          </select>
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
        <DisplaySkills
          handleCheckboxChange={this.props.handleCheckboxChange}
          ageId={this.state.baby_age_id}
          handleFormSubmit={this.props.handleFormSubmit}
        />
      </div>
    );
  }
}

AgeForm.propTypes = {
  hideAgeForm: PropTypes.func,
  submitAgeForm: PropTypes.func,
  handleCheckboxChange: PropTypes.func,
  handleFormSubmit: PropTypes.func
};

export default AgeForm;
