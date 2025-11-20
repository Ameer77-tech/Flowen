"use client";
import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],
  isLoading: true,
  setLoading: (val) => set((state) => ({ isLoading: val })),
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  removeTask: (taskId) => {
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
  updateTimer: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task._id === taskId ? { ...task, timer : task.timer + 1 } : task
      ),
    })),
  setTasks: (Tasks) => set({ tasks: Tasks.tasks }),
  clearTasks: () => set({ tasks: [] }),
}));

export default useTaskStore;
