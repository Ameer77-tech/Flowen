"use client";
import React, { useEffect, useState } from "react";
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
import Loading from "@/components/Loading";
import { Spinner } from "@/components/ui/spinner";
import AddTaskForm from "./AddTaskForm";

const Tasks = ({ view, filter }) => {
  const tasks = useTaskStore((state) => state.tasks);

  const isLoading = useTaskStore((state) => state.isLoading);
  const allTasks = React.useMemo(() => {
    return [...(tasks || [])].sort((a, b) => {
      if (a.status === "completed" && b.status !== "completed") return 1;
      if (a.status !== "completed" && b.status === "completed") return -1;

      const pa = Number(a.priority ?? 99);
      const pb = Number(b.priority ?? 99);
      if (pa !== pb) return pa - pb;

      const da = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
      const db = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
      return da - db;
    });
  }, [tasks]);

  const removeTask = useTaskStore((state) => state.removeTask);
  const editTask = useTaskStore((state) => state.updateTask);
  const [toastData, settoastData] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [initialDetails, setInitialDetails] = useState({});
  const [editingForm, setEditingForm] = useState(false);
  const [actionClicked, setActionClicked] = useState(false);
  const [isPending, setisPending] = useState(false);
  const [action, setaction] = useState("");
  const [editingTask, seteditingTask] = useState("");
  const [taskData, settaskData] = useState({
    text: "",
    id: "",
  });
  useEffect(() => {
    tasks.forEach((task, idx) => {
      if (task._id === editingTask) {
        setInitialDetails(task);
      }
    });
  }, [editingTask]);

  const apiUrl = `${process.env.NEXT_PUBLIC_XTASK_BACKEND}/api/tasks`;
  const onDelete = async () => {
    setisPending(true);
    try {
      const response = await fetch(`${apiUrl}/delete-task/${taskData.id}`, {
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
    setisPending(true);
    try {
      const response = await fetch(`${apiUrl}/edit-task/${taskData.id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "completed" }),
        credentials: "include",
      });
      const data = await response.json();
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
        editTask(data.updatedTask._id, { status: "completed" });
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
        message: "An Error occured",
        type: "error",
      });
    } finally {
      setisPending(false);
      setActionClicked(false);
    }
  };
  console.log("IN TASKS");

  console.log(initialDetails);

  return (
    <>
      <Toast toastData={toastData} show={toastData.show} />
      <AddTaskForm
        initialTaskDetails={initialDetails}
        isOpen={editingForm}
        editingTask={editingTask}
        setIsOpen={setEditingForm}
      />
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
            setEditingForm={setEditingForm}
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
              {isLoading ? (
                <TableRow>
                  <TableCell
                    className={"flex justify-center items-center"}
                    colSpan={5}
                  >
                    <Spinner className={"size-5"} />
                  </TableCell>
                </TableRow>
              ) : allTasks.length < 1 ? (
                <TableRow className="text-muted-foreground bg-background h-50">
                  <TableCell className="text-center" colSpan={5}>
                    NO TASKS
                  </TableCell>
                </TableRow>
              ) : (
                allTasks.map((task, idx) => (
                  <Task
                    filter={filter}
                    status={task.status}
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
          {allTasks.length < 1 ? (
            <p className="text-center text-muted-foreground">NO TASKS</p>
          ) : (
            allTasks.map((task, idx) => (
              <MobileTask
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
        </div>
      </div>
    </>
  );
};

export default Tasks;
