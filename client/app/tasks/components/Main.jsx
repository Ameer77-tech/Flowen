"use client";
import React, { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import Tasks from "./Tasks";

const Main = () => {
  const [view, setview] = useState("list");
  const [filter, setfilter] = useState("All");
  return (
    <div className="md:p-20 w-full overflow-scroll">
      <Header view={view} setview={setview} />
      <Filter filter={filter} setFilter={setfilter} />
      <Tasks view={view} filter={filter} />
    </div>
  );
};

export default Main;
