import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const Index = props => {
  if (props.data && props.data.loading) {
    return <p>Loading...</p>;
  }

  if (props.data && props.data.error) {
    return <p>error, bro</p>;
  }

  return <div>{props.data ? props.data.games[0].name : "no go, jimbo"}</div>;
};

const GAMES_QUERY = gql`
  query allGames {
    games {
      name
      description
      bonus
    }
  }
`;

export default graphql(GAMES_QUERY)(Index);
