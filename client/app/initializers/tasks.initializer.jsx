"use client";
import React, { useEffect } from "react";
import useUserStore from "../Store/user.store";
import useTaskStore from "../Store/task.store";

const TasksInitializer = ({ taskData }) => {
  const setData = useTaskStore((state) => state.setTasks);
  
  useEffect(() => {
    setData(taskData);
  }, []);

  return null;
};

export default TasksInitializer;
