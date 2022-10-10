import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const TasksCard = () => {
  return (
    <div className="card " style={{ height: "81.5vh", backgroundColor: "#fe00fe", border: "2px solid #00befe" }}>
      <div className="card-body">
        <div className="input-group input-group-lg mb-5  ">
          <textarea className="form-control " placeholder="Add You task ..." style={{ backgroundColor: "#00febe", border: "1px solid #00befe " }} />
          <span className="input-group-text" style={{ backgroundColor: "#00febe", border: "1px solid #00befe " }}>
            <RiSendPlaneFill color="#fe00fe" size={32} cursor="pointer" />
          </span>
        </div>

        <h2 className="text-center mb-4">Your Recent Tasks</h2>

        <div className="d-flex align-items-center  justify-content-between">
          <div className="d-flex gap-3  ">
            <h5>#1</h5>
            <h5>ddd</h5>
          </div>
          <div className="d-flex gap-2">
            <button className="rounded-pill my-2 py-1 px-2" style={{ outline: "none", fontSize: "16px", fontWeight: "500", width: "100%", backgroundColor: "#00febe", border: "1px solid #00befe " }}>
              Complete
            </button>
            <button className="rounded-pill my-2 py-1 px-2" style={{ outline: "none", fontSize: "16px", fontWeight: "500", width: "100%", backgroundColor: "#00febe", border: "1px solid #00befe " }}>
              Delete
            </button>
          </div>
        </div>
        <hr className="my-2" style={{ height: "2px", backgroundColor: "#120458", color: "#120458 " }} />
      </div>
    </div>
  );
};

export default TasksCard;
