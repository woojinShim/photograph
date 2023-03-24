import styles from "./Mint.module.css";
import { ethers } from "ethers";
import SmartContract from "./config";
import { useState } from "react";
import Web3 from "web3";

const nftAddress = SmartContract.nftAddress;
const nftABI = SmartContract.abi.nftABI;

const web3 = new Web3(process.env.REACT_APP_MUMBAI_RPC_URL);

function getElem(elemId) {
  return document.getElementById(elemId);
}

function App() {
  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        let chainId = await window.ethereum.request({ method: "eth_chainId" });
        if (chainId === "0x1") {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x13881",
                rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
                chainName: "Mumbai Testnet",
                nativeCurrency: {
                  name: "MATIC",
                  symbol: "MATIC",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
              },
            ],
          });
        }
        if (chainId !== "0x13881") {
          await switchChain();
        }

        getElem("connectMessage").innerHTML =
          "지갑이 연결되었어요 아래에 민팅 버튼를 눌러주세요.";
      } catch (e) {
        console.log(e);
      }
    } else {
      window.open("https://metamask.io/download/", "_blank");
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
    const acc = await window.ethereum.request({
      method: "eth_accounts",
    });
    getElem("claimMessage").innerHTML = "민팅대기";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const admin = new ethers.Wallet(
      process.env.REACT_APP_PRIVATE_KEY,
      provider
    );
    const Nft = new ethers.Contract(nftAddress, nftABI, admin);
    const gasLimit = (await provider.getBlock("latest")).gasLimit.toString();
    const gasPrice = (await provider.getGasPrice()).toString();
    console.log(gasLimit, gasPrice);
    getElem("claimMessage").innerHTML = "민팅중";
    let tx = await Nft.mint(acc[0], 1, {
      gasPrice: gasPrice,
    });

    let res = tx.hash;
    console.log(res);
    getElem("claimMessage").innerHTML = "30초 정도 기다려 주세요 ...";
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
    ).innerHTML = `트랜적션 내역은 https://mumbai.polygonscan.com/tx/${res} 오픈씨 확인은 https://testnets.opensea.io/assets/mumbai/0x845a250AfF3a9371184a1EF83De9099A8AE6a335/${Ti}`;
  }

  return (
    <>
      <div className={styles.coll}></div>
      <h2>고양이 가족 NFT </h2>
      <br />
      <div className={styles.box}>
        <div className={styles.coll}></div>
        <button className={styles.submit} onClick={connect}>
          메타마스크 지갑 연결하기
        </button>
        <div id="connectMessage"></div>
        <div className={styles.coll}></div>
        <button className={styles.submit} onClick={mint}>
          NFT 프리민팅
        </button>
        <div id="claimMessage"></div>
        <div className={styles.coll}></div>
      </div>
    </>
  );
}

export default App;
