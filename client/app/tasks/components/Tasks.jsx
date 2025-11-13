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
import MobileTask from "./MobileTask";
import clsx from "clsx";

const Tasks = ({ view, filter, tasks }) => {
  const sortedTasks = tasks.sort((a, b) => {
    const order = {
      Completed: 3,
      Low: 2,
      Medium: 1,
      High: 0,
    };

    const aRank = a.status === "Completed" ? 3 : order[a.priority] ?? 99;
    const bRank = b.status === "Completed" ? 3 : order[b.priority] ?? 99;

    return aRank - bRank;
  });

  return (
    <div className="mt-2 rounded-2xl overflow-hidden">
      {/* PC */}
      <Table
        className={clsx(
          "",
          view == "list" ? "hidden md:inline-table" : "md:hidden"
        )}
      >
        <TableCaption className={"mb-3 capitalize"}>
          {filter} Tasks
        </TableCaption>
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
          {sortedTasks.length < 1 ? (
            <TableRow className="text-muted-foreground bg-background h-50">
              <TableCell className="col-span-4 text-center" colSpan={5}>NO TASKS</TableCell>
            </TableRow>
          ) : (
            sortedTasks.map((task, idx) => (
              <Task
                key={task._id}
                name={task.title}
                desc={task.description}
                priority={task.priority}
                timer={task.timer}
                due={task.dueDate}
              />
            ))
          )}
        </TableBody>
      </Table>
      {/* PC */}
      {/* Mobile */}
      <div
        className={clsx(
          "flex flex-col gap-5 p-5",
          view == "grid" ? "md:grid md:grid-cols-3" : "md:hidden"
        )}
      >
        {sortedTasks.map((task, idx) => (
          <MobileTask
            key={task._id}
            name={task?.title}
            desc={task?.description}
            due={task?.dueDate}
            status={task?.status}
            priority={task?.priority}
            timer={task?.timer}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
