import AppSideBar from "@/components/SideBar";
import React from "react";
import Main from "./components/Main";

const page = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-start">
        <AppSideBar />
        <Main />
      </div>
    </>
  );
};

export default page;
