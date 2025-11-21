"use client";
import { useEffect } from "react";
import useTaskStore from "../Store/task.store";

const TasksInitializer = ({ taskData }) => {
  const setTasks = useTaskStore((state) => state.setTasks);
  const setLoading = useTaskStore((state) => state.setLoading);

  useEffect(() => {
    if (!taskData) return;

    try {
      localStorage.removeItem("task-store");
      localStorage.removeItem("persist:task-store");
    } catch (e) {
      console.log(e);
    }

    setTasks({ tasks: taskData });
    setLoading(false);
  }, [taskData, setTasks]);

  return null;
};

export default TasksInitializer;
