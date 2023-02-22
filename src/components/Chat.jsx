// import '../App.css';
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Chat(props) {
    return (
        <>
        {/* <Container className="chatText"> */}
            {/* <Row> */}
            <Card>
                <Row className="align-items-center">
                    <Col className="d-flex justify-content-center">
                        {/* <img className="chatImage" src={props.image} /> */}
                        <Card.Img className="chatImage rounded-circle align-middle" src={"./img/IMG_0337.JPG"} />
                    </Col>
                    <Col>
                        <Card.Body>
                        <Card.Title>
                            <p>{props.data}</p>
                        </Card.Title>
                        <Card.Text>
                            <p>{props.text}</p>
                        </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            {/* </Row> */}
        {/* </Container> */}
        </>
    );
}

export default Chat;