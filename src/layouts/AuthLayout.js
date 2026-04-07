import React from "react";
import AuthMenu from "../components/AuthMenu";
import { Outlet } from "react-router-dom";
import DebugNavbar from "../components/DebugNavbar";

const AuthLayout = () => {
  return (
    <>
      <DebugNavbar />
      <AuthMenu />
      <Outlet />
    </>
  );
};

export default AuthLayout;
