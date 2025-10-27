"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import clsx from "clsx";
import { Plus, Search } from "lucide-react";
import React, { useState } from "react";


const Filter = ({ filter, setFilter }) => {
 const isMobile = useIsMobile();
  
  return (
    <div className="md:flex md:flex-row flex-col md:justify-between px-3 md:mt-0 mt-5">
      <div className="md:w-1/2 w-full flex items-center gap-2 bg-secondary rounded-2xl p-1 px-3">
        <Search color="#93959a" />
        <Input
          className={"text-secondary-foreground border-0 p-2"}
          placeholder={"Search for tasks by title or description"}
        />
      </div>
      <div className="md:flex gap-2 items-center grid grid-cols-2 md:mt-0 mt-5 place-items-center">
        {["All", "Completed", "Pending", "In-progress"].map((name, idx) => (
          <div
            onClick={() => setFilter(name)}
            key={idx}
            className={clsx(
              "select-none shadow-sm md:w-auto w-full shadow-muted-foreground/20 rounded-2xl px-3 py-2 cursor-pointer",
              filter == name ? "bg-accent" : "bg-secondary"
            )}
          >
            {name}
          </div>
        ))}
        {
          isMobile ? <Button size={"lg"} className={"fixed bottom-5 right-5 z-50 rounded-full w-15 h-15 p-0"}><Plus size={30}/></Button> : <Button size={"lg"}><Plus />Add Task</Button>
        }
        
      </div>
    </div>
  );
};

export default Filter;
