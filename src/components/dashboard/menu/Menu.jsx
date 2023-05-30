import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/img/AdminLTELogo.png";

const Menu = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src={Logo}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Hitachi</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
       with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Reports
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/report/overview" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Overview</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/report/asset" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Asset</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/report/registration" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Registration</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/report/receive" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Receive</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/report/distribution" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Distribution</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/report/mutation" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Mutation</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/report/inspection" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inspection</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Asset
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/asset/setup-asset" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Setup Aset</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/asset/registration" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Registration</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/asset/receive" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Receive</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/asset/distribution" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Distribution</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    User Management
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/management/user" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>User</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/management/role" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Role</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/management/menu-role" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Menu Role</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/management/user-role" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>User Role</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a href="./index3.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sys Setting</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>Gallery</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Menu;
