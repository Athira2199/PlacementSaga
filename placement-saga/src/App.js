import './App.css';
import TopNav from './components/Topnav'
import SideNavTop from './components/SideNavTop'
import TopSubNav from './components/TopSubNav'
import { Row,Col} from 'react-materialize';
import SideNavBottom from './components/SideNavBottom';
import Comments from './components/Comments'
function App() {
  return (
    <div>
      <TopNav></TopNav>
      <Row className="main-body">
        <Col m={3} s={6}>
          <SideNavTop></SideNavTop>
          <SideNavBottom></SideNavBottom>
        </Col>
        <Col m={9} s={6}>
          <TopSubNav></TopSubNav>
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
