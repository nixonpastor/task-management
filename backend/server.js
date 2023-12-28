const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

//Add Middleware for JSON and url encoded body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/taskManagement/tasks", require("./routes/taskRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
