import React from "react";
import Image from "next/image";
import profileImg from "../../public/assets/monkey.jpg";
import etherLogo from "../../public/assets/etherium_logo.png";
import { FaUserAlt } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import BeatLoader from "react-spinners/BeatLoader";

const ProfileCard = () => {
  return (
    <div className="main_card pb-2 rounded-2 ">
      <Image
        src={profileImg}
        width={420}
        height={250}
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
          className="input_label"
          htmlFor="address">
          Wallet Address
        </label>

        <div className="input_field d-flex align-items-center mt-1 ">
          <FaUserAlt
            color="#fe00fe"
            size={20}
            cursor="pointer"
          />

          <input
            readOnly
            className="input_field border-0 rounded-0 py-2 px-2 mt-1"
            placeholder="No any wallet connected !"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          className="input_label"
          htmlFor="amount">
          Wallet Amount (ETH)
        </label>

        <div className="input_field d-flex align-items-center mt-1 ">
          <SiEthereum
            color="#fe00fe"
            size={40}
            cursor="pointer"
          />

          <input
            readOnly
            className="input_field border-0 rounded-0 py-2 px-2  "
            placeholder="0"
          />

          <BeatLoader
            color="#1e5262"
            className="input_field border-0 rounded-0 py-2 mt-1 "
          />

          <input
            readOnly
            className="input_field border-0 rounded-0 py-2 px-2  "
            placeholder="0"
          />
        </div>
      </div>

      <h4 className="text-center">Connect with Your Metamask</h4>
      <p className="text-center ">
        You must have to connect your Metamask <br /> wallet to add the task .
      </p>
      <button className="custom_button  my-2">Connect Wallet</button>
    </div>
  );
};

export default ProfileCard;
