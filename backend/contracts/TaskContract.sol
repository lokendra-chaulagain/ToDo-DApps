// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract TaskContract {
    event AddTask(address recipient, uint256 taskId);
    event DeleteTask(uint256 taskId, bool isDeleted);

    struct Task {
        uint256 id;
        string taskText;
        bool isDeleted;
    }

    Task[] private tasks;
    // tasks[
    // {id:1,taskText:"hello", isdeleted:"false"},
    // {id:1,taskText:"hello", isdeleted:"false"}
    // ]

    //mapping taskId to owner (taskId =>walletAddress)
    mapping(uint256 => address) taskToOwner;

    function addTask(string memory taskText, bool isDeleted) external {
        uint256 taskId = tasks.length;
        tasks.push(Task(taskId, taskText, isDeleted));
        taskToOwner[taskId] = msg.sender;
        emit AddTask(msg.sender, taskId);
    }

    function getAllMyTasks() external view returns (Task[] memory) {
        Task[] memory temporary = new Task[](tasks.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < tasks.length; i++) {
            if (taskToOwner[i] == msg.sender && tasks[i].isDeleted == false) {
                temporary[counter] = tasks[i];
                counter++;
            }
        }
        Task[] memory result = new Task[](counter);
        for (uint256 i = 0; i < counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    function deleteTask(uint256 taskId, bool isDeleted) external {
        if (taskToOwner[taskId] == msg.sender) {
            tasks[taskId].isDeleted; //isDeleted ==true
            emit DeleteTask(taskId, isDeleted);
        }
    }
}
