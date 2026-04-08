import { Outlet } from "react-router-dom";
import AdminEditUser from "../components/AdminEditUser";
import AdminNavbar from "../components/AdminNavbar";
import Footer from "../components/Footer";

const AdminEditUserLayout = () => {
  return (
    <>
      <AdminNavbar />
      <AdminEditUser />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminEditUserLayout;
