import ListGroup from 'react-bootstrap/ListGroup';
import NewPost from './NewPost';
import Post from "./Post";
import { useState } from 'react';
import { Button } from 'react-bootstrap';

import { ethers } from "ethers";
import Header from './Header';

function PostsList() {

    const [message, setMessage] = useState('');

    // const [sender, setSender] = useState('');

    const [currentAccount, setCurrentAccount] = useState(null);

    function messageChangeHandler(event) {
        
        console.log(event.target.value);
        setMessage(event.target.value);
    }

    function senderChangeHandler(event) {
        setSender(event.target.value);
    }

    const getWalletAddress = async () => {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts");
            const currentAddress = await provider.getSigner().getAddress();

            console.log(currentAddress);
            setCurrentAccount(currentAddress);
        }
    }
    
    return (
        <>
            <Header onWalletAddressClick={getWalletAddress} />
            <NewPost onMessageChange={messageChangeHandler} onSenderChange={senderChangeHandler} />
            <ListGroup as='ul'>
                <ListGroup.Item as='li'>
                    <Post sender={currentAccount} message={message} />
                </ListGroup.Item>
            </ListGroup>
            <Button>Send</Button>
        </>
    );
}

export default PostsList;