import ListGroup from 'react-bootstrap/ListGroup';
import NewPost from './NewPost';
import Post from "./Post";
import { useEffect, useState } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';

import { ethers } from "ethers";
import Header from './Header';
import Chat from './Chat';

import ABI from './ABI.json'

import { Client } from '@xmtp/xmtp-js'

function PostsList() {

    // const [message, setMessage] = useState('');

    // const [sender, setSender] = useState('');

    const [currentAccount, setCurrentAccount] = useState(null);

     /**
     * @pagination gets kinda a number of a @page to display more messages
     * @NFT and @NFTList variable gets called on @getNFTs function
     */
     const [message, setMessage] = useState("");
     const [allChats, setAllChats] = useState([]);
     const [pagination, setPagination] = useState(0);
     const [NFT, setNFT] = useState(0);
     const [NFTList, setNFTList] = useState([])

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

    const getMessages = async () => {
        // Get the contract 
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            "0x027778474953c38aEf46ADE7b08357C88773f4af",
            ABI,
            signer
        );

        /**
         * Setting up a function to get the switched NFT token from the @onChange @nftId
         */
        // getNFTs();
        // Get the current wallet address 
        const currentAddress = provider.getSigner().getAddress();
        console.log("Show current wallet address: " + currentAddress);

        const amountOfNFTs = await contract.balanceOf(currentAddress);
        console.log("Show balanceOf current wallet address: " + amountOfNFTs);

        for(let i = 0; i < amountOfNFTs; i++) {
            const currentNFT = await contract.tokenOfOwnerByIndex(currentAddress, i);
            setNFTList(old => [...old, currentNFT]);
            console.log("Show current NFT: " + currentNFT);
        }

        /**
         * @page the number of how many messages gets displayed on a @page
         * @totalMessages get all the messages from the blockchin
         * @starting counts the messages back
         */

        const totalMessages = await contract.totalMessages();
        console.log("Running totalMessages:");
        console.log(totalMessages);

        const page = 10;
        // const pagination = 4;
        // const totalMessages = 150
        const starting = totalMessages - (page * pagination) - 1;

        setAllChats([]);

        /**
         * Loops through all the @totalMessages from the blockchain and push the @currentMessage (i) to the array @setAllChats
         */
        for(let i = starting; i > starting - page; i--) {
            console.log("Show loop from totalMessages: " + i);
            if(i >= 0) {
                const currentMessage = await contract.Messages(i);
                console.log("Running currentMessages:");
                console.log(currentMessage);
                setAllChats(prevChat => [...prevChat, currentMessage]);
            }
        }
    }

    const sendMessage = async () => {
        console.log("Running sendMessage");
        // Get the contract 
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            "0x027778474953c38aEf46ADE7b08357C88773f4af",
            ABI,
            signer
        );

        const addMessage = await contract.addMessage(message, NFT)
        console.log("addMessage(): " + addMessage);
        setMessage(addMessage);
    }

    const chainChanged = () => {
        // Reloads the website
        window.location.reload();
    };
    
    return (
        <>
            <Header onWalletAddressClick={getWalletAddress} />
                    <NewPost onMessageChange={messageChangeHandler} onSenderChange={senderChangeHandler} />

                    <Button className='my-3 me-3' onClick={sendMessage} >Send</Button>
                    <Button className='my-3' onClick={getMessages}>Get Messages</Button>
            <Container>
                {allChats.map((item) => (
                    <Row>
                            <Chat image={item.image} text={item.sentMessage} data={`NFT: ${item.nftId}`} />
                    </Row>
                ))}
            </Container>
        </>
    );
}

export default PostsList;