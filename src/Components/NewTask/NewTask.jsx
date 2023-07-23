import React, { useState } from "react";
import plus from "../../Assets/newTask.svg";

const NewTask = ({ addTask }) => {
    const [newTask, setNewTask] = useState("");
    const [newTaskDescription, setNewTaskDescription] = useState("");

    function AddNewTask() {
        if (newTask === "") return;
        addTask(newTask, newTaskDescription);
        setNewTask("");
        setNewTaskDescription("");
        document.getElementById("1").focus();
    }
    function enterPressed(e) {
        if (e.key === "Enter" && newTask !== "") {
            addTask(newTask, newTaskDescription);
            setNewTask("");
            setNewTaskDescription("");
            document.getElementById("new-task").focus();
        }
    }

    return (
        <tr>
            <td>
                <div className="input-task">
                    <input
                        type="text"
                        onChange={(e) => setNewTask(e.target.value)}
                        value={newTask}
                        placeholder="Nova tarefa..."
                        onKeyDown={enterPressed}
                    />
                </div>
                <div className="input-description">
                    <input
                        id="in"
                        type="text"
                        onChange={(e) => setNewTaskDescription(e.target.value)}
                        value={newTaskDescription}
                        placeholder="Descrição da tarefa..."
                        onKeyDown={enterPressed}
                    />
                </div>
            </td>
            <td></td>
            <td>
                <img
                    className="new-task"
                    onClick={AddNewTask}
                    src={plus}
                    width={"15px"}
                />
            </td>
        </tr>
    );
};

export default NewTask;