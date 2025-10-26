import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const Filter = () => {
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
          <div className="bg-secondary select-none shadow-sm shadow-muted-foreground/20 rounded-2xl px-5 py-2 cursor-pointer">{name}</div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
