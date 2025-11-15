"use client";
import React, { useEffect, useState } from "react";
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
} from "lucide-react";
import clsx from "clsx";

const Task = ({
  id,
  status,
  name,
  desc,
  filter,
  due,
  timer,
  priority,
  onPlay,
  onPause,
  onRestart,
  onComplete,
  onEdit,
  setActionClicked,
  setaction,
  settaskData,
}) => {
  const [ready, setReady] = useState(false);

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
          <span className="text-sm font-semibold">{timer || "00:00:00"}</span>

          {false ? (
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
            onClick={onRestart}
            className="hover:text-white text-muted-foreground transition-all ease"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </TableCell>

      <TableCell>
        <div className="flex gap-5">
          <button
            className="hover:text-primary transition-all ease"
            onClick={() => {
              setActionClicked(true);
              setaction("mark");
              settaskData({ text: name, id });
            }}
          >
            <Check size={20} />
          </button>
          <button
            className="hover:text-accent transition-all ease"
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
