import React from "react";
import {
  Check,
  Pause,
  PenSquare,
  PlayCircle,
  PlayIcon,
  Trash2,
} from "lucide-react";
import clsx from "clsx";
import { TableCell, TableRow } from "@/components/ui/table";
const Task = ({ name, desc, due, timer, priority }) => {
  return (
    <TableRow className={"h-20"}>
      <TableCell>
        <div className="flex flex-col gap-1">
          <p>{name}</p>
          <p className="text-muted-foreground">{desc}</p>
        </div>
      </TableCell>
      <TableCell>{due}</TableCell>
      <TableCell>
        <p
          className={clsx(
            "w-15 text-center rounded-xl ",
            priority == "High"
              ? "bg-destructive/30 text-destructive"
              : priority == "Medium"
              ? "bg-yellow-600/30 text-yellow-500"
              : "bg-accent/30 text-blue-500"
          )}
        >
          {priority}
        </p>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          {timer}
          <PlayIcon size={25} color="#2f639e" fill="#2f639e" />
          <Pause />
        </div>
      </TableCell>
      <TableCell className={""}>
        <div className="flex gap-5">
          <Check size={20} />
          <PenSquare size={20} />
          <Trash2 size={20} color="red" />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Task;
