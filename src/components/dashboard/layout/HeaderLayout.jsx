import React from "react";

const HeaderLayout = ({ title, menu, subMenu }) => {
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">{title}</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">{menu}</a>
                </li>
                <li className="breadcrumb-item active">{subMenu}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
