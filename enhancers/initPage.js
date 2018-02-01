import { compose } from "react-apollo";
import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
// import withAuth from "./withAuth";
// import Cookie from "js-cookie";

// const token = Cookie.get("idToken");

// const middlewareLink = setContext(() => {
//   return {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };
// });

// const link = middlewareLink.concat(httpLink);

const config = {
  link: new HttpLink({
    uri: "http://localhost:4000/graphql"
  })
};

export default ComposedComponent => {
  return compose(
    // withAuth,
    withData(config)
  )(ComposedComponent);
};
