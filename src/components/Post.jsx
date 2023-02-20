import Card from 'react-bootstrap/Card';

// Create a function with a object as arguemtn = (props)
function Post(props) {

    // Outputs only usual jsx (HTML)
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {/* With curly braces {} we can call variables from the given function */}
                    {/* Accesing the props object is like in usual JS */}
                    <p>{props.author}</p>
                </Card.Title>
                <Card.Text>
                    <p>{props.body}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Post;