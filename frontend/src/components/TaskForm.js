import { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext";

const TaskForm = () => {
  const { dispatch } = useTasksContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setdueDate] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { name, description, status, dueDate };

    const response = await fetch("/taskManagement/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json);
      setError(json.message);
    }

    if (response.ok) {
      setName("");
      setDescription("");
      setStatus("");
      setdueDate(null);
      setError(null);
      console.log("New Task Added", json);
      dispatch({ type: "CREATE_TASKS", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Task</h3>
      <label>Task Title: </label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>Description: </label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <label>Status: </label>
      <input
        type="text"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
      />
      <label>Due Date: </label>
      <input
        type="date"
        onChange={(e) => setdueDate(e.target.value)}
        value={dueDate}
      />

      <button>Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TaskForm;
