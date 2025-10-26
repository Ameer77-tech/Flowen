"use client";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { Search } from "lucide-react";
import React, { useState } from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-between px-3">
      <div className="w-1/2 flex items-center gap-2 bg-secondary rounded-2xl p-1 px-3">
        <Search color="#93959a" />
        <Input
          className={"text-secondary-foreground border-0 p-2"}
          placeholder={"Search for tasks by title or description"}
        />
      </div>
      <div className="flex gap-2 items-center">
        {["All", "Completed", "Pending", "In-progress"].map((name, idx) => (
          <div
            onClick={() => setFilter(name)}
            key={idx}
            className={clsx(
              "select-none shadow-sm shadow-muted-foreground/20 rounded-2xl px-5 py-2 cursor-pointer",
              filter == name ? "bg-accent" : "bg-secondary"
            )}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
