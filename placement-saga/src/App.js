import './App.css';
import TopNav from './components/Topnav'
import SideNavTop from './components/SideNavTop'
import TopSubNav from './components/TopSubNav'
import { Row,Col} from 'react-materialize';
import SideNavBottom from './components/SideNavBottom';
function App() {
  return (
    <div>
      <TopNav></TopNav>
      <Row className="main-body">
        <Col>
          <SideNavTop></SideNavTop>
          <SideNavBottom></SideNavBottom>
        </Col>
        <Col>
          <TopSubNav></TopSubNav>
        </Col>
      </Row>
    </div>
  );
}
const color = {
  color : "ffffff"
}
export default App;
