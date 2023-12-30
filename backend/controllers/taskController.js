const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

//TO DO: MAKE ROUTES PRIVATE AND VALIDATIONS

// Description: Get specific user tasks
// Route: GET /taskManagement/tasks
// Access: Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

// Description: Create specific user task
// Route: POST /taskManagement/tasks
// Access: Private
const createTasks = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    //Set bad request error
    res.status(400);
    throw new Error("Please add a name field");
  }
  if (!req.body.description) {
    //Set bad request error
    res.status(400);
    throw new Error("Please add a description field");
  }

  const task = await Task.create({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    dueDate: req.body.dueDate,
  });

  res.status(200).json(task);
});

// Description: Update specific user task
// Route: PUT /taskManagement/tasks
// Access: Private
const updateTasks = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Task Not Found");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTask);
});

// Description: Delete specific user task
// Route: DELETE /taskManagement/tasks
// Access: Private
const deleteTasks = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task Not Found");
  }

  await task.deleteOne();

  res.status(200).json({
    id: req.params.id,
  });
});

module.exports = {
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
};
