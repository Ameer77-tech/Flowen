"use client";
import React from "react";
import ProjectCard from "./Card";
import useProjectStore from "@/app/Store/project.store";

const Cards = () => {
  const projects = useProjectStore((state) => state.projects);

  return (
    <div className="grid md:mt-5 md:p-0 p-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center gap-5">
      {projects.map((project, idx) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default Cards;
