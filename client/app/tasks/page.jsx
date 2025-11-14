import AppSideBar from "@/components/SideBar";
import React, { Suspense } from "react";
import Main from "./components/Main";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TasksInitializer from "../initializers/tasks.initializer";
import TasksSection from "./components/TasksSection";

const page = async ({ params, searchParams }) => {
  const parametre = await searchParams;
  const filter = parametre.filter || "all";
  const view = parametre.view || "list";

  return (
    <>
      <div className="h-screen w-screen flex justify-start">
        <AppSideBar />
        <Suspense fallback={<p>LAODING ..........</p>}>
          <TasksSection filter={filter} view={view} />
        </Suspense>
      </div>
    </>
  );
};

export default page;
