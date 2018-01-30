import { compose } from "react-apollo";
import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
// import withAuth from "./withAuth";
// import Cookie from "js-cookie";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

// const token = Cookie.get("idToken");

// const middlewareLink = setContext(() => {
//   if (typeof token !== "undefined") {
//     return {
//       headers: {
//         authorization: token ? `Bearer ${token}` : null
//       }
//     };
//   }
// });

// const link = middlewareLink.concat(httpLink);

const config = {
  link: httpLink
};

export default ComposedComponent => {
  return compose(
    // withAuth,
    withData(config)
  )(ComposedComponent);
};
