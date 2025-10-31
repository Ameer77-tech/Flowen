import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { CalendarDays, CheckCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Link href={"/projects/123"} className="w-full">
      <Card
        className={
          "border-0 px-5 cursor-pointer hover:scale-105 md:active:scale-95 active:transform-gpu group transition-all ease"
        }
      >
        <CardHeader className={"md:grid-cols-3 flex md:grid p-0 items-start md:h-20 h-auto"}>
          <div className="w-full col-span-2">
            <CardTitle className={"w-full"}>{project.name}</CardTitle>
            <CardDescription className={"text-xs hidden md:block"}>
              {project.description}
            </CardDescription>
          </div>
          <CardDescription className="md:hidden block group-active:translate-x-3 transition-all ease">
            <ChevronRight />
          </CardDescription>
          <CardDescription
            className={clsx(
              "w-full md:flex items-center justify-end hidden",
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
          className={"px-0 md:mt-5 h-full justify-between items-end flex"}
        >
          <div className="md:flex items-center gap-2 hidden">
            <CheckCircle color="green" size={17} />
            {project.totalDone}/{project.totalTasks}
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays color="red" size={12} />
            <span className="text-muted-foreground text-sm">
              due {project.dueDate}
            </span>
          </div>
        </CardContent>
        <CardFooter className={"md:mt-5 mt-2 p-0 flex-col"}>
          <div className="flex justify-between w-full">
            <p className="text-sm text-muted-foreground">Progress</p>
            <p className="text-sm">
              {Math.round((project.totalDone / project.totalTasks) * 100)} %
            </p>
          </div>
          <div className="w-full bg-background rounded-2xl h-2 md:mt-5 mt-2">
            <div
              className="rounded-2xl w-full origin-left h-2 bg-accent"
              style={{
                transform: `scaleX(${project.totalDone / project.totalTasks})`,
              }}
            ></div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
