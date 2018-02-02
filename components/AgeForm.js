import React from "react";
import PropTypes from "prop-types";
import DisplaySkills from "./DisplaySkills";
import { Select, Label } from "rebass";

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

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAgeSubmit}>
          <Label>How old is your little one?</Label>
          <Select
            value={this.state.baby_age_id}
            onChange={this.handleChange}
            defaultValue="1"
            required
          >
            <option value="0">Select an Age Range</option>
            <option value="1">0 - 4 Months</option>
            <option value="2">5 - 8 Months</option>
            <option value="3">9 - 12 Months</option>
          </Select>
          <button hidden type="submit" value="submit">
            Submit
          </button>
        </form>
        <DisplaySkills
          handleCheckboxChange={this.props.handleCheckboxChange}
          ageId={this.state.baby_age_id}
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
