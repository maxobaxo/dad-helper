import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Label } from "rebass";

class SkillCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange() {
    let newState = !this.state.isChecked;
    this.setState({ isChecked: newState });
    this.props.handleCheckboxChange(this.props.skill);
  }

  render() {
    const { skill } = this.props;
    const { isChecked } = this.state;

    return (
      <Label>
        <Checkbox
          value={this.props.skillId}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
          m={1}
        />
        {this.props.skill.name}
      </Label>
    );
  }
}

SkillCheckbox.propTypes = {
  skill: PropTypes.object,
  handleCheckboxChange: PropTypes.func
};

export default SkillCheckbox;
