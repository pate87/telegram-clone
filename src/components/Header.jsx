import { Button, Col, Container, Row } from "react-bootstrap";

function Header(props) {

    return(
        <>
            <Row className="align-items-center">
                <Col>
                    <h1>Logo</h1>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button variant="primary" onClick={props.onWalletAddressClick}>Connect Wallet</Button>
                </Col>
            </Row>
        </>
    );
}

export default Header;