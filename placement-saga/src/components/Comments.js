import {Row,Col,CardPanel,Icon} from 'react-materialize'
function Comments(){
    return(
        <CardPanel className="comments">
            <Row>
                <Col m={2} s={2}>
                    <img className="personIcon"src="boy.jpg"></img>
                </Col>
                <Col className="commentor" s={3} m={3}>
                    <p>Pragya Mukhi</p>
                    <p>2:03pm, today</p>
                </Col>
                <Col s={2} m={3}></Col>
                <Col s={3} m={3} className="icon-img">
                    <img src="warning.webp" className="icon-warning"></img>
                </Col>
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
                <Col m={6} s={6}>
                    <span className="card-footer-left">
                        <img
                        className="card-footer-image"
                        src="https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text-thumbnail.png">
                        </img>
                        <label>RachanRanode3</label>
                    </span>
                </Col>
                <Col m={6} s={6} className="card-footer-right" >
                    <Row>
                        <Col m={1} s={0}></Col>
                        <Col m={1} s={1} className="post-comment-footer"><Icon>remove_red_eye</Icon></Col>
                        <Col m={1} s={0}></Col>
                        <Col m={1} s={1} className="post-comment-footer"><Icon className="comment-eye">remove_red_eye</Icon></Col>
                        <Col m={1} s={0}></Col>
                        <Col m={1} s={1} className="post-comment-footer"><Icon className="comment-tick">check</Icon></Col>
                    </Row>
                </Col>
            </Row>
        </CardPanel>
    )
}

export default Comments