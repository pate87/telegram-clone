import { Container } from "react-bootstrap";
import WalletBtn from "./WalletBtn";

function Header() {
    return(
        <Container d-flex>
            <h1>Header</h1>
            <WalletBtn />
        </Container>
    );
}

export default Header;