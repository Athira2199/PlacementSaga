import 'materialize-css/dist/css/materialize.min.css';
import UsageStats from './UsageStats'
function SideNavBottom(){
    return(
        <div className="SideNavDiv">
            <b>Plan Usage</b>
            <UsageStats></UsageStats>
            <UsageStats></UsageStats>
        </div>
    )
}
export default SideNavBottom