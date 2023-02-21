import { Col, Container, Row } from "react-bootstrap";
import WalletBtn from "./WalletBtn";

function Header() {
    return(
        <Container>
            <Row className="align-items-center">
                <Col>
                    <h1>Logo</h1>
                </Col>
                <Col className="align-item-center">
                    <WalletBtn />
                </Col>
            </Row>
        </Container>
    );
}

export default Header;