import {Row,Col,CardPanel,Dropdown,Icon,Divider,Button} from 'react-materialize'
function TopSubNav(){
    return(
        <Row>
            <Col className="subnavdropdown">
                <span><b>Date Range : </b></span>
                <Dropdown
                    id="Dropdown_6"
                    options={{
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        container: null,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }}
                    trigger={<Button node="button" style={{color:"black"}}>Last 7 days<Icon right>arrow_drop_down</Icon></Button>}
                >
                <a href="#">
                    Last 7 days
                </a>
                </Dropdown>
            </Col>
            <Col>
                <CardPanel>
                    <Row>
                        <Col m={7}>
                            <span className="card-span">Require manual action</span>
                            <span className="card-span"><h6><b>34</b></h6></span>
                        </Col>
                        <Col m={5}>
                            <img src="warning.png" className="icon"></img>
                        </Col>
                    </Row>
                </CardPanel>
            </Col>
            <Col>
                <CardPanel>
                    <Row>
                        <Col m={7}>
                            <span className="card-span">Marked as safe</span>
                            <span className="card-span"><h6><b>34</b></h6></span>
                        </Col>
                        <Col m={5}>
                            <img src="warning.png" className="icon"></img>
                        </Col>
                    </Row>
                </CardPanel>
            </Col>
            <Col>
                <CardPanel>
                    <Row>
                        <Col m={7}>
                            <span className="card-span">Hidden</span>
                            <span className="card-span"><h6><b>34</b></h6></span>
                        </Col>
                        <Col m={5}>
                            <img src="warning.png" className="icon"></img>
                        </Col>
                    </Row>
                </CardPanel>
            </Col>
        </Row>
    )
}

export default TopSubNav