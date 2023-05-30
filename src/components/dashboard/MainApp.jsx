import React from "react";
import Header from "./header/header";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";
import SidebarControl from "./control/SidebarControl";
import { Navigate, Outlet } from "react-router-dom";

const MainApp = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  return (
    <>
      {token ? (
        <div className="wrapper">
          <Header />
          <Menu />
          <div className="content-wrapper">
            <Outlet />
          </div>
          <Footer />
          <SidebarControl />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default MainApp;
