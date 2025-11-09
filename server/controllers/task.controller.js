import tasksModel from "../models/task.model.js";
import userModel from "../models/user.model.js";

export const addTask = (req, res) => {
  const { title, description, type, dueDate, priority, linkedProject } =
    req.body;
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      reply: "Empty request body",
    });
  }
  if (!title || title.trim().length === 0) {
    return res.status(400).json({
      success: false,
      reply: "Title is required",
    });
  }
  if (description && typeof description !== "string") {
    return res.status(400).json({
      success: false,
      reply: "Description must be a string",
    });
  }
  const validTypes = ["personal", "project"];
  if (!type || !validTypes.includes(type)) {
    return res.status(400).json({
      success: false,
      reply: "Invalid task type. Must be 'personal' or 'project'",
    });
  }
  if (type === "project" && !linkedProject) {
    return res.status(400).json({
      success: false,
      reply: "Project type requires linkedProject",
    });
  }
  if (!dueDate || isNaN(Date.parse(dueDate))) {
    return res.status(400).json({
      success: false,
      reply: "Invalid dueDate format, must be a valid date",
    });
  }
  const validPriorities = [1, 2, 3];
  if (priority && !validPriorities.includes(Number(priority))) {
    return res.status(400).json({
      success: false,
      reply: "Priority must be 1 (low), 2 (medium), or 3 (high)",
    });
  }
  console.log(req.body);
};
export const getTasks = (req, res) => {};
export const deleteTask = (req, res) => {};
export const editTask = (req, res) => {};
