import { create } from "zustand";

const useProjectStore = create((set) => ({
  projects: [],
  isPending: false,
  setPending: (val) => set((state) => ({ isPending: val })),
  setProjects: (data) => set((state) => ({ projects: [...data] })),
  createProject: (data) =>
    set((state) => ({ projects: [...state.projects, ...data] })),
  updateProject: (projectId, data) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        task._id === projectId ? { ...project, ...data } : task
      ),
    })),
  deleteProject: (projectId) => {
    set((state) => ({
      projects: state.projects.filter((project) => project._id !== projectId),
    }));
  },
}));

export default useProjectStore;
