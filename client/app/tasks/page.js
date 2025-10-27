import AppSideBar from "@/components/SideBar";
import React from "react";
import Main from "./components/Main";

const page = async ({ params, searchParams }) => {
  console.log("IN SERVER");
  
  const parametre = await searchParams;
  const filter = parametre.filter || "all";
  const view = parametre.view || "list";
  return (
    <div className="h-screen w-screen flex justify-start">
      <AppSideBar />
      <Main filter={filter} view={view}/>
    </div>
  );
};

export default page;
