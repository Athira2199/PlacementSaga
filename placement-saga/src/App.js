import './App.css';
import TopNav from './components/Topnav'
import SideNav from './components/SideNav'
import { Row,Col} from 'react-materialize';
function App() {
  return (
    <div>
      <TopNav></TopNav>
      <Row>
        <Col>
          <SideNav></SideNav>
        </Col>
      </Row>
    </div>
  );
}
const color = {
  color : "ffffff"
}
export default App;
