import { useEffect } from "react";
import { useTasksContext } from "../hooks/useTasksContext";

//Components
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";

const Home = () => {
  const { tasks, dispatch } = useTasksContext();

  //Fire only once
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/taskManagement/tasks");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TASKS", payload: json });
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="home">
      <div className="tasks">
        {tasks &&
          tasks.map((task) => <TaskDetails key={task._id} task={task} />)}
      </div>
      <TaskForm />
    </div>
  );
};

export default Home;
