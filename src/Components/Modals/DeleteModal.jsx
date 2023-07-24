import React from "react";
import "./Index.scss";

const Modal = ({ task, DeleteTask, onClose, show }) => {
    if (!show) return null;

    return (
        <div className="Modal">
            <div className="Modal__content">
                <h2 className="Modal__content__header">
                    Deseja deletar esse item?
                </h2>
                <div className="Modal__content__body">
                    <h3>
                        <b>Título: </b>
                        {task.title}
                    </h3>
                    <h4>
                        <b>Descrição: </b>
                        {task.description}
                    </h4>
                </div>
                <div className="Modal__content__buttons">
                    <button
                        className="Modal__content__buttons--yes"
                        onClick={() => DeleteTask(task.id)}
                    >
                        Sim
                    </button>
                    <button
                        className="Modal__content__buttons--no"
                        onClick={onClose}
                    >
                        Não
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;