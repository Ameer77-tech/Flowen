"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { CalendarDays, CheckCircle } from "lucide-react";
import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center gap-5">
      {data?.map((project, idx) => (
        <Card key={project.id} className={"border-0 px-5"}>
          <CardHeader className={"grid-cols-3 p-0 items-start md:h-20"}>
            <div className="w-full col-span-2">
              <CardTitle className={"w-full"}>{project.name}</CardTitle>
              <CardDescription className={"text-xs"}>
                {project.description}
              </CardDescription>
            </div>
            <CardDescription
              className={clsx(
                "w-full flex items-center justify-end",
                project.status.toLowerCase() == "in progress"
                  ? "text-amber-500"
                  : project.status.toLowerCase() == "started"
                  ? "text-cyan-600"
                  : project.status.toLowerCase() == "not started"
                  ? "text-gray-500"
                  : project.status.toLowerCase() == "planning"
                  ? "text-fuchsia-600"
                  : "text-emerald-600"
              )}
            >
              {project.status}
            </CardDescription>
          </CardHeader>
          <CardContent
            className={"px-0 mt-5 h-full justify-between items-end flex"}
          >
            <div className="flex items-center gap-2">
              <CheckCircle color="green" size={17} />
              {project.totalDone}/{project.totalTasks}
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays color="red" size={12} />
              <span className="text-muted-foreground text-sm">
                {project.dueDate}
              </span>
            </div>
          </CardContent>
          <CardFooter className={"mt-5 p-0 flex-col"}>
            <div className="flex justify-between w-full">
              <p className="text-sm text-muted-foreground">Progress</p>
              <p className="text-sm">
                {Math.round((project.totalDone / project.totalTasks) * 100)} %
              </p>
            </div>
            <div
              className="rounded-xl w-full origin-left h-2 bg-accent mt-5"
              style={{
                transform: `scaleX(${project.totalDone / project.totalTasks})`,
              }}
            ></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
