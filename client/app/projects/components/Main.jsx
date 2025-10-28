import React from "react";
import Header from "./Header";
import Cards from "./Cards";

const Main = ({ data }) => {
  return (
    <div className="md:p-10 w-full overflow-scroll">
      <Header />
      <Cards data={data}/>
    </div>
  );
};

export default Main;
