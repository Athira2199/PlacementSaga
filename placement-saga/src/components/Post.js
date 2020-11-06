import { Row,Col,Icon,CardPanel,TextInput} from 'react-materialize';
function Post(){
    return(
        <CardPanel className="post">
          <Row>
            <Col>
                <img className="personIcon"src="boy.jpg"></img>
            </Col>
            <Col className="commentor">
                <p>Rachna Ranade</p>
                <p>2:03pm, today</p>
            </Col>
          </Row>
          <Row className="post-content">
            <Col m={12} s={12}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
            </Col>
          </Row>
          <Row>
            <Col m={12} s={12}>
                <img src="https://miro.medium.com/max/700/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" className="post-image"></img>
            </Col>
          </Row>
          <Row>
                <Col m={3} s={3}>
                    <img className="personIcon"src="boy.jpg"></img>
                </Col>
                <Col className="commentor" m={3} s={3}>
                    <p>Name</p>
                    <p>Date</p>
                </Col>
                <Col m={6} s={6} className="card-footer-right">
                    <Row>
                        <Col m={1} s={1}></Col>
                        <Col m={1} s={1} className="post-comment-footer"><Icon>remove_red_eye</Icon></Col>
                        <Col m={1} s={1}></Col>
                        <Col m={1} s={1} className="post-comment-footer"><Icon className="comment-eye">remove_red_eye</Icon></Col>
                        <Col m={1} s={1}></Col>
                        <Col m={1} s={1} className="post-comment-footer"><Icon className="comment-tick">check</Icon></Col>
                    </Row>
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
            <Col m={12} s={12}>
            <Row>
                <Col m={10} s={10}>
                    <input
                    type="text"
                    className="sample"
                    placeholder="Write a reply..."
                    >
                    </input>
                </Col>
                <Col m={2} s={2} >
                    <Icon className="smiley">tag_faces</Icon>
                </Col>
            </Row>
            </Col>
          </Row>
          <Row className="user-action">
              <Col m={1} s={1}  className="like">
                Like
              </Col>
              <Col m={1} s={1}  className="like">
                <Icon tiny>thumb_up</Icon>
              </Col>
              <Col m={1} s={1}></Col>
              <Col m={1} s={1} className="ban">
                Ban
              </Col>
              <Col m={1} s={1}  className="ban">
                <Icon tiny> do_not_disturb</Icon>
              </Col>
              <Col m={1} s={1}></Col>
              <Col m={4} s={4}></Col>
              <Col m={2} s={2}>
                  <button className="reply-button">Reply</button>
              </Col>
          </Row>
        </CardPanel>
    )
}

export default Post