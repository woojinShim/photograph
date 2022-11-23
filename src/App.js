import styles from "./Mint.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import config from "./config";
import { useState, useEffect } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import GraphEx from './graphEx';

// Querying the Blockchain
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.thegraph.com/subgraphs/name/tomntomson/tnmeta-marketplace"
})

const currentConfig = config.testnet;
const Address = currentConfig.Address;
const ABI = config.abi.ABI;

function App() {
  const [contract, setContract] = useState("");
  useEffect(() => {
    async function exec() {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      console.log("accounts =>", accounts);
      if (accounts.length > 0) {
        await connect();
      }
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

        const Instance = new ethers.Contract(Address, ABI, signer);
        setContract(Instance);
        console.log(Instance);
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

  async function viewOwner() {
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    console.log(await contract.owner());
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
          <button className={styles.submit} onClick={viewOwner}>
            Owner
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
