import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import MobileBtn from "./MobileBtn";

const NewProBtn = () => {
  return (
    <>
      <Button className={"hidden md:flex"} variant={"default"} size={"lg"}>
        <Plus />
        New Project
      </Button>
      <MobileBtn />
    </>
  );
};

export default NewProBtn;
