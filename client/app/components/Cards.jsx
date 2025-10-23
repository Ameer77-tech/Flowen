import React from "react";
import DashboardCard from "./Card";

const Cards = () => {
  return (
    <div className="p-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid gap-5 place-items-center">
      <DashboardCard
        title={"Total"}
        count={120}
        description="tasks completed"
        trend="up"
      />
      <DashboardCard
        title={"Completed"}
        count={120}
        description="tasks completed"
        trend="down"
      />
      <DashboardCard
        title={"Pending"}
        count={120}
        description="tasks completed"
        trend="down"
      />
      <DashboardCard
        title={"Over Due"}
        count={120}
        description="tasks completed"
        trend="down"
      />
    </div>
  );
};

export default Cards;
