import React, { useContext } from "react";
import { BeatLoader } from "react-spinners";
import ProfileCard from "../components/ProfileCard";
import TasksCard from "../components/TasksCard";
import { ToDoContext } from "../context/Context";

function Home() {
  const { connectWallet, currentAccount, loading } = useContext(ToDoContext);

  return (
    <div className=" app_body row p-0 m-0 d-flex align-items-center justify-content-center  mb-5">
      <div className=" mt-4 mb-5 d-flex  justify-content-between">
        <div>
          <h3>ToDo DApps</h3>
        </div>
        <button
          onClick={connectWallet}
          type="button"
          className="custom_button d-flex align-items-center justify-content-center btn px-4 py-2 rounded-pill">
          {loading && !currentAccount ? <BeatLoader color="#1e5262" /> : currentAccount ? "Connected" : "Connect Wallet"}
        </button>
      </div>
      <div className="col-12 col-lg-6 col-xl-5 mb-5">
        <ProfileCard />
      </div>
      <div className="col mb-5">
        <TasksCard />
      </div>
    </div>
  );
}

export default Home;
