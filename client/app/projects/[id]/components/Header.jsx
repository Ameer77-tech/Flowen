import React from "react";
import {
  CardDescription,
  CardHeader,
  CardTitle,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Header = () => {
  return (
    <Card
      className={
        "bg-transparent border-r-0 md:border-0 border-b-2 border-t-0 border-l-0 rounded-none flex md:flex-row md:justify-between justify-center items-center"
      }
    >
      <CardHeader
        className={
          "md:w-1/2 w-full lg:place-items-start place-items-center gap-0"
        }
      >
        <CardTitle className={"text-2xl lg:text-4xl text-center"}>Website Redesign</CardTitle>
        <CardDescription className={"text-center"}>
          Revamp the company website with a modern UI and improved UX flow.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="ml-auto bg-green-500 hover:bg-green-600">
          <Plus className="mr-2 h-4 w-4" /> Add Task
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Header;
