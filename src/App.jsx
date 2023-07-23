import React from "react";
import Header from "./Components/Header/Header";
import TaskList from "./Components/TaskList/TaskList";

const db = [
    {
        id: 1,
        title: "Limpar a casa",
        description: "Limpar a casa como um todo",
        completed: true,
        isEditing: false,
    },
    {
        id: 2,
        title: "Fazer o almoço",
        description: "Preparar o almoço para a semana",
        completed: false,
        isEditing: false,
    },
    {
        id: 3,
        title: "Estudos",
        description: "Focar nos estudos no horario correto",
        completed: true,
        isEditing: false,
    },
    {
        id: 4,
        title: "Trenios",
        description: "Ir a academia e fazer os treinos passados",
        completed: false,
        isEditing: false,
    },
];

function App() {

    return (
        <>
            <Header />
            <TaskList data={db} />
        </>
    );
}

export default App;