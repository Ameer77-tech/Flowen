import React from "react";
import {
  Check,
  Pause,
  PenSquare,
  PlayIcon,
  RotateCcw,
  Trash2,
} from "lucide-react";
import clsx from "clsx";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Task = ({
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
  onDelete,
}) => {
  return (
    <TableRow className="h-20 hover:bg-muted/50 transition-colors">
      <TableCell>
        <div className="flex flex-col gap-1">
          <p className="font-medium">{name}</p>
          <p className="text-muted-foreground text-sm">{desc}</p>
        </div>
      </TableCell>
      <TableCell>{new Date(due).toLocaleDateString("en-GB")}</TableCell>
      <TableCell>
        <Badge
          className={clsx(
            "px-2 py-1 text-center text-xs font-medium w-fit text-black"
          )}
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
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Pause timer"
            >
              <Pause size={20} />
            </button>
          ) : (
            <button
              onClick={onPlay}
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Start timer"
            >
              <PlayIcon size={20} />
            </button>
          )}

          <button
            onClick={onRestart}
            className="text-muted-foreground hover:text-foreground transition-colors"
            title="Restart timer"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex gap-5">
          <button
            onClick={onComplete}
            title="Mark as completed"
            className="hover:text-green-700 transition-colors"
          >
            <Check size={20} />
          </button>
          <button
            onClick={onEdit}
            title="Edit task"
            className="hover:text-blue-600 transition-colors"
          >
            <PenSquare size={20} />
          </button>
          <button
            onClick={onDelete}
            title="Delete task"
            className="hover:scale-110 active:scale-95 transition-transform"
          >
            <Trash2 size={20} color="red" />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Task;
