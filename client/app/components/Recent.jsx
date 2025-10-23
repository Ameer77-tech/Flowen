"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const recentTasks = [
  {
    name: "Design Landing Page",
    project: "Website Redesign",
    status: "Completed",
    due: "Oct 22",
    priority: "High",
  },
  {
    name: "Write Docs",
    project: "API Docs",
    status: "Pending",
    due: "Oct 23",
    priority: "Medium",
  },
  {
    name: "Fix Bug #12",
    project: "Backend",
    status: "Overdue",
    due: "Oct 20",
    priority: "High",
  },
  {
    name: "Create Test Cases",
    project: "QA",
    status: "Pending",
    due: "Oct 24",
    priority: "Low",
  },
];

// Map statuses to theme colors
const statusColors = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Overdue: "bg-red-100 text-red-700",
};

export default function RecentTasks() {
  return (
    <div className="p-5">
     <Card className={"p-3"}>
        <CardTitle >Today's Tasks</CardTitle>
     </Card>
    </div>
  );
}
