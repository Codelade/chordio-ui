import { Outlet } from "react-router-dom";
import DebugEditUser from "../components/DebugEditUser";
import DebugNavbar from "../components/DebugNavbar";
import Footer from "../components/Footer";

const DebugEditUserLayout = () => {
  return (
    <>
      <DebugNavbar />
      <DebugEditUser />
      <Outlet />
      <Footer />
    </>
  );
};

export default DebugEditUserLayout;
