import styles from "./Mint.module.css";
import { ethers } from "ethers";
import SmartContract from "./config";
import { useState, useEffect } from "react";
import Web3 from "web3";

const nftAddress = SmartContract.nftAddress;
const nftABI = SmartContract.abi.nftABI;

const web3 = new Web3(process.env.REACT_APP_MUMBAI_RPC_URL);

function getElem(elemId) {
  return document.getElementById(elemId);
}

function App() {
  const [nft, setNft] = useState("");
  const [provider, setProvider] = useState("");
  const [accounts, setAccounts] = useState("");

  useEffect(() => {
    async function exec() {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      console.log("accounts =>", accounts);
      if (accounts.length > 0) {
        await connect();
        setAccounts(accounts);
      }
    }
    exec();
  }, []);

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        let chainId = await window.ethereum.request({ method: "eth_chainId" });

        if (chainId !== "0x13881") {
          await switchChain();
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        const admin = new ethers.Wallet(
          process.env.REACT_APP_PRIVATE_KEY,
          provider
        );
        const Nft = new ethers.Contract(nftAddress, nftABI, admin);

        setNft(Nft);

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

  async function mint() {
    const gasLimit = (await provider.getBlock("latest")).gasLimit.toString();
    const gasPrice = (await provider.getGasPrice()).toString();
    console.log(gasLimit, gasPrice);

    let tx = await nft.mint(accounts[0], 1, {
      gasPrice: gasPrice,
    });

    let res = tx.hash;
    console.log(res);
    getElem("claimMessage").innerHTML = "waiting for mint tx confirmation ...";
    await tx.wait();
    let txHash = await provider.getTransaction(res);
    console.log(txHash);
    let Ti;
    /** Get Token Number */
    const receipt = await web3.eth.getTransactionReceipt(res);
    let n = receipt.logs.length - 1;
    for (let i = 0; i < n; i++) {
      const tokenId = web3.utils.hexToNumber(receipt.logs[i].topics[3]);
      Ti = tokenId;
    }
    getElem(
      "claimMessage"
    ).innerHTML = `Minted for https://mumbai.polygonscan.com/tx/${res} Opensea URL is https://testnets.opensea.io/assets/mumbai/0x845a250AfF3a9371184a1EF83De9099A8AE6a335/${Ti}`;
  }

  return (
    <>
      <div className={styles.coll}></div>
      <h2>Woojin Shim NFT </h2>
      <br />
      <div className={styles.box}>
        <div className={styles.coll}></div>
        <button className={styles.submit} onClick={connect}>
          Connect Wallet
        </button>
        <div className={styles.coll}></div>
        <button className={styles.submit} onClick={mint}>
          Mint NFT
        </button>
        <div id="claimMessage"></div>
        <div className={styles.coll}></div>
      </div>
    </>
  );
}

export default App;
