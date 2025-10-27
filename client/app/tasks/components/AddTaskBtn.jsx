"use client";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
const AddTaskBtn = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <Button
          size={"lg"}
          className={"fixed bottom-5 right-5 z-50 rounded-full w-15 h-15 p-0"}
        >
          <Plus size={30} />
        </Button>
      ) : (
        <Button size={"lg"}>
          <Plus />
          Add Task
        </Button>
      )}
    </>
  );
};

export default AddTaskBtn;
