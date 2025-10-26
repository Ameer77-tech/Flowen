import React from "react";
import Header from "./Header";
import Cards from "./Cards";
import Charts from "./Charts";
import Recent from "./Activity";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Header />
      <Cards />
      <Charts />
      <Recent />
    </div>
  );
};

export default Dashboard;
