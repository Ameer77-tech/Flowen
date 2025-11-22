"use client";
import React, { useState } from "react";
import ProjectCard from "./Card";
import useProjectStore from "@/app/Store/project.store";
import ShowDialog from "@/components/Dialog";
import { AnimatePresence } from "motion/react";

const Cards = () => {
  const projects = useProjectStore((state) => state.projects);
  const [hoveredProject, setHoveredProject] = useState("");

  const [actionClicked, setActionClicked] = useState("");
  const [action, setaction] = useState("");
  const [projectData, setprojectData] = useState("");
  const [editingProject, seteditingProject] = useState("");
  const [editingForm, setEditingForm] = useState(false);
  const [isPending, setisPending] = useState(false);
  const apiUrl = `${process.env.NEXT_PUBLIC_XTASK_BACKEND}/api/projects`;
  const onDelete = async (id) => {};
  const onEdit = (id) => {};
  const onMark = (id) => {};
  return (
    <>
      <AnimatePresence>
        {actionClicked && (
          <ShowDialog
            Data={projectData}
            setActionClicked={setActionClicked}
            onDelete={onDelete}
            action={action}
            seteditingTask={seteditingProject}
            onMark={onMark}
            isPending={isPending}
            setEditingForm={setEditingForm}
          />
        )}
      </AnimatePresence>
      <div className="grid md:mt-5 md:p-0 p-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center gap-5">
        {projects.length < 1 ? (
          <p className="text-muted-foreground text-center lg:col-span-3 mt-10 md:col-span-2 col-span-1">
            No Projects
          </p>
        ) : (
          projects?.map((project, idx) => (
            <ProjectCard
              key={project._id}
              project={project}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
              onDelete={onDelete}
              onEdit={onEdit}
              onMark={onMark}
              setData={setprojectData}
              setActionClicked={setActionClicked}
              setaction={setaction}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Cards;
