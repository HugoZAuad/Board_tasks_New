import React, { useState } from "react";
import del from "../../Assets/delete.svg";
import edit from "../../Assets/edit.svg";
import completed from "../../Assets/completed.svg";
import uncompleted from "../../Assets/uncompleted.svg";
import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";
import ReviseTask from "../ReviseTask/ReviseTask";

const ViewTasks = ({ tasks, DeleteTask, toggleCompleted, EditTask }) => {

    const [showEditModal, setShowEditModal] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(null);

    const closeModal = () => {
        setShowEditModal(null);
        setShowDeleteModal(null);
    };

    return (
        <>
            {tasks.length === 0 && "Sem tarefas" }

            {tasks.map((task) => {
                let isDone = {};
                task.completed ? (isDone = completed) : (isDone = uncompleted);

                return task.isEditing ? (
                    <>
                    <hr/>
                    <ReviseTask task={task} EditTask={EditTask} />
                    <hr/>
                    </>
                ) : (
                    <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>
                            <img
                                src={isDone}
                                width={"20px"}
                                checked={task.completed}
                                onClick={(e) =>
                                    toggleCompleted(task.id, !e.target.checked)
                                }
                            />
                        </td>
                        <td>
                            <img
                                src={edit}
                                onClick={() => setShowEditModal(task.id)}
                                width={"25px"}
                            />
                            <img
                                src={del}
                                onClick={() => setShowDeleteModal(task.id)}
                                width={"25px"}
                            />
                            <EditModal
                                onClose={closeModal}
                                show={showEditModal === task.id}
                                EditTask={EditTask}
                                task={task}
                            />
                            <DeleteModal
                                onClose={closeModal}
                                show={showDeleteModal === task.id}
                                DeleteTask={DeleteTask}
                                task={task}
                            />
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default ViewTasks;