import AppSideBar from "@/components/SideBar";
import React from "react";
import Dashboard from "./components/Dashboard";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const page = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;
  if (!token) {
    redirect("/login");
  }

  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const res = await fetch("http://localhost:3001/api/dashboard", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieHeader,
    },

    cache: "no-store",
  });

  const data = await res.json();

  if (data.reply.success) {
    redirect("/login");
  }

  return (
    <div className="h-screen w-screen flex justify-start">
      <AppSideBar userData={data} />
      <Dashboard />
    </div>
  );
};

export default page;
