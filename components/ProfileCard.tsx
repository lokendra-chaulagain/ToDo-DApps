import Image from "next/image";
import React, { useState, useEffect } from "react";
import profileImg from "../public/assets/monkey.jpg";
import etherLogo from "../public/assets/etherium_logo.png";
import { FaUserAlt } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { ethers } from "ethers";

const ProfileCard = () => {
  const [currentWalletAddress, setCurrentWalletAddress] = useState("");
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    getCurrentlyConnectedWalletAddress();
  });

  //connecting the wallet
  const walletConnect = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        //if metamask is installed get all accounts
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        console.log(`Connected to the chain ${chainId} successfully`);

        const goerliChainId = "0x5";
        if (chainId == goerliChainId) {
          setCorrectNetwork(true);
          console.log("You are connected to Goerli Test Network ");
        } else {
          setCorrectNetwork(false);
          alert("You are not connected to Goerli Test Network !!!");
        }
        setCurrentWalletAddress(accounts[0]);
        setIsUserLoggedIn(true);
      } catch (error) {}
    } else {
      console.log("Please install metamask !!!");
    }
  };
  console.log("Your wallet address is", currentWalletAddress);

  //in background we are connected but in frontend we loose it lets handle it
  //already connected just fetching after refresh also

  const getCurrentlyConnectedWalletAddress = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        //we are already connected we just need that account
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setCurrentWalletAddress(accounts[0]);
        } else {
          console.log("Wallet is not connected play try again !!! ");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      //ask user to install install
      console.log("Please install metamask");
    }
  };

  return (
    <div className="pb-2 rounded-2 " style={{ width: "26rem", backgroundColor: "#fe00fe", border: "2px solid #00befe" }}>
      <Image src={profileImg} width={420} height={250} objectFit="cover" alt="" />

      <h4 className="text-center">Ethers ToDo DApps</h4>
      <div className="d-flex align-items-center justify-content-center">
        <Image src={etherLogo} width={100} height={100} objectFit="cover" alt="" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text" style={{ backgroundColor: "#00febe", border: "1px solid #00befe " }}>
            <FaUserAlt color="#fe00fe" size={20} cursor="pointer" />
          </span>
          <input type="text" className="form-control" placeholder="Wallet Address" style={{ backgroundColor: "#00febe", border: "1px solid #00befe " }} />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <div className="input-group input-group-lg mb-3  ">
          <span className="input-group-text" style={{ backgroundColor: "#00febe", border: "1px solid #00befe " }}>
            <SiEthereum color="#fe00fe" size={24} cursor="pointer" />
          </span>
          <input type="text" className="form-control " placeholder="Balance" style={{ backgroundColor: "#00febe", border: "1px solid #00befe " }} />
        </div>
      </div>

      <h4 className="text-center">Connect with Your Metamask</h4>
      <p className="text-center ">
        You must have to connect your Metamask <br /> wallet to add the task .
      </p>
      <button onClick={walletConnect} className="rounded-pill my-2" style={{ outline: "none", padding: "11px", fontSize: "16px", fontWeight: "500", width: "100%", backgroundColor: "#00febe", border: "1px solid #00befe " }}>
        {isUserLoggedIn && correctNetwork && currentWalletAddress ? currentWalletAddress : "Connect Wallet"}
      </button>
    </div>
  );
};

export default ProfileCard;
