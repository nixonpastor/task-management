const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/taskController");

router.route("/").get(getTasks).post(createTasks);
router.route("/:id").put(updateTasks).delete(deleteTasks);

module.exports = router;
