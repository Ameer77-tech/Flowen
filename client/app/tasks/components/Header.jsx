"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Grid, List } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const Header = ({ view, setview }) => {
  const [left, setleft] = useState(0);
  const [width, setwidth] = useState(0);
  const [viewCardPos, setviewCardPos] = useState(0);
  const viewCardRef = useRef(null);
  const tabRef = useRef(null);

  useEffect(() => {
    if (viewCardRef.current) {
      const rect = viewCardRef.current.getBoundingClientRect();
      setviewCardPos(rect.left);
    }

    if (tabRef.current) {
      setleft(tabRef.current.getBoundingClientRect().left);
      setwidth(tabRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <Card
      className={
        "bg-transparent md:border-0 border-b rounded-none flex flex-row md:justify-between justify-center items-center"
      }
    >
      <CardHeader className={"md:w-1/2 w-full md:place-items-start place-items-center gap-0"}>
        <CardTitle className={"text-4xl"}>My Tasks</CardTitle>
        <CardDescription>
          Manage your tasks efficiently and effectively
        </CardDescription>
      </CardHeader>

      <CardFooter className={"p-0 w-50 md:block hidden"}>
        <div
          ref={viewCardRef}
          className="flex relative gap-3 bg-secondary justify-center select-none text-secondary-foreground rounded-2xl w-full px-0 py-3 shadow-sm shadow-muted-foreground/20 overflow-hidden"
        >
          <motion.div
            animate={{
              left: left - viewCardPos,
              width: width,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-accent top-1/2 -translate-y-1/2 left-0 rounded-xl absolute h-3/4 z-0"
          ></motion.div>
          <div
            ref={tabRef}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setleft(rect.left);
              setwidth(rect.width);
              setview("list");
            }}
            className={`flex items-center justify-center w-1/2 gap-2  rounded cursor-pointer relative z-10 transition-colors ${
              view === "list"
                ? "text-primary-foreground"
                : "text-secondary-foreground"
            }`}
          >
            <List size={20} /> <p className="text-xl">List</p>
          </div>

          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setleft(rect.left);
              setwidth(rect.width);
              setview("grid");
            }}
            className={`flex items-center justify-center w-1/2 gap-2 cursor-pointer relative z-10 transition-colors ${
              view === "grid"
                ? "text-primary-foreground"
                : "text-secondary-foreground"
            }`}
          >
            <Grid size={20} /> <p className="text-xl">Grid</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Header;
