import {Icon} from 'react-materialize'
function Status (){
    return(
        <ul>
            <h5>Status</h5>
            <li className="stausLi">
                <span><Icon tiny className="tick">check</Icon></span>
                Requires Manual Action
            </li>
            <li className="stausLi">
                <ul>
                    <span><Icon tiny className="tick">check</Icon></span>
                    Marked as safe by:
                    <li className="innerLi">
                        <span><Icon tiny className="tick">check</Icon></span>
                        One
                    </li>
                    <li className="innerLi">
                        <span><Icon tiny className="tick">check</Icon></span>
                        Two
                    </li>
                </ul>
            </li>
            <li className="stausLi">
                <ul>
                    <span><Icon tiny className="tick">check</Icon></span>
                    Hidden By
                    <li className="innerLi">
                        <span><Icon tiny className="hide_tick">check</Icon></span>
                        Manual Action
                    </li>
                    <li className="innerLi">
                        <span><Icon tiny className="tick">check</Icon></span>
                        AI
                    </li>
                    <li className="innerLi">
                        <span><Icon tiny className="hide_tick">check</Icon></span>
                        Keywords
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default Status