import React from "react";
import AdminListUsers from "../components/AdminListUsers";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AdminListUsersLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      <main className="flex-1 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 py-8">
        <AdminListUsers />
      </main>
      <Footer />
      <Outlet />
    </div>
  );
};

export default AdminListUsersLayout;
