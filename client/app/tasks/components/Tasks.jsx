"use client";
import React, { useState } from "react";
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
import useTaskStore from "@/app/Store/task.store";
import ShowDialog from "./Dialog";
import { AnimatePresence } from "motion/react";
import Toast from "@/components/Toast";

const Tasks = ({ view, filter, tasks }) => {
  const allTasks = useTaskStore((state) => state.tasks);
  const removeTask = useTaskStore((state) => state.removeTask);
  const [toastData, settoastData] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [actionClicked, setActionClicked] = useState(false);
  const [isPending, setisPending] = useState(false);
  const [action, setaction] = useState("");
  const [editingTask, seteditingTask] = useState("");
  const [taskData, settaskData] = useState({
    text: "",
    id: "",
  });
  const apiUrl = `${process.env.NEXT_PUBLIC_XTASK_BACKEND}/api/tasks/delete-task`;
  const onDelete = async () => {
    setisPending(true);
    try {
      const response = await fetch(`${apiUrl}/${taskData.id}`, {
        method: "DELETE",
        header: {
          "content-type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);

      if (!data.success) {
        settoastData({
          show: true,
          message: data.reply,
          type: "error",
        });
        setTimeout(() => {
          settoastData({
            show: false,
            message: "",
            type: "",
          });
        }, 2000);
      } else {
        settoastData({
          show: true,
          message: data.reply,
          type: "success",
        });
        removeTask(data.deleted._id);
        setTimeout(() => {
          settoastData({
            show: false,
            message: "",
            type: "",
          });
        }, 2000);
        setActionClicked(false);
      }
    } catch (err) {
      settoastData({
        show: true,
        message: err.data,
        type: "error",
      });
    } finally {
      setisPending(false);
      setActionClicked(false);
    }
  };
  const onEdit = async () => {};
  const onMark = async () => {
    console.log("INMARK");
  };

  return (
    <>
      <Toast toastData={toastData} show={toastData.show} />
      <AnimatePresence>
        {actionClicked && (
          <ShowDialog
            taskData={taskData}
            onDelete={onDelete}
            action={action}
            setActionClicked={setActionClicked}
            onEdit={onEdit}
            onMark={onMark}
            isPending={isPending}
            seteditingTask={seteditingTask}
          />
        )}
      </AnimatePresence>

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
            <AnimatePresence>
              {allTasks.length < 1 ? (
                <TableRow className="text-muted-foreground bg-background h-50">
                  <TableCell className="col-span-4 text-center" colSpan={5}>
                    NO TASKS
                  </TableCell>
                </TableRow>
              ) : (
                allTasks.map((task, idx) => (
                  <Task
                    key={task._id}
                    id={task._id}
                    name={task.title}
                    desc={task.description}
                    priority={task.priority}
                    timer={task.timer}
                    due={task.dueDate}
                    setActionClicked={setActionClicked}
                    settaskData={settaskData}
                    setaction={setaction}
                  />
                ))
              )}
            </AnimatePresence>
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
          {allTasks.map((task, idx) => (
            <MobileTask
              key={task._id}
              name={task?.title}
              desc={task?.description}
              due={task?.dueDate}
              status={task?.status}
              priority={task?.priority}
              timer={task?.timer}
              setActionClicked={setActionClicked}
              settaskData={settaskData}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
