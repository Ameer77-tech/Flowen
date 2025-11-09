import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "users"
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    enum: ["personal", "project"],
    default: "personal",
  },
  linkedProject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects",
    required: function () {
      return this.type === "project";
    },
  },
  dueDate: {
    type: Date,
  },
  priority: {
    type: Number,
    enum: [1, 2, 3],
    default: 1,
  },
  timer: {
    type: Date,
    required: true,
    default: null,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const tasksModel = mongoose.model("tasks", taskSchema);
export default tasksModel;
