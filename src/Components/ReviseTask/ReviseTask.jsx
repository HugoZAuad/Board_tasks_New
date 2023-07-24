import React, { useState } from "react";
import edit from "../../Assets/edit.svg";
import "./Index.scss";

const ReviseTask = ({ task, EditTask }) => {
    const [reviseTask, setReviseTask] = useState(task.title);
    const [reviseTaskDescription, setReviseTaskDescription] = useState(task.description);

    function EditTheTask(id) {
        if (!reviseTask) return alert("Escreva o título da Tarefa!");
        if (!reviseTaskDescription) return alert("Adicione uma descrição!");
        
        EditTask(id, reviseTask, reviseTaskDescription);
    }

    function enterPressed(e) {
        if (e.key === "Enter" && reviseTask !== "" && reviseTaskDescription !== "") {
            EditTask(task.id, reviseTask, reviseTaskDescription);
        } else if (e.key === "Enter" && !reviseTask) return alert("Escreva o título da Tarefa!");
        else if (e.key === "Enter" && !reviseTaskDescription) return alert("Adicione uma descrição!");
    }

    return (
        <tr key={task.id}>
            <td>
                <div className="edit-task">
                    <input
                        className="edit-inputs"
                        type="text"
                        onChange={(e) => setReviseTask(e.target.value)}
                        value={reviseTask}
                        placeholder={task.title}
                        onKeyDown={enterPressed}
                    />
                </div>
                <div className="edit-description">
                    <input
                        className="edit-inputs"
                        type="text"
                        onChange={(e) =>
                            setReviseTaskDescription(e.target.value)
                        }
                        value={reviseTaskDescription}
                        placeholder={task.description}
                        onKeyDown={enterPressed}
                    />
                </div>
            </td>
            <td></td>
            <td>
                <img
                    className="edit-task-button"
                    onClick={() => EditTheTask(task.id)}
                    src={edit}
                    width={"20px"}
                />
            </td>
        </tr>
    );
};

export default ReviseTask;