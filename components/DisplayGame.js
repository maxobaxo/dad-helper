import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Panel, PanelFooter, PanelHeader, Text, Box } from "rebass";

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
        <Panel m={2}>
          <PanelHeader>Oops!</PanelHeader>
          <Box>
            <Text p={2}>
              My bad, I don't have a game yet for kids who have mastered "{
                this.state.skill_name
              }"...
            </Text>
          </Box>
          <PanelFooter>Stay tuned!</PanelFooter>
        </Panel>
      );
    }

    const { name, description, bonus } = this.props.data.game;
    return (
      <Panel m={2}>
        <PanelHeader>{name}</PanelHeader>
        <Box>
          <Text p={2}>{description}</Text>
        </Box>
        <PanelFooter>Bonus: {bonus}</PanelFooter>
      </Panel>
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
