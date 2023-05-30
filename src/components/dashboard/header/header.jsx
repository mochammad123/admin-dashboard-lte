import React from "react";
import User1 from "../../../assets/img/user1-128x128.jpg";
import User2 from "../../../assets/img/user8-128x128.jpg";
import User3 from "../../../assets/img/user3-128x128.jpg";

const index = () => {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <div className="row">
                <div className="col-md-10">
                  <div className="d-flex justify-content-end">
                    <p>User Guide</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <i className="fa fa-info-circle"></i>
                </div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fa fa-info-circle mr-2"></i> User Guide RFID
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fa fa-info-circle mr-2"></i> Download Page
              </a>
            </div>
          </li>
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <div className="row">
                <div className="col-md-8">
                  <div className="d-flex justify-content-end">
                    <p>Admin</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <i class="fa fa-user-circle" aria-hidden="true"></i>
                </div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                You Logged as <b>Administrator</b>
              </span>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> admin@nci.co.id
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i class="fa fa-phone mr-2"></i> 088777778
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i class="fa fa-key mr-2"></i> Change Password
              </a>
              <span className="dropdown-item dropdown-header">
                <b>Logout</b>
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default index;
