import React from 'react'
import { Outlet } from "react-router-dom";
import DebugNavbar from "../components/DebugNavbar";


const DebugLayout = () => {
  return (
    <>
      <DebugNavbar />
      <Outlet />
    </>
  )
}

export default DebugLayout