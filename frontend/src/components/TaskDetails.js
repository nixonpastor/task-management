const TaskDetails = ({ task }) => {
  return (
    <div className="task-details">
      <h4>{task.name}</h4>
      <p>
        <strong>Description: </strong>
        {task.description}
      </p>
      <p>
        <strong>Status: </strong>
        {task.status}
      </p>
      <p>
        <strong>Due Date: </strong>
        {task.dueDate}
      </p>
      <p>{task.createdAt}</p>
    </div>
  );
};

export default TaskDetails;
