import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <p>Main</p>
      <Outlet />
    </div>
  );
};

export default Main;
