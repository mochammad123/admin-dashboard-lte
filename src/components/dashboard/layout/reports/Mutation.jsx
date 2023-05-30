import React, { useState } from "react";
import HeaderLayout from "../HeaderLayout";

const Mutation = () => {
  const today = new Date().toISOString().substr(0, 10);
  const [date, setDate] = useState(today);
  const [registeredAt, setRegisteredAt] = useState();
  const [verpackingAt, setVerpackingAt] = useState();

  return (
    <div>
      <HeaderLayout title="Report Mutation" menu="Reports" subMenu="Mutation" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-8">
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
                        <div className="col-md-1">
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
                        <div className="col-md-3">
                          <button
                            type="button"
                            className="btn btn-success"
                            data-toggle="modal"
                            data-target="#modal-default"
                            style={{ marginTop: "30px" }}
                          >
                            Search
                          </button>
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
                        <th>Date Mutation</th>
                        <th>Register No</th>
                        <th>Location</th>
                        <th>Parent</th>
                        <th>Asset Id</th>
                        <th>Asset</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>004</td>
                        <td>Elektronik</td>
                        <td>00262</td>
                        <td>Projector</td>
                        <td>Infokus N 112</td>
                        <td>Unit</td>
                        <td>Unit</td>
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

export default Mutation;
