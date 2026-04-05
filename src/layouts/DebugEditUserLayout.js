import { Outlet } from "react-router-dom";
import DebugEditUser from "../components/DebugEditUser";
import DebugNavbar from "../components/DebugNavbar";

const DebugEditUserLayout = () => {
  return (
    <>
      <DebugNavbar />
      <DebugEditUser />;
      <Outlet />
    </>
  );
};

export default DebugEditUserLayout;
