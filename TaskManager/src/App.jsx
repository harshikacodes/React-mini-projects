import {useState} from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTask() {
    if(inputValue.trim() === "")
      return;

    setTasks([...tasks, inputValue]);
    setInputValue("");
  }

  return (
    <div>
      <h1>Task App</h1>
      <input 
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>

      {tasks.length === 0 && <p>No task yet!</p>}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
