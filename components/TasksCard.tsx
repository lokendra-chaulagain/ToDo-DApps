import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { ethers } from "ethers";
import { TaskContractAddress } from "../config";
import TaskAbi from "../backend/contracts/TaskContract.json";

const TasksCard = () => {
  const [textInput, setTextInput] = useState("");
  console.log(textInput);

  const [tasks,setTasks]=useState([])

  //addTask
  const addTask = async (e: any) => {
    e.preventDefault();
    let task = {
      taskText: textInput,
      isDeleted: false,
    };

    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(TaskContractAddress, TaskAbi.abi, signer);
        TaskContract.addTask(task.taskText, task.isDeleted).then((res: any)=>){
          setTasks([...tasks,task])
          
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card " style={{ height: "81.5vh", backgroundColor: "#fe00fe", border: "2px solid #00befe" }}>
      <div className="card-body">
        <div className="input-group input-group-lg mb-5  ">
          <textarea value={textInput} onChange={(e) => setTextInput(e.target.value)} className="form-control " placeholder="Add You task ..." style={{ backgroundColor: "#00febe", border: "1px solid #00befe " }} />
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
