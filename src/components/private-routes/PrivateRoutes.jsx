import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");

  return <>{token ? <Navigate to="/report/overview" /> : <Outlet />}</>;
};

export default PrivateRoutes;
