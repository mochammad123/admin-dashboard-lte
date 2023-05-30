import React, { useState } from "react";
import HeaderLayout from "../HeaderLayout";

const Registration = () => {
  const today = new Date().toISOString().substr(0, 10);
  const [date, setDate] = useState(today);
  const [registeredAt, setRegisteredAt] = useState();
  const [verpackingAt, setVerpackingAt] = useState();

  return (
    <div>
      <HeaderLayout
        title="Report Registration"
        menu="Reports"
        subMenu="Registration"
      />
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
                        <div className="col-md-5">
                          <div className="form-group">
                            <label>Asset Id</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control w-25"
                                placeholder="Asset Id"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="form-group">
                            <label>Asset</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control w-25"
                                placeholder="Asset"
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
                        <th>Date Register</th>
                        <th>Asset Id</th>
                        <th>Asset</th>
                        <th>Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>004</td>
                        <td>Elektronik</td>
                        <td>00262</td>
                        <td>Projector</td>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
