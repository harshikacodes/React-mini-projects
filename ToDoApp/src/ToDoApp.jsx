import {useState} from "react";

function ToDoApp(){
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState("");
    const [searchText, setSearchText] = useState("");

    const filteredTasks = tasks.filter(t => 
        t.toLowerCase().includes(searchText.toLowerCase())
    );

    function addTask(){
        if(task.trim() === "") return;

        setTasks([...tasks, task]);
        setTask("");
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function startEditing(index, currentText){
        setEditingIndex(index);
        setEditingText(currentText);
    }

    function saveEdit(index){
        const updatedTasks = [...tasks];
        updatedTasks[index] = editingText;

        setTasks(updatedTasks);
        setEditingIndex(null);
        setEditingText("");
    }

    return (
        <div>
            <h1>To-Do App</h1>

            <input type="text" placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)}/>

            <button onClick={addTask}>Add Task</button>

            <input type="text" placeholder="Search tasks..." value={searchText} onChange={(e) => setSearchText(e.target.value)}/>

            <ul>
                {filteredTasks.map((t, index) => (
                    <li key={index}>
                        {editingIndex === index ? (
                            <input 
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                            />
                        ) : (
                            <span>{t}</span>
                        )}

                        {editingIndex === index ? (
                            <button onClick={() => saveEdit(index)}>Save</button>
                        ) : (
                            <button onClick={() => startEditing(index, t)}>Edit</button>
                        )}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoApp;