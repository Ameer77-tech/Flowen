"use client";
import React from "react";
import ProjectCard from "./Card";
import useProjectStore from "@/app/Store/project.store";

const Cards = () => {
  const projects = useProjectStore((state) => state.projects);
  return (
    <div className="grid md:mt-5 md:p-0 p-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center gap-5">
      {projects.length < 1 ? (
        <p className="text-muted-foreground text-center lg:col-span-3 mt-10 md:col-span-2 col-span-1">
          No Projects
        </p>
      ) : (
        projects?.map((project, idx) => (
          <ProjectCard key={project._id} project={project} />
        ))
      )}
    </div>
  );
};

export default Cards;
