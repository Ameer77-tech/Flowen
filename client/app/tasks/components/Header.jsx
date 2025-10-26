import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Grid, List } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <Card
      className={
        "bg-transparent border-0 flex flex-row justify-between items-center"
      }
    >
      <CardHeader className={"w-1/2 place-items-start gap-0"}>
        <CardTitle className={"text-4xl"}>My Tasks</CardTitle>
        <CardDescription>
          Manage your tasks efficiently and effectively
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex gap-3 bg-secondary select-none text-secondary-foreground rounded-2xl p-5 shadow-sm shadow-muted-foreground/20">
          <div className="flex items-center gap-2 cursor-pointer">
            <List size={20} /> <p className="text-xl">List</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Grid size={20} /> <p className="text-xl">Grid</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Header;
