import React from "react";

const TasksCard = () => {
  return (
    <div className="task_card">
      <div className="input_field  d-flex align-items-center  justify-content-between py-3  px-2">
        <input
          className=" input_field border-0   "
          placeholder="Add You task ..."
        />
        <div className=" px-4 d-flex container justify-content-end">
          <button
            type="button"
            className=" custom_button d-flex align-items-center justify-content-center btn px-4 py-2 rounded-pill">
            Add Task
          </button>
        </div>
      </div>

      <h2 className="text-center my-5">Your Recent Tasks</h2>

      <table className="table text_color ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>
              <div className=" d-flex gap-2 ">
                <button
                  type="button"
                  className="custom_button d-flex align-items-center justify-content-center btn px-2 py-1 rounded-pill">
                  Complete
                </button>

                <button
                  type="button"
                  className="custom_button d-flex align-items-center justify-content-center btn px-3 py-1 rounded-pill">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TasksCard;
