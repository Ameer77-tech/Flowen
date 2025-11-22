"use client";
import React, { useState } from "react";
import ProjectCard from "./Card";
import useProjectStore from "@/app/Store/project.store";
import ShowDialog from "@/components/Dialog";
import { AnimatePresence } from "motion/react";
import Toast from "@/components/Toast";

const Cards = () => {
  const projects = useProjectStore((state) => state.projects);
  const deleteProject = useProjectStore((state) => state.deleteProject);
  const [hoveredProject, setHoveredProject] = useState("");

  const [actionClicked, setActionClicked] = useState("");
  const [action, setaction] = useState("");
  const [projectData, setprojectData] = useState("");
  const [editingProject, seteditingProject] = useState("");
  const [editingForm, setEditingForm] = useState(false);
  const [isPending, setisPending] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastData, settoastData] = useState({
    message: "",
    type: "",
    isSuccess: false,
  });
  const apiUrl = `${process.env.NEXT_PUBLIC_XTASK_BACKEND}/api/projects`;
  const onDelete = async (id) => {
    setisPending(true);
    if (projectData.id === "" || projectData.id.length === 0) {
      return;
    }
    try {
      const res = await fetch(`${apiUrl}/delete-project/${projectData.id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });
      const response = await res.json();
      if (!response.success) {
        settoastData({
          message: response.reply,
          type: "error",
          isSuccess: false,
        });
        setShowToast(true);
      } else {
        deleteProject(response.id);
        settoastData({
          message: response.reply,
          type: "success",
          isSuccess: false,
        });
        setShowToast(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setisPending(false);
      setActionClicked(false);
      setTimeout(() => {
        setShowToast(false);
        settoastData({
          message: "",
          type: "",
          isSuccess: false,
        });
      }, 2000);
    }
  };
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
      <Toast show={showToast} toastData={toastData} />
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
