function UsageStats(props){
    const {total,done,title} = props
    const width = Math.floor((done/total)*100)
    return(
        <div>
            <b><p>{title}</p></b>
            <div className="progress-bar" style={{width:`${width}%`}}>
                <span style={{color:'#fff'}}>.</span>
            </div>
            <div className="barLabel">
                {done} of {total}
            </div>
        </div>
    )
}

export default UsageStats