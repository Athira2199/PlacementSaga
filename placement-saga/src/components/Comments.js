import {Row,Col,CardPanel,Icon} from 'react-materialize'
function Comments(){
    return(
        <CardPanel className="comments">
            <Row>
                <Col></Col>
                <Col className="commentor">
                    <p>Name</p>
                    <p>Date</p>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col m={12} s={12}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </Col>
            </Row>
            <Row>
                <Col m={9} s={6}>
                    <span className="card-footer-left">
                        <img
                        className="card-footer-image"
                        src="https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text-thumbnail.png">
                        </img>
                        <label>RachanRanode3</label>
                    </span>
                </Col>
                <Col m={3} s={6} className="card-footer-right">
                    <Row>
                        <Col m={2} s={2}><Icon>remove_red_eye</Icon></Col>
                        <Col m={2} s={2}><Icon className="comment-eye">remove_red_eye</Icon></Col>
                        <Col m={2} s={2}><Icon className="comment-tick">check</Icon></Col>
                    </Row>
                </Col>
            </Row>
        </CardPanel>
    )
}

export default Comments