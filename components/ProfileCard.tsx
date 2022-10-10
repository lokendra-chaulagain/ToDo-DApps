import Image from "next/image";
import React from "react";
import profileImg from "../public/assets/monkey.jpg";
import etherLogo from "../public/assets/etherium_logo.png";
import { FaUserAlt } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";

const ProfileCard = () => {
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
      <button className="rounded-pill my-2" style={{ outline: "none", padding: "11px", fontSize: "20px", fontWeight: "500", width: "100%", backgroundColor: "#00febe", border: "1px solid #00befe " }}>
        Connect Wallet{" "}
      </button>
    </div>
  );
};

export default ProfileCard;
