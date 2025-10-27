import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Check,
  Pause,
  PenIcon,
  LucidePlay,
  RotateCcw,
} from "lucide-react";
import clsx from "clsx";
const MobileTask = ({ name, desc, due, status, priority, timer }) => {
    
  return (
    <Card
      className={clsx(
        "border-1 border-gray-600/50 p-5",
        status == "Completed" ? "opacity-50" : "opacity-100"
      )}
    >
      <CardHeader className={"p-0 grid-cols-3 items-start"}>
        <div className="col-span-2">
          <CardTitle>{name}</CardTitle>
          <CardDescription className={"text-xs"}>{desc}</CardDescription>
        </div>
        <div className="flex gap-2 justify-end w-full">
          <div className="bg-accent/30 w-10 h-10 rounded-full flex justify-center items-center">
            <PenIcon size={15} color="cyan" />
          </div>
          <div className="bg-accent/30 w-10 h-10 rounded-full flex justify-center items-center">
            <Check size={15} color="cyan" />
          </div>
        </div>
      </CardHeader>
      <CardContent className={"flex justify-between p-0 pb-5 mt-2 border-b"}>
        <div className="flex gap-2 text-muted-foreground items-center">
          <Calendar size={13} />
          {due}
        </div>
        <div
          className={clsx(
            "text-xs flex justify-center items-center px-3 rounded",
            status === "Completed"
              ? "bg-emerald-500/30 text-emerald-500"
              : priority === "High"
              ? "bg-destructive/30 text-destructive"
              : priority === "Medium"
              ? "bg-yellow-600/30 text-yellow-500"
              : "bg-accent/30 text-blue-500"
          )}
        >
          {status.toLowerCase() == "completed"
            ? "Completed"
            : priority + " priority"}
        </div>
      </CardContent>
      <CardFooter className="px-0 mt-5 justify-between items-center">
        <div className="text-lg">{timer}</div>
        <div className="flex gap-3 items-center">
          <div className="bg-accent shadow-[0_0_10px_#6366f1aa] w-15 h-15 rounded-full flex justify-center items-center hover:shadow-[0_0_15px_#6366f1] transition">
            <LucidePlay size={20} color="white" fill="white"/>
          </div>
          <div className="bg-accent/30 w-12 h-12 rounded-full flex justify-center items-center hover:bg-accent/50 transition">
            <Pause size={15} color="#3b82f6" />
          </div>
          <div className="bg-accent/30 w-12 h-12 rounded-full flex justify-center items-center hover:bg-accent/50 transition">
            <RotateCcw size={15} color="#3b82f6" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MobileTask;
