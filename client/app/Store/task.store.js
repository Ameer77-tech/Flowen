"use client";
import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  removeTask: (taskId) => {
    console.log(taskId);
    set((state) => ({
      tasks: state.tasks.filter((task) => task._id !== taskId),
    }));
  },
  updateTask: (taskId, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task._id === taskId ? { ...task, ...updatedTask } : task
      ),
    })),
  setTasks: (tasks) => set({ tasks }),
  clearTasks: () => set({ tasks: [] }),
}));

export default useTaskStore;
