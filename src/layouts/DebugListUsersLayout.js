import React from "react";
import DebugListUsers from "../components/DebugListUsers";
import DebugNavbar from "../components/DebugNavbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const DebugListUsersLayout = () => {
  return (
    <>
      <DebugNavbar />
      <DebugListUsers />
      <Outlet />
      <Footer />
    </>
  );
};

export default DebugListUsersLayout;
