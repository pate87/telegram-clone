import ListGroup from 'react-bootstrap/ListGroup';
import NewPost from './NewPost';
import Post from "./Post";
import { useState } from 'react';

function PostsList() {

    const [message, setMessage] = useState('');

    const [sender, setSender] = useState('');

    function messageChangeHandler(event) {
        
        console.log(event.target.value);
        setMessage(event.target.value);
    }

    function senderChangeHandler(event) {
        setSender(event.target.value);
    }
    
    return (
        <>
            <NewPost onMessageChange={messageChangeHandler} onSenderChange={senderChangeHandler} />
            <ListGroup as='ul'>
                <ListGroup.Item as='li'>
                    <Post sender={sender} message={message} />
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default PostsList;