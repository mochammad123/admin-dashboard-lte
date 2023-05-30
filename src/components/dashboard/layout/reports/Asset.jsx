import React from "react";
import Assets from "./../../../../data/asset.json";
import HeaderLayout from "../HeaderLayout";

const Asset = () => {
  return (
    <div>
      <HeaderLayout title="Report Assets" menu="Reports" subMenu="Asset" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-md-8">
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
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex justify-content-end">
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

                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>Category Id</th>
                        <th>Category</th>
                        <th>Asset Id</th>
                        <th>Asset</th>
                        <th>Brand</th>
                        <th>UOM</th>
                        <th>Price</th>
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
                        <td>4,500,000</td>
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

export default Asset;
