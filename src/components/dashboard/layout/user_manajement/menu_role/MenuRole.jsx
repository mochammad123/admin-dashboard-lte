import React from "react";
import HeaderLayout from "../../HeaderLayout";

const MenuRole = () => {
  return (
    <div>
      <HeaderLayout
        title="Menu Role"
        menu="User Management"
        subMenu="Menu Role"
      />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-7">
                            <div>
                              <select
                                className="form-control select2"
                                style={{ width: "100%" }}
                              >
                                <option selected="selected">Alabama</option>
                                <option>Alaska</option>
                                <option>California</option>
                                <option>Delaware</option>
                                <option>Tennessee</option>
                                <option>Texas</option>
                                <option>Washington</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <button
                              type="button"
                              className="btn btn-primary mb-2"
                              data-toggle="modal"
                              data-target="#modal-default"
                            >
                              Add Menu Role
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                      <div className="d-flex justify-content-end">
                        <div className="input-group">
                          <input type="text" className="form-control w-25" />
                          <div className="input-group-append">
                            <button type="button" className="btn btn-info">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="card-title"></h3>
                </div>
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width="5%">1</td>
                        <td width="65%">Administrator</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-success mr-2"
                          >
                            Edit
                          </button>
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="d-flex justify-content-end">
                    <nav aria-label="Page navigation example" className="mt-2">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  {/* Modal */}
                  <div className="modal fade" id="modal-default">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">Add User</h4>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="row">
                              <div className="col-md-6 col-xs-12">
                                <div class="form-group">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                  >
                                    Role
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="recipient-name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 col-xs-12">
                                <div class="form-group">
                                  <div>
                                    <label className="col-form-label">
                                      Platform
                                    </label>
                                    <select
                                      className="form-control select2"
                                      style={{ width: "100%" }}
                                    >
                                      <option selected="selected">True</option>
                                      <option>False</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div>
                                    <label className="col-form-label">
                                      Parent Menu
                                    </label>
                                    <select
                                      className="form-control select2"
                                      style={{ width: "100%" }}
                                    >
                                      <option selected="selected">True</option>
                                      <option>False</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <table
                              id="example2"
                              className="table table-bordered table-hover"
                            >
                              <thead>
                                <tr>
                                  <th></th>
                                  <th>Id</th>
                                  <th>Menu</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex justify-content-center">
                                      <div className="form-group clearfix">
                                        <div className="icheck-primary d-inline">
                                          <input
                                            type="checkbox"
                                            id="checkboxPrimary1"
                                          />
                                          <label htmlFor="checkboxPrimary1" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>1</td>
                                  <td width="65%">Administrator</td>
                                </tr>
                              </tbody>
                            </table>
                          </form>
                        </div>
                        <div className="modal-footer justify-content-between">
                          <button
                            type="button"
                            className="btn btn-default"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuRole;
