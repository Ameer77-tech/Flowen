import SideBar from "@/components/SideBar";
import React from "react";
import Dashboard from "./components/Dashboard";

const page = () => {
  return (
    <div className="h-screen w-screen flex justify-start">
      <SideBar />
      <Dashboard />
    </div>
  );
};

export default page;
