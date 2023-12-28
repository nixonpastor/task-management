const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    taskName: {
      type: String,
      required: [true, "Please add a taskName value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
