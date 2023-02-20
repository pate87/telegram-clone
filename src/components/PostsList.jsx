import ListGroup from 'react-bootstrap/ListGroup';
import NewPost from './NewPost';
import Post from "./Post";
import { useState } from 'react';

function PostsList() {

    // Object destructuring to set up useState() method to update the JSX DOM
    // Current state of enterBody is an empty string which is declared in the useState() method with ('')
    const [enterBody, setEnterBody] = useState('');

    const [author, setAuthor] = useState('');

    // Function for costum event listener @onBodyChange with event as an argument and sets the setEnterBody as value - the argument event can called any name but usually it's called event
    function changeBodyHandler(event) {
        
        console.log(event.target.value);
        
        // Argument gets trickered by the event listener and output the value of the event - change value event
        // To update the @enterbody variable we use the second variable - setEnterBody as a methode
        setEnterBody(event.target.value);
    }


    // Sets the @author to a new state from the value given
    function authorChangeHandler(event) {
        setAuthor(event.target.value);
    }
    
    return (
        <>
            {/* Looks for events on onBodyChange costum (props) object from the @NewPost component which calls the @changeBodyHandler() and a method that sets @setEnterBody */}
            {/* The component NewPost calls another costume event - onAuthorChange which calls the event handler function @changeAuthorHandler */}
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={authorChangeHandler} />
            <ListGroup as='ul'>
                <ListGroup.Item as='li'>
                    {/* Post's costum prop (body) shows the current state of enterbody */}
                    {/* author shows the current state of author */}
                    <Post author={author} body={enterBody} />
                </ListGroup.Item>
                <ListGroup.Item as='li'>
                    <Post author="Jasmine" body="Message 2" />
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default PostsList;