import React from "react";
import Task from "./Task";

const Tasks = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((_,idx) => (
        <Task key={idx}/>
      ))}
    </div>
  );
};

export default Tasks;
