import 'materialize-css/dist/css/materialize.min.css';
import PagesChannels from './PagesChannels'
import Status from './Status'
function SideNav(){
    return(
      <div className="SideNavDiv">
        <PagesChannels></PagesChannels>
        <Status></Status>
      </div>
    )
}
export default SideNav