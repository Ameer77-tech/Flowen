"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Pause,
  PenSquare,
  PlayIcon,
  RotateCcw,
  Trash2,
  CheckCheck,
} from "lucide-react";
import clsx from "clsx";
import useTaskStore from "@/app/Store/task.store";

const Task = ({
  id,
  status,
  name,
  desc,
  filter,
  due,
  timer,
  priority,
  setActionClicked,
  setaction,
  settaskData,
  setTimerSeconds,
  timerSeconds,
}) => {
  const updateTask = useTaskStore((state) => state.updateTask);
  const [ready, setReady] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    setTimerSeconds(timer);
  }, [timer]);

  useEffect(() => {
    return () => {
      saveTimerToDB();
    };
  }, []);

  const saveTimerToDB = async () => {
    await updateTimer({ timer: timerSeconds });
  };

  const apiUrl = `${process.env.NEXT_PUBLIC_XTASK_BACKEND}/api/tasks`;

  const updateTimer = async (data) => {
    const payload = { timer: data.timer };
    try {
      const response = await fetch(`${apiUrl}/edit-task/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!data.success) {
        console.log(data);
      } else {
        updateTask(id, data.updatedTask);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onPlay = () => {
    setReady(true);
    intervalRef.current = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
  };
  const onPause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setReady(false);
    console.log("HERERE");
    updateTimer({ timer: timerSeconds });
  };
  const onReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimerSeconds(0);
    setReady(false);
  };
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <TableRow
      className={clsx(
        "h-20",
        status === "completed" &&
          filter !== "completed" &&
          "opacity-30 trasnsition-all ease duration-300 pointer-events-none"
      )}
    >
      <TableCell>
        <div className="flex flex-col gap-1">
          <p className="font-medium">{name}</p>
          <p className="text-muted-foreground text-sm">{desc}</p>
        </div>
      </TableCell>

      <TableCell>{new Date(due).toLocaleDateString("en-GB")}</TableCell>

      <TableCell>
        <Badge
          className="px-2 py-1 text-center text-xs font-medium w-fit text-black"
          variant={
            priority === 1
              ? "destructive"
              : priority === 2
              ? "medium"
              : "default"
          }
        >
          {priority === 1 ? "High" : priority === 2 ? "Medium" : "Low"}
        </Badge>
      </TableCell>

      <TableCell>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold">
            {timerSeconds === 0 ? "00:00:00" : formatTime(timerSeconds)}
          </span>

          {ready ? (
            <button
              onClick={onPause}
              className="hover:text-white text-muted-foreground transition-all ease"
            >
              <Pause size={20} />
            </button>
          ) : (
            <button
              onClick={onPlay}
              className="hover:text-white text-muted-foreground transition-all ease"
            >
              <PlayIcon size={20} />
            </button>
          )}

          <button
            onClick={onReset}
            className="hover:text-white text-muted-foreground transition-all ease"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </TableCell>

      <TableCell>
        <div className="flex gap-5">
          <button
            className={clsx(
              "hover:text-primary transition-all ease",
              filter === "completed" && "pointer-events-none text-primary"
            )}
            onClick={() => {
              setActionClicked(true);
              setaction("mark");
              settaskData({ text: name, id });
            }}
          >
            {filter === "completed" ? (
              <CheckCheck size={20} />
            ) : (
              <Check size={20} />
            )}
          </button>
          <button
            className={clsx(
              "hover:text-accent transition-all ease",
              filter === "completed" &&
                "pointer-events-none text-muted-foreground opacity-25"
            )}
            onClick={() => {
              setActionClicked(true);
              setaction("edit");
              settaskData({ text: name, id });
            }}
          >
            <PenSquare size={20} />
          </button>
          <button
            className="hover:scale-110 transition-all ease"
            onClick={() => {
              setActionClicked(true);
              setaction("delete");
              settaskData({ text: name, id });
            }}
          >
            <Trash2 size={20} color="red" />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Task;
