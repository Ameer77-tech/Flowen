import React from "react";
import ProjectCard from "./Card";


const Cards = ({ data }) => {
  return (
    <div className="grid md:mt-5 md:p-0 p-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center gap-5">
      {data?.map((project, idx) => (
          <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Cards;
