import styles from "./Mint.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import SmartContract from "./config";
import { useState, useEffect } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import GraphEx from './graphEx';
import { parseEther } from "ethers/lib/utils";
import axios from 'axios'

// Querying the Blockchain
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.thegraph.com/subgraphs/name/tomntomson/tnmeta-marketplace"
})

const marketAddress = SmartContract.marketAddress;
const marketABI = SmartContract.abi.marketABI;
const nftAddress = SmartContract.nftAddress;
const nftABI = SmartContract.abi.nftABI;
const byteCode = SmartContract.bytecode

function App() {
  const [market, setMarket] = useState("");
  const [nft, setNft] = useState("");
  const [signer, setSigner] = useState('')
  const [image, setImage] = useState('')
  const [resultContract, setResultContract] = useState('')
  useEffect(() => {
    async function exec() {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      console.log("accounts =>", accounts);
      if (accounts.length > 0) {
        await connect();
      }
      const res = await axios.get('http://54.164.86.134:8080/v1/nftList')
      console.log(res.data.result.itemsells)
    }
    exec();
  }, []);

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        let chainId = await window.ethereum.request({ method: "eth_chainId" });

        if (chainId !== 80001) {
          await switchChain();
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setSigner(signer)

        const Market = new ethers.Contract(marketAddress, marketABI, signer);
        const Nft = new ethers.Contract(nftAddress, nftABI, signer);
        setMarket(Market);
        setNft(Nft)
        console.log(Market);
        console.log(Nft);
      } catch (e) {
        console.log(e);
      }
    } else {
    }
  }

  async function switchChain() {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x13881" /*"0x" + "80001".toString(16)*/ }],
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function sell() {
    let approveRes = await nft.approve(marketAddress, 36)
    approveRes.wait(1)
    console.log(approveRes)

    let price = parseEther('0.1').toString()
    let sell = await market.sellNft(nftAddress, 36, price)
    console.log(sell)
  }

  async function imageview() {
    const requestURL = await nft.tokenURI(2)
    const tokenURIResponse = await (await fetch(requestURL)).json()
    const imageURI = tokenURIResponse.image
    setImage(imageURI)
  }

  async function contractDeploy() {
    const factory = new ethers.ContractFactory(nftABI, byteCode, signer)
    const res = await factory.deploy()
    console.log(res.address)
    setResultContract(res.address)
  }

  async function mint() {
    const nftContract = new ethers.Contract(resultContract, nftABI, signer)
    const res = await nftContract.mint('0x902c18fF520EE2a51775Ec52FF2D56bbE3b02a4c', 2)
    console.log(res)
  }

  return (
    <>
      <ApolloProvider client={client}>
        <h2>Contract</h2>
        <br />
        <div className={styles.box}>
          <button className={styles.submit} onClick={connect}>
            Connect
          </button>
          <div className={styles.coll}></div>
          <button className={styles.submit} onClick={sell}>
            SellNft
          </button>
          <div className={styles.coll}></div>
          <button className={styles.submit} onClick={imageview}>
            image
          </button>
          <div className={styles.coll}></div>
            <img src={image} /> 
          <div className={styles.coll}></div>
          <button className={styles.submit} onClick={contractDeploy}>
            Deploy
          </button>
          <div className={styles.coll}></div>
          <button className={styles.submit} onClick={mint}>
            Mint
          </button>
        </div>

        <Router>
          <Routes>
            <Route path="/graph" element={<GraphEx />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
