import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import AdminCreateUser from "../components/AdminCreateUser";
import Footer from "../components/Footer";

const AdminCreateUserLayout = () => {
  return (
    <>
      <AdminNavbar />
      <AdminCreateUser />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminCreateUserLayout;
