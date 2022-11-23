import logo from "./logo.svg";
import "./App.css";
import { ethers } from "ethers";
import config from "./config";
import { useState, useEffect } from "react";

const currentConfig = config.testnet;
const Address = currentConfig.Address;
const ABI = config.abi.ABI;

function App() {
  const [contract, setContract] = useState("");
  useEffect(() => {
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
  console.log("accounts =>", accounts);
  if(accounts.length > 0){
    await connect();}
  },[]);



  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

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

  async function exec() {
    // let mint = await contract.adminMint([8]);
    // console.log("minting result:", mint);

    let approve = await contract.approve(contract.address, 8);
    console.log(approve);
  }

  return (
    <div className="App">
      <button onClick={connect}>connect</button>
      <button onClick={exec}>Mint</button>
    </div>
  );
}

export default App;
