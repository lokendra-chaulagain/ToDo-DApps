import React, { useContext } from "react";
import Image from "next/image";
import profileImg from "../../public/assets/monkey.jpg";
import etherLogo from "../../public/assets/etherium_logo.png";
import { FaUserAlt } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import BeatLoader from "react-spinners/BeatLoader";
import { ToDoContext } from "../context/Context";

const ProfileCard = () => {
  const { connectWallet, currentAccount, accountBalance, loading } = useContext(ToDoContext);
  return (
    <div className="main_card pb-2 rounded-2 ">
      <Image
        src={profileImg}
        width={1000}
        height={350}
        objectFit="cover"
        alt=""
      />

      <h4 className="text-center">Ethers ToDo DApps</h4>
      <div className="d-flex align-items-center justify-content-center">
        <Image
          src={etherLogo}
          width={100}
          height={100}
          objectFit="cover"
          alt=""
        />
      </div>

      <div className="mt-3 ">
        <label
          className="input_label px-2"
          htmlFor="address">
          Wallet Address
        </label>

        <div className="input_field d-flex align-items-center mt-1 px-2 ">
          <FaUserAlt
            color="#1e5262"
            size={20}
            cursor="pointer"
          />

          <input
            value={currentAccount && currentAccount}
            readOnly
            className="input_field border-0 rounded-0 py-2 px-2 mt-1"
            placeholder="No any wallet connected !"
          />
        </div>
      </div>

      <div className="mt-4 ">
        <label
          className="input_label px-2"
          htmlFor="amount">
        Balance (ETH)
        </label>

        <div className="input_field d-flex align-items-center mt-1 px-1">
          <SiEthereum
            color="#1e5262"
            size={30}
            cursor="pointer"
          />

          {currentAccount && accountBalance ? (
            <input
              value={accountBalance}
              readOnly
              className="input_field border-0 rounded-0 py-2 px-2  "
              placeholder="0"
            />
          ) : currentAccount && !accountBalance ? (
            <div className="d-flex">
              <BeatLoader
                color="#1e5262"
                className="input_field border-0 rounded-0 py-2 mt-1 "
              />
            </div>
          ) : (
            <input
              value={accountBalance}
              readOnly
              className="input_field border-0 rounded-0 py-2 px-2  "
              placeholder="0"
            />
          )}
        </div>
      </div>

      {!currentAccount && <div>
        <h4 className="text-center mt-4">Connect with Your Metamask</h4>
        <p className="text-center  ">
          You must have to connect your Metamask <br /> wallet to add the task .
        </p>
      </div>
}
      {loading && !currentAccount && (
        <div
          className="alert custom_alert mt-4 mx-2 text-center rounded-1"
          role="alert">
          Please accept the Wallet connection request !!
        </div>
      )}
      <div className="mt-4 px-2">
        <button
          onClick={connectWallet}
          type="button"
          className=" w-100 card_connect_button d-flex align-items-center justify-content-center btn px-4   rounded-pill">
          {loading && !currentAccount ? (
            <BeatLoader
              color="#1e5262"
              className="custom_spinner"
            />
          ) : currentAccount ? (
            "Connected"
          ) : (
            "Connect Wallet"
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
