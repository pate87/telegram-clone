import Card from 'react-bootstrap/Card';

function Post(props) {

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <p>{props.sender}</p>
                </Card.Title>
                <Card.Text>
                    <p>{props.message}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Post;