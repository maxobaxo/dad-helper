import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class DisplayGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill_id: this.props.id,
      skill_name: this.props.name
    };
  }

  render() {
    if (!this.props.data.game) {
      return (
        <p>
          My bad, I don't have a game yet for kids who have mastered "{
            this.state.skill_name
          }"... Stay tuned!
        </p>
      );
    }

    const { name, description, bonus } = this.props.data.game;
    return (
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>{bonus}</p>
      </div>
    );
  }
}

DisplayGame.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
};

const GAME_QUERY = gql`
  query getGame($id: String!) {
    game(skillId: $id) {
      name
      description
      bonus
    }
  }
`;

export default graphql(GAME_QUERY)(DisplayGame);
