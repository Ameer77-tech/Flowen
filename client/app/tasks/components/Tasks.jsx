import React from "react";
import Task from "./Task";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Tasks = ({ view, filter }) => {
  const tasks = [
    {
      name: "Design Landing Page",
      description: "Create wireframes and UI for the new marketing page.",
      dueDate: "2025-11-02",
      timer: "02:30:00",
      priority: "High",
    },
    {
      name: "Fix Authentication Bug",
      description: "Resolve login session issue with JWT tokens.",
      dueDate: "2025-10-29",
      timer: "01:15:00",
      priority: "Medium",
    },
    {
      name: "Database Optimization",
      description: "Add indexes and refactor queries for better performance.",
      dueDate: "2025-11-05",
      timer: "03:45:00",
      priority: "High",
    },
    {
      name: "Client Feedback Review",
      description: "Go through feedback on recent dashboard release.",
      dueDate: "2025-10-28",
      timer: "00:45:00",
      priority: "Low",
    },
    {
      name: "Email Template Redesign",
      description: "Update transactional email layouts and copy.",
      dueDate: "2025-11-10",
      timer: "01:00:00",
      priority: "Medium",
    },
    {
      name: "Implement Dark Mode",
      description: "Add theme toggle and persist mode in local storage.",
      dueDate: "2025-11-01",
      timer: "02:15:00",
      priority: "High",
    },
    {
      name: "Set Up Analytics",
      description: "Integrate Google Analytics and user tracking events.",
      dueDate: "2025-11-03",
      timer: "01:40:00",
      priority: "Medium",
    },
    {
      name: "Deploy Backend API",
      description: "Push latest Express server updates to production.",
      dueDate: "2025-10-30",
      timer: "01:10:00",
      priority: "High",
    },
    {
      name: "Create Onboarding Guide",
      description: "Write documentation for new developers.",
      dueDate: "2025-11-06",
      timer: "02:00:00",
      priority: "Low",
    },
    {
      name: "Setup CI/CD Pipeline",
      description: "Automate build and deployment using GitHub Actions.",
      dueDate: "2025-11-04",
      timer: "02:20:00",
      priority: "High",
    },
    {
      name: "Optimize Images",
      description: "Compress assets and implement lazy loading.",
      dueDate: "2025-10-31",
      timer: "00:50:00",
      priority: "Medium",
    },
    {
      name: "Team Meeting",
      description: "Weekly catch-up with dev team for sprint planning.",
      dueDate: "2025-10-27",
      timer: "01:00:00",
      priority: "Low",
    },
    {
      name: "API Documentation Update",
      description: "Add missing endpoints and examples in Postman collection.",
      dueDate: "2025-11-07",
      timer: "01:30:00",
      priority: "Medium",
    },
    {
      name: "Fix Responsive Issues",
      description: "Ensure dashboard layout works on all screen sizes.",
      dueDate: "2025-11-08",
      timer: "02:10:00",
      priority: "High",
    },
    {
      name: "Add User Roles",
      description: "Implement admin and user-level access control.",
      dueDate: "2025-11-09",
      timer: "03:00:00",
      priority: "High",
    },
  ];

  return (
    <div className="mt-2">
      <Table className={""}>
        <TableCaption className={"mb-3"}>{filter} Tasks</TableCaption>
        <TableHeader className={"bg-gray-600/30 text-center select-none"}>
          <TableRow className={"select-none"}>
            <TableHead className={"md:w-[300px] pl-5"}>Task</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Timer</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className={"bg-secondary"}>
          {tasks.map((task, idx) => (
            <Task
              key={task.name}
              name={task.name}
              desc={task.description}
              priority={task.priority}
              timer={task.timer}
              due={task.dueDate}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tasks;
