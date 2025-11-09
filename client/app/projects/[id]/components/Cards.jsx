"use client";
import React, { useState, useEffect } from "react";
import TaskCard from "./Card";


const AllTasks = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "Design Landing Page",
        description: "Create hero section and animations.",
        dueDate: "2025-11-15",
        priority: "High",
        status: "In-progress",
        timeSpent: "03:45:00",
      },
      {
        id: 2,
        title: "Integrate Payment Gateway",
        description: "Setup Stripe and test payments.",
        dueDate: "2025-11-12",
        priority: "Medium",
        status: "Pending",
        timeSpent: "00:00:00",
      },
      {
        id: 3,
        title: "Fix Navbar Bugs",
        description: "Resolve layout shift issues on mobile.",
        dueDate: "2025-11-10",
        priority: "Low",
        status: "Completed",
        timeSpent: "01:30:00",
      },
    ];
    setTasks(data);
  }, [projectId]);

  return (
    <section className="grid gap-4 sm:grid-cols-2 mt-5 lg:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </section>
  );
};

export default AllTasks;
