import AppSideBar from "@/components/SideBar";
import React from "react";
import Main from "./components/Main";
import { cookies } from "next/headers";

const page = async ({ params, searchParams }) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;
  if (!token) {
    redirect("/login");
  }
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const apiUrl = `${process.env.NEXT_PUBLIC_XTASK_BACKEND}/api/tasks/get-tasks`;
  let tasks = [];
  const fetchTasks = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Cookie: cookieHeader,
        },
        body : JSON.stringify({ type: "personal" }),
        cache: "no-store",
      });
      const data = await response.json();
      if (!data.success) {
        tasks.push(0);
      } else {
        tasks.push(data.tasks);
      }
    } catch (err) {
      console.log(err);
    }
  };
  await fetchTasks();
  const parametre = await searchParams;
  const filter = parametre.filter || "all";
  const view = parametre.view || "list";
  
  return (
    <div className="h-screen w-screen flex justify-start">
      <AppSideBar />
      <Main filter={filter} view={view} tasks={tasks[0]} />
    </div>
  );
};

export default page;
