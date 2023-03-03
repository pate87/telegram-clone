import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostsList from './components/PostsList';

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <PostsList />
          </Col>
        </Row>
       </Container>
    </>
  );
}

export default App;