import AppSideBar from "@/components/SideBar";
import React from "react";
import Dashboard from "./components/Dashboard";

const page = async () => {
  return (
    <div className="h-screen w-screen flex justify-start">
      <AppSideBar />
      <Dashboard />
    </div>
  );
};

export default page;
