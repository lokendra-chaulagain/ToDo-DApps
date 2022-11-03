import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { ethers } from "ethers";

const TasksCard = () => {
  return (
    // <div className="card task_card">
    //   <div className="card-body">
    //

    //

    //     <div className="d-flex align-items-center  justify-content-between">
    //       <div className="d-flex gap-3  ">
    //         <h5>#1</h5>
    //         <h5>ddd</h5>
    //       </div>

    //
    //     </div>
    //   </div>
    // </div>

    <div className="task_card">
      <div className="input_field  d-flex align-items-center  justify-content-between py-3  px-2">
        <input
          className=" input_field border-0   "
          placeholder="Add You task ..."
        />
        <button
          type="button"
          className="custom_button  rounded-pill py-2 px-5">
          Add
        </button>
      </div>

      <h2 className="text-center mb-4">Your Recent Tasks</h2>

      <table className="table table-hover ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td className="pt-3 px-4 d-flex container justify-content-end">
              <button
                type="button"
                className="custom_button d-flex align-items-center justify-content-center btn px-2 py-1 rounded-pill">
                Complete
              </button>

              <button
                type="button"
                className="custom_button d-flex align-items-center justify-content-center btn px-2 py-1 rounded-pill">
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td className="pt-3 px-4 d-flex container justify-content-end">
              <button
                type="button"
                className="custom_button d-flex align-items-center justify-content-center btn px-2 py-1 rounded-pill">
                Complete
              </button>

              <button
                type="button"
                className="custom_button d-flex align-items-center justify-content-center btn px-2 py-1 rounded-pill">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TasksCard;
