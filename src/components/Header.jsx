import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { WalletContext } from "../contexts/WalletContext";
import { XmtpContext } from "../contexts/XmtpContext";

function Header(props) {

    const { connectWallet, walletAddress, signer } = useContext(WalletContext);
    const [providerState] = useContext(XmtpContext);

    return (
        <Container className="header flex align-center justify-between">
            <Row className="align-items-center">
                <Col className="d-flex justify-content">
                {/* <Col> */}
                    <h1>Logo</h1>
                    {walletAddress ? (
                        <Col className="d-flex align-center header-mobile">

                        <h3>{(walletAddress)}</h3>
                        {!providerState.client && (
                            <Button onClick={() => providerState.initClient(signer)}>Connect to XMTP</Button>
                        )}
                        </Col>
                // </Col>
                ) : (
                    <Col className="d-flex justify-content">
                        <Button variant="primary" onClick={connectWallet}>Connect wallet</Button>
                    </Col>
                )}
                </Col>
            </Row>
        </Container>
    );
}

export default Header;