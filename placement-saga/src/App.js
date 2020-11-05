import './App.css';
import TopNav from './components/Topnav'
import SideNavTop from './components/SideNavTop'
import TopSubNav from './components/TopSubNav'
import { Row,Col} from 'react-materialize';
import SideNavBottom from './components/SideNavBottom';
import Comments from './components/Comments'
import Post from './components/Post'
function App() {
  return (
    <div>
      <TopNav></TopNav>
      <Row className="main-body">
        <Col m={3} s={12}>
          <SideNavTop></SideNavTop>
          <SideNavBottom></SideNavBottom>
        </Col>
        <Col m={9} s={12}>
          <TopSubNav></TopSubNav>
          <Post></Post>
          <Comments></Comments>
        </Col>
      </Row>
    </div>
  );
}
const color = {
  color : "ffffff"
}
export default App;
