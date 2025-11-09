import React from "react";
import Header from "./Header";
import Filter from "./Filter";
import Cards from "./Cards";

const Main = () => {
  return (
    <div className="md:p-10 w-full overflow-scroll">
      <Header />
      <Filter />
      <Cards />
    </div>
  );
};

export default Main;
