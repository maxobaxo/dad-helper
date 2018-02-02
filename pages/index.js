import initPage from "../enhancers/initPage";
import IndexPage from "../components/Index";
import { Provider, Heading } from "rebass";

const Index = props => (
  <Provider>
    <Heading>BetterDad</Heading>
    <IndexPage {...props} />
  </Provider>
);

export default initPage(Index);
