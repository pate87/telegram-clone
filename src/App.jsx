import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostsList from './components/PostsList';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
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