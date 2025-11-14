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

const MotionTableRow = motion(TableRow);

const Task = ({
  id,
  name,
  desc,
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

  useEffect(() => {
    // Delay prevents hydration flash
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <MotionTableRow
      layout
      initial={false}
      animate={ready ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="h-20 hover:bg-muted/50 transition-colors"
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
            <button onClick={onPause}>
              <Pause size={20} />
            </button>
          ) : (
            <button onClick={onPlay}>
              <PlayIcon size={20} />
            </button>
          )}

          <button onClick={onRestart}>
            <RotateCcw size={20} />
          </button>
        </div>
      </TableCell>

      <TableCell>
        <div className="flex gap-5">
          <button
            onClick={() => {
              setActionClicked(true);
              setaction("mark");
              settaskData({ text: name, id });
            }}
          >
            <Check size={20} />
          </button>
          <button
            onClick={() => {
              setActionClicked(true);
              setaction("edit");
              settaskData({ text: name, id });
            }}
          >
            <PenSquare size={20} />
          </button>
          <button
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
    </MotionTableRow>
  );
};

export default Task;
