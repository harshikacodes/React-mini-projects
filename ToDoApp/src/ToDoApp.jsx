import {useEffect, useState} from "react";

function ToDoApp(){
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState("");
    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState("all");

    const filteredTasks = tasks.filter(t => {
        if (!t || typeof t.text !== "string")return false; 

        return t.text.toLowerCase().includes(searchText.toLowerCase())
    }) .filter(t => {
        if(filter === "completed") return t.completed;
        if(filter === "pending") return !t.completed;
        return true; 
    });

    useEffect(() => {
        try{
            const saved = localStorage.getItem("tasks");
            if(!saved) return;

            const parsed = JSON.parse(saved);

            if(Array.isArray(parsed)){
                setTasks(parsed);
            }
        } catch (error){
            console.error("Invalid JSON in localStorage:", error);
            localStorage.removeItem("tasks");
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function addTask(){
        if(task.trim() === "") return;

        setTasks([...tasks, {text: task, completed: false}]);
        setTask("");
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function startEditing(index, text){
        setEditingIndex(index);
        setEditingText(text);
    }

    function saveEdit(index) {
    setTasks(tasks.map((task, i) => {
        if (i === index) {
            return { ...task, text: editingText };
        }
        return task;
    }));

    setEditingIndex(null);
    setEditingText("");
}

    function toggleComplete(index){
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    return (
        <div>
            <h1>To-Do App</h1>

            <input type="text" placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)}/>

            <button onClick={addTask}>Add Task</button>

            <input type="text" placeholder="Search tasks..." value={searchText} onChange={(e) => setSearchText(e.target.value)}/>

            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
            <button onClick={() => setFilter("pending")}>Pending</button>

            <ul>
                {filteredTasks.map((t, index) => (
                    <li key={index}>
                        {editingIndex === index ? (
                            <input 
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                            />
                        ) : (
                            <span style={{textDecoration: t.completed ? "line-through" : "none"}}>{t.text}</span>
                        )}

                        <button onClick={() => toggleComplete(index)}>
                            {t.completed ? "Undo" : "Complete"}
                        </button>

                        {editingIndex === index ? (
                            <button onClick={() => saveEdit(index)}>Save</button>
                        ) : (
                            <button onClick={() => startEditing(index, t.text)}>Edit</button>
                        )}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoApp;