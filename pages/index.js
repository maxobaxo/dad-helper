import initPage from "../enhancers/initPage";
import IndexPage from "../components/Index";
import { Provider, Heading, Container, Text, Divider } from "rebass";

const Index = props => (
  <Provider>
    <Heading center m={4}>
      BetterDad
    </Heading>
    <Divider />
    <Container width="50%">
      <Text m={5}>
        First, select an age range. Then select which skills your child has
        mastered. Based on the skillset and age range, the app will provide
        developmental games you can play
      </Text>
      <IndexPage {...props} />
    </Container>
  </Provider>
);

export default initPage(Index);
