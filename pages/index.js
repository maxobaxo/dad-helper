import initPage from "../enhancers/initPage";
import IndexPage from "../components/Index";

const Index = props => (
  <div>
    <p>Hello Next.js</p>
    <IndexPage {...props} />
  </div>
);

export default initPage(Index);
