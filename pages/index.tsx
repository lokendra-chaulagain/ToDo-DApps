import React from "react";
import ProfileCard from "../components/ProfileCard";
import TasksCard from "../components/TasksCard";

function Home() {
  return (
    <div>
      <div className="row p-0 m-0 d-flex align-items-center justify-content-center px-5 " style={{ height: "100vh", backgroundColor: "#120458" }}>
        <div className="col">
          <ProfileCard />
        </div>
        <div className="col">
          <TasksCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
