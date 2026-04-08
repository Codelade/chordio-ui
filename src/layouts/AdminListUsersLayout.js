import React from "react";
import AdminListUsers from "../components/AdminListUsers";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AdminListUsersLayout = () => {
  return (
    <>
      <AdminNavbar />
      <AdminListUsers />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminListUsersLayout;
