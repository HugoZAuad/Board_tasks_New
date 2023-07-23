import React, { useEffect, useState } from "react";
import "./index.scss";
import NewTask from "../NewTask/NewTask";
import ViewTasks from "../ViewTasks/ViewTasks";

const TaskList = ({ data }) => {

    const [tasks, setTasks] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (!localValue) localStorage.setItem("ITEMS", JSON.stringify(data));
        return JSON.parse(localValue);
    }, []); 

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(tasks));
    }, [tasks]); 

    function toggleCompleted(id, completed) {
        setTasks((currentTasks) => {
            return currentTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed };
                }
                return task;
            });
        });
    }

   
    function addTask(title, description) {
        setTasks((currentTasks) => {
            return [
                ...currentTasks,
                {
                    id: crypto.randomUUID(),
                    title,
                    description,
                    completed: false,
                    isEditing: false,
                },
            ];
        });
    }

    
    function DeleteTask(id) {
        setTasks((currentTasks) => {
            return currentTasks.filter((tasks) => tasks.id !== id);
        });
    }

  
    function EditTask(id, title, description) {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        isEditing: !task.isEditing,
                        title,
                        description,
                    }
                    : task
            )
        );
    }
    
    return (
        <section className="Home">
            <h1>
                Otimize seu tempo e se organize com o nosso Planejador Diário.
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Status</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <ViewTasks
                        tasks={tasks}
                        DeleteTask={DeleteTask}
                        toggleCompleted={toggleCompleted}
                        EditTask={EditTask}
                    />
                    <NewTask addTask={addTask} />
                </tbody>
            </table>
        </section>
    );
};

export default TaskList;