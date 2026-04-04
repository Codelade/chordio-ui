import React from "react";
import DebugListUsers from "../components/DebugListUsers";
import DebugNavbar from "../components/DebugNavbar";
import { Outlet } from "react-router-dom";

const DebugListUsersLayout = () => {
  return (
    <>
      <DebugNavbar />
      <DebugListUsers />
      <Outlet />
    </>
  );
};

export default DebugListUsersLayout;
