import React from "react";
import { Outlet } from "react-router-dom";
import DebugNavbar from "../components/DebugNavbar";
import DebugCreateUser from "../components/DebugCreateUser";
import Footer from "../components/Footer";

const DebugCreateUserLayout = () => {
  return (
    <>
      <DebugNavbar />
      <DebugCreateUser />
      <Outlet />
      <Footer />
    </>
  );
};

export default DebugCreateUserLayout;
