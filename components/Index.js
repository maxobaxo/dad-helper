import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import AgeFormControl from "./AgeFormControl";

const Index = props => {
  if (props.data && props.data.loading) {
    return <p>Loading...</p>;
  }

  if (props.data && props.data.error) {
    return <p>error, bro</p>;
  }

  return <AgeFormControl />;
};

export default Index;
