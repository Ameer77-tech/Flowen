import mongoose, { mongo } from "mongoose";

const projectSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  dueDate: {
    type: Date,
    default: null,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  totaltasksCompleted: {
    type: Number,
    default: 0,
  },
  tasks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tasks",
  },
});

const projectsModel = new mongoose.Model("projects", projectSchema);

export default projectsModel;
