# NFT Telegram Clone
## Installation guid
1. Clone the repo
2. Go into the project folder
3. Run 
```
npm install
``` 
4. Run to install the necessary Bottstrap library
```
npm install react-bootstrap bootstrap
```
5. To check whether all npm packages are installed run
```
npm list
```
- the list should look like this
```├── @types/react-dom@18.0.11
├── @types/react@18.0.28
├── @vitejs/plugin-react@3.1.0
├── @web3modal/ethereum@2.1.2
├── @web3modal/react@2.1.2
├── @xmtp/xmtp-js@7.12.0
├── ethers@5.7.2
├── npm-check@6.0.1
├── react-dom@18.2.0
├── react@18.2.0
├── vite@4.1.3
└── wagmi@0.11.7
```
5. To start the localhost run
```
npm run dev
```

## The running app

### Phase 1
The app should work with a test chat blockchain contract on the Goerli testnet.
The chat contract sends and receive messages through blockchain.

### Phase 2
The app is connects to the xmtp api and sends and recieve messages from and to the test bot contract.
The app uses the "GM" turoial from the xmtp site

 - web3modal - to connect the wallet 
 - wagmi - to connect the blockchain with the xmtp api 

### Todo
Next steps are
- should work with other wallet connection functions as written in the test chat
- send and receive messages from and to other real wallets