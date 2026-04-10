import { Outlet } from "react-router-dom";
import AdminEditUser from "../components/AdminEditUser";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";

const AdminEditUserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      <main className="flex-1 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 py-8">
        <AdminEditUser />
      </main>
      <Footer />
      <Outlet />
    </div>
  );
};

export default AdminEditUserLayout;
