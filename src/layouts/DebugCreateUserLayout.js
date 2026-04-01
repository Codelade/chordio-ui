import React from "react";
import { Outlet } from "react-router-dom";
import DebugNavbar from "../components/DebugNavbar";
import DebugCreateUser from "../components/DebugCreateUser";

const DebugCreateUserLayout = () => {
  return (
    <>
      <DebugNavbar />
      <DebugCreateUser />
      <Outlet />
    </>
  );
};

export default DebugCreateUserLayout;
