import styles from "./Mint.module.css";
import { ethers } from "ethers";
import config from "./config";
import { useState, useEffect } from "react";

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

        if (chainId !== 4) {
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
        params: [{ chainId: "0x" + "4".toString(16) }],
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function mint() {
    let mint = await contract.adminMint(1);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(await contract.balanceOf());
  }

  return (
    <>
      <h2>Mint</h2>

      <br />
      <div className={styles.box}>
        <div className={styles.coll}>
          <div className={styles.name}>
            <span>인적사항 </span>
            <span className={styles.even}>사용자 주소 </span>
          </div>
          <div className={styles.name}>
            <div className={styles.sid}>
              <input className={styles.input} type="text" />
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.even}>
              <input className={styles.input2} type="text" />
            </div>
          </div>
        </div>
        <button className={styles.submit} onClick={mint}>
          Mint
        </button>
      </div>
    </>
  );
}

export default App;
