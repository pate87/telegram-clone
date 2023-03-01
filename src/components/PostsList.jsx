import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
// Web3Modal
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3Modal, Web3Button } from "@web3modal/react";

// Wagmi
import { configureChains, createClient, useAccount } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { fetchSigner } from '@wagmi/core';

// Import XMTP Package
import { Client, DecodedMessage, SortDirection } from "@xmtp/xmtp-js";

// Test Address
const PEER_ADDRESS = "0x937C0d4a6294cdfa575de17382c7076b579DC176"; //bot address

// Wagmi Chains
const chains = [ mainnet, polygon];
// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "3be6152ca71d7cbef03545dc2da2e605" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});
// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
// type MessageListProps = {
//   msg: DecodedMessage[];
// };

// // const MessageList = ({ msg }) => {
// //   return (
// //     <View>
// //       {msg.map((message, index) => (
// //         <Text key={index}>{message.content}</Text>
// //       ))}
// //     </View>
// //   );
// // };

// const MessageList = ({ msg }) => {
//   return (
//     <ul>
//       {msg.map((message, index) => (
//         <li key={index}>{message.content}</li>
//       ))}
//     </ul>
//   );
// };

const App = () => {
  // Connect Account to wagmi account
  const { isConnected } = useAccount()

  // Create empty messages array
  const [messages, setMessages] = useState([]);

  // setClient from @initXmtp
  const [client, setClient] = useState();

  // set the xmtp Client Address which signed the xmtp api
  const [xmtpClientAddress, setXmtpClientAddress] = useState();

  // Initiate the xmtp()
  const initXmtp = async function () {

    // Calls the @wagmi signer 
    const signer = await fetchSigner();

    // Client class initiates connection to the XMTP network with a walletaddress (signer)
    const xmtp = await Client.create(signer, { env: "production" });

    /**
    * Conversations allows you to view ongoing 1:1 messaging sessions with another wallet
    */
    // Creates a new conversatoin (newConversation) with the given address to call - example @PEER_ADDRESS
    const conversation = await xmtp.conversations.newConversation(
      PEER_ADDRESS
    );

    const messages = await conversation.messages({
      direction: SortDirection.SORT_DIRECTION_DESCENDING,
    });

    setClient(conversation);
    setMessages(messages);
    setXmtpClientAddress(xmtp.address);
  };

  useEffect(() => {
    if (client && xmtpClientAddress) {
      const streamMessages = async () => {
        const newStream = await client.streamMessages();
        for await (const msg of newStream) {
          setMessages((prevMessages) => {
            const messages = [...prevMessages];
            messages.unshift(msg);
            return messages;
          });
        }
      };
      streamMessages();
    }
  }, [client, xmtpClientAddress]);

  const onSendMessage = async () => {
    const message = "gm XMTP bot!";
    await client.send(message);
  };

  const MessageList = ({ msg }) => {
    return (
      <ul>
        {msg.map((message, index) => (
          <li key={index}>{message.content}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="App">
      <Web3Button />
      <Web3Modal projectId="3be6152ca71d7cbef03545dc2da2e605" ethereumClient={ethereumClient} />
      {isConnected && xmtpClientAddress && (
        <>
          <MessageList msg={messages} />
          <Button onClick={onSendMessage}>Send GM</Button>
        </>
      )}
      {isConnected && !xmtpClientAddress && (
        <Button onClick={initXmtp}>Connect to XMTP</Button>
      )}
    </div>
  );
}

export default App;
