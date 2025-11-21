import AppSideBar from "@/components/SideBar";
import React, { Suspense } from "react";
import Main from "./components/Main";
import Loading from "@/components/Loading";

const page = async ({ params, searchParams }) => {
  const urlData = await searchParams;
  const filter = urlData.filter || "all";

  return (
    <>
      
      <div className="h-screen w-screen flex justify-start">
        <AppSideBar />
        <Suspense fallback={<Loading />}>
          <Main data={data} filter={filter} />
        </Suspense>
      </div>
    </>
  );
};

export default page;
