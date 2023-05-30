import React, { useState } from "react";
import HeaderLayout from "../../HeaderLayout";

const DistributionAsset = () => {
  const today = new Date().toISOString().substr(0, 10);
  const [date, setDate] = useState(today);
  const [registeredAt, setRegisteredAt] = useState();
  const [verpackingAt, setVerpackingAt] = useState();

  return (
    <div>
      <HeaderLayout title="Distribution" menu="Asset" subMenu="Distribution" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-4">
                          <div
                            className="form-group mr-2"
                            style={{ width: "100%" }}
                          >
                            <label>Date Start</label>
                            <input
                              type="date"
                              className="form-control"
                              value={date}
                              max={today}
                              onChange={(e) => {
                                setRegisteredAt(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div
                            className="form-group mr-2"
                            style={{ width: "100%" }}
                          >
                            <label>To</label>
                            <input
                              type="date"
                              className="form-control"
                              value={date}
                              max={today}
                              onChange={(e) => {
                                setVerpackingAt(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div
                            className="form-group clearfix"
                            style={{ marginTop: "40px" }}
                          >
                            <div className="icheck-primary d-inline">
                              <input type="checkbox" id="checkboxPrimary1" />
                              <label htmlFor="checkboxPrimary1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-5"></div>
                        <div className="col-md-7">
                          <div className="form-group">
                            <label>Distribution No</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control w-25"
                                placeholder="Receive No"
                              />
                              <div className="input-group-append">
                                <button type="button" className="btn btn-info">
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-primary mb-2 mr-2"
                    data-toggle="modal"
                    data-target="#modal-default"
                  >
                    Add New
                  </button>
                  <button
                    type="button"
                    className="btn btn-success mb-2 mr-2"
                    data-toggle="modal"
                    data-target="#modal-default"
                  >
                    Excel
                  </button>
                  <button
                    type="button"
                    className="btn btn-success mb-2"
                    data-toggle="modal"
                    data-target="#modal-default"
                  >
                    PDF
                  </button>
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>Distribution No</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>004</td>
                        <td>Handphone</td>
                        <td>Electronik</td>
                        <td>Samsung</td>
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
                          <h4 className="modal-title">Add Distribution</h4>
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
                                    Distribution No
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
                                    Description
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
                                    Date
                                  </label>
                                  <input
                                    type="date"
                                    class="form-control"
                                    id="recipient-name"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 col-xs-12">
                                <div class="form-group">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                  >
                                    Asset Id
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="recipient-name"
                                  />
                                </div>
                                <div class="form-group">
                                  <div>
                                    <label className="col-form-label">
                                      Location
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
                              <div className="col-md-6 col-xs-12">
                                <div class="form-group">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                  >
                                    Asset
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
                                    Qty
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="recipient-name"
                                  />
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              className="btn btn-success mb-2"
                            >
                              Add Distribution
                            </button>

                            <table
                              id="example2"
                              className="table table-bordered table-hover"
                            >
                              <thead>
                                <tr>
                                  <th>Asset Id</th>
                                  <th>Asset</th>
                                  <th>UOM</th>
                                  <th>Qty</th>
                                  <th>Brand</th>
                                  <th>Location</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>0004</td>
                                  <td>Computer</td>
                                  <td>0001111</td>
                                  <td>0001111</td>
                                  <td>0001111</td>
                                  <td>Jakarta</td>
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

export default DistributionAsset;
