import 'materialize-css/dist/css/materialize.min.css';
import UsageStats from './UsageStats'
function SideNavBottom(){
    return(
        <div className="SideNavDiv">
            <h5>Plan Usage</h5>
            <UsageStats key={1} total={3} done={2} title={'Accounts Connected'}></UsageStats>
            <UsageStats key={2} total={10000} done={5000} title={'Comments Processed'}></UsageStats>
        </div>
    )
}
export default SideNavBottom