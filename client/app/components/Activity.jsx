"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const tasks = [
  {
    id: 1,
    name: "Fix Bug #23",
    project: "Backend",
    status: "Pending",
    priority: 1,
    due: "Oct 27",
  },
  {
    id: 2,
    name: "Design Landing Page",
    project: "Website",
    status: "Completed",
    priority: 3,
    due: "Oct 24",
  },
  {
    id: 3,
    name: "Create Test Cases",
    project: "QA",
    status: "In Progress",
    priority: 2,
    due: "Oct 28",
  },
  {
    id: 4,
    name: "Write API Docs",
    project: "API Docs",
    status: "Pending",
    priority: 2,
    due: "Oct 26",
  },
  {
    id: 5,
    name: "Refactor Cache Logic",
    project: "Backend",
    status: "Overdue",
    priority: 1,
    due: "Oct 20",
  },
  {
    id: 6,
    name: "Implement Payment Flow",
    project: "Mobile App",
    status: "In Progress",
    priority: 1,
    due: "Oct 27",
  },
  {
    id: 7,
    name: "Review UI Layout",
    project: "Website",
    status: "Pending",
    priority: 2,
    due: "Oct 26",
  },
  {
    id: 8,
    name: "Plan Analytics Dashboard",
    project: "Dashboard",
    status: "Completed",
    priority: 3,
    due: "Oct 22",
  },
  {
    id: 9,
    name: "Test Payment API",
    project: "Backend",
    status: "Pending",
    priority: 2,
    due: "Oct 25",
  },
  {
    id: 10,
    name: "Fix Bug #91",
    project: "QA",
    status: "Completed",
    priority: 3,
    due: "Oct 21",
  },
  {
    id: 11,
    name: "Implement Webhook System",
    project: "API Docs",
    status: "Pending",
    priority: 1,
    due: "Oct 27",
  },
  {
    id: 12,
    name: "Refactor UI Components",
    project: "Website",
    status: "In Progress",
    priority: 2,
    due: "Oct 26",
  },
  {
    id: 13,
    name: "Fix Bug #77",
    project: "Backend",
    status: "Overdue",
    priority: 1,
    due: "Oct 20",
  },
  {
    id: 14,
    name: "Design Login Flow",
    project: "Mobile App",
    status: "Pending",
    priority: 2,
    due: "Oct 28",
  },
  {
    id: 15,
    name: "Review API Security",
    project: "Backend",
    status: "Completed",
    priority: 3,
    due: "Oct 23",
  },
  {
    id: 16,
    name: "Write Unit Tests",
    project: "QA",
    status: "In Progress",
    priority: 2,
    due: "Oct 27",
  },
  {
    id: 17,
    name: "Create Report Module",
    project: "Dashboard",
    status: "Pending",
    priority: 1,
    due: "Oct 26",
  },
  {
    id: 18,
    name: "Deploy API Server",
    project: "Backend",
    status: "Pending",
    priority: 1,
    due: "Oct 27",
  },
  {
    id: 19,
    name: "Plan Sprint Goals",
    project: "Website",
    status: "Completed",
    priority: 3,
    due: "Oct 25",
  },
  {
    id: 20,
    name: "Write Documentation",
    project: "API Docs",
    status: "Overdue",
    priority: 1,
    due: "Oct 21",
  },
  {
    id: 21,
    name: "Fix Bug #39",
    project: "Backend",
    status: "Pending",
    priority: 1,
    due: "Oct 26",
  },
  {
    id: 22,
    name: "Test Login System",
    project: "QA",
    status: "Pending",
    priority: 2,
    due: "Oct 27",
  },
  {
    id: 23,
    name: "Update Payment Gateway",
    project: "Mobile App",
    status: "In Progress",
    priority: 2,
    due: "Oct 28",
  },
  {
    id: 24,
    name: "Fix Bug #64",
    project: "Backend",
    status: "Completed",
    priority: 3,
    due: "Oct 22",
  },
  {
    id: 25,
    name: "Create Dashboard Widgets",
    project: "Dashboard",
    status: "Pending",
    priority: 1,
    due: "Oct 26",
  },
  {
    id: 26,
    name: "Design Analytics Page",
    project: "Website",
    status: "In Progress",
    priority: 2,
    due: "Oct 27",
  },
  {
    id: 27,
    name: "Implement Notifications",
    project: "Mobile App",
    status: "Completed",
    priority: 3,
    due: "Oct 24",
  },
  {
    id: 28,
    name: "Fix Bug #87",
    project: "Backend",
    status: "Pending",
    priority: 1,
    due: "Oct 27",
  },
  {
    id: 29,
    name: "Review QA Results",
    project: "QA",
    status: "Completed",
    priority: 3,
    due: "Oct 22",
  },
  {
    id: 30,
    name: "Deploy Dashboard v2",
    project: "Dashboard",
    status: "Overdue",
    priority: 1,
    due: "Oct 20",
  },
  {
    id: 31,
    name: "Plan UI Improvements",
    project: "Website",
    status: "Pending",
    priority: 2,
    due: "Oct 27",
  },
  {
    id: 32,
    name: "Write Test Scripts",
    project: "QA",
    status: "In Progress",
    priority: 1,
    due: "Oct 26",
  },
  {
    id: 33,
    name: "Fix Bug #99",
    project: "Backend",
    status: "Pending",
    priority: 1,
    due: "Oct 27",
  },
  {
    id: 34,
    name: "Design Profile Page",
    project: "Website",
    status: "Completed",
    priority: 3,
    due: "Oct 23",
  },
  {
    id: 35,
    name: "Implement Dark Mode",
    project: "Dashboard",
    status: "Pending",
    priority: 2,
    due: "Oct 28",
  },
  {
    id: 36,
    name: "Test Cache Strategy",
    project: "Backend",
    status: "Overdue",
    priority: 1,
    due: "Oct 21",
  },
  {
    id: 37,
    name: "Fix Bug #46",
    project: "Backend",
    status: "Pending",
    priority: 1,
    due: "Oct 27",
  },
  {
    id: 38,
    name: "Review Docs Content",
    project: "API Docs",
    status: "Completed",
    priority: 3,
    due: "Oct 24",
  },
  {
    id: 39,
    name: "Refactor QA Pipeline",
    project: "QA",
    status: "In Progress",
    priority: 2,
    due: "Oct 28",
  },
  {
    id: 40,
    name: "Write Analytics Script",
    project: "Dashboard",
    status: "Pending",
    priority: 1,
    due: "Oct 26",
  },
  {
    id: 41,
    name: "Fix Bug #58",
    project: "Backend",
    status: "Completed",
    priority: 3,
    due: "Oct 22",
  },
  {
    id: 42,
    name: "Deploy QA Results",
    project: "QA",
    status: "Pending",
    priority: 2,
    due: "Oct 26",
  },
  {
    id: 43,
    name: "Plan Server Migration",
    project: "Backend",
    status: "Overdue",
    priority: 1,
    due: "Oct 20",
  },
  {
    id: 44,
    name: "Test Signup Flow",
    project: "Website",
    status: "Pending",
    priority: 2,
    due: "Oct 28",
  },
  {
    id: 45,
    name: "Create Admin Panel",
    project: "Dashboard",
    status: "In Progress",
    priority: 1,
    due: "Oct 27",
  },
  {
    id: 46,
    name: "Design Email Template",
    project: "Website",
    status: "Completed",
    priority: 3,
    due: "Oct 24",
  },
  {
    id: 47,
    name: "Refactor Session Logic",
    project: "Backend",
    status: "Pending",
    priority: 1,
    due: "Oct 26",
  },
  {
    id: 48,
    name: "Write Integration Tests",
    project: "QA",
    status: "In Progress",
    priority: 2,
    due: "Oct 27",
  },
  {
    id: 49,
    name: "Deploy Mobile API",
    project: "Mobile App",
    status: "Completed",
    priority: 3,
    due: "Oct 23",
  },
  {
    id: 50,
    name: "Fix Bug #14",
    project: "Backend",
    status: "Pending",
    priority: 1,
    due: "Oct 27",
  },
];

export default function TodaysTasks() {
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.status === "Completed" && b.status !== "Completed") return 1;
    if (a.status !== "Completed" && b.status === "Completed") return -1;
    return a.priority - b.priority;
  });
  const [seeAll, setSeeAll] = useState(false);
  return (
    <div className="p-5">
      <Card className="md:p-3 md:pb-10 border-0 text-lg relative">
        <CardTitle className="text-secondary-foreground">
          Today's Tasks -{" "}
          <span className="text-muted-foreground">
            {new Date().toDateString()}
          </span>
        </CardTitle>
        <CardHeader className="place-items-start mt-5 p-0 text-sm">
          <CardContent className="md:grid-cols-4 w-full grid grid-cols-2">
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>4 Total
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>2
              Completed
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>1 In
              Progress
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>1 Pending
            </div>
          </CardContent>
        </CardHeader>
        <CardContent
          className={clsx(
            "mt-5 px-2 overflow-hidden relative",
            !seeAll ? "md:max-h-205 max-h-200" : "md:h-auto"
          )}
        >
          <div className="space-y-5">
            {sortedTasks.map((task) => (
              <div
                key={task.name}
                className={clsx(
                  "flex md:flex-row flex-col light:bg-secondary md:items-center gap-4 justify-between p-5 rounded-lg transition",
                  task.status === "Completed"
                    ? "bg-gray-800/30 text-muted-foreground "
                    : "bg-gray-800/60 hover:bg-gray-800 active:bg-accent/40"
                )}
              >
                <div>
                  <p className="font-medium md:text-lg text-xl">{task.name}</p>
                  <p className="md:text-xs text-md text-gray-500">
                    {task.project}
                  </p>
                </div>

                <div className="flex items-center justify-end gap-3">
                  <span
                    className={clsx(
                      "text-sm px-2 py-1 rounded-full",
                      task.priority === 1
                        ? "bg-destructive/30 text-destructive"
                        : task.priority === 2
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-blue-500/20 text-blue-400"
                    )}
                  >
                    {task.priority === 1
                      ? "High"
                      : task.priority === 2
                      ? "Medium"
                      : "Low"}
                  </span>
                  <span
                    className={clsx(
                      "text-xs px-2 py-1 rounded-full",
                      task.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : task.status === "Pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : task.status === "Overdue"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-blue-500/20 text-blue-400"
                    )}
                  >
                    {task.status}
                  </span>

                  {task.status !== "Completed" && (
                    <Button
                      size="sm"
                      variant={"outline"}
                      className="text-lg hidden md:block cursor-pointer border-0 bg-card hover:text-blue-600"
                    >
                      Complete
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <p
          onClick={() => setSeeAll(true)}
          className={clsx(
            "absolute bottom-3 left-1/2 -translate-x-1/2 text-primary text-sm hover:underline cursor-pointer",
            seeAll && "hidden"
          )}
        >
          SEE ALL
        </p>
      </Card>
    </div>
  );
}
