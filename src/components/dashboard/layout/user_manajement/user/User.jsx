import React from "react";
import HeaderLayout from "../../HeaderLayout";

const User = () => {
  return (
    <div>
      <HeaderLayout title="User" menu="User Manajemen" subMenu="User" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-8"></div>
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
                  <button
                    type="button"
                    className="btn btn-primary mb-2"
                    data-toggle="modal"
                    data-target="#modal-default"
                  >
                    Add New
                  </button>

                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Job Position</th>
                        <th>Role</th>
                        <th>Active</th>
                        <th>Access Failed Count</th>
                        <th>User Locked</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width="5%">1</td>
                        <td>admin@nci.co.id</td>
                        <td>Admin</td>
                        <td>Administrator</td>
                        <td>undifined</td>
                        <td>Yes</td>
                        <td>0</td>
                        <td>No</td>
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
                                    Email
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="recipient-name"
                                  />
                                </div>
                                <div class="form-group">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                  >
                                    Password
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="recipient-name"
                                  />
                                </div>
                                <div class="form-group">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                  >
                                    Job Position
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
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                  >
                                    Full Name
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="recipient-name"
                                  />
                                </div>
                                <div class="form-group">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                  >
                                    Confirm Password
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="recipient-name"
                                  />
                                </div>
                                <div className="row">
                                  <div className="col-md-7 col-xs-12">
                                    <div class="form-group">
                                      <label
                                        for="recipient-name"
                                        class="col-form-label"
                                      >
                                        Phone
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="recipient-name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-5 col-xs-12">
                                    <div class="form-group">
                                      <div>
                                        <label className="col-form-label">
                                          Active
                                        </label>
                                        <select
                                          className="form-control select2"
                                          style={{ width: "100%" }}
                                        >
                                          <option selected="selected">
                                            True
                                          </option>
                                          <option>False</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
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

export default User;
