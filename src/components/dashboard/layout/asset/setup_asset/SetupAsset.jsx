import React from "react";
import HeaderLayout from "../../HeaderLayout";

const SetupAsset = () => {
  return (
    <div>
      <HeaderLayout title="Setup Asset" menu="Asset" subMenu="Setup Asset" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-6"></div>
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
                        <th>Asset Id</th>
                        <th>Asset</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>UOM</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>004</td>
                        <td>Handphone</td>
                        <td>Electronik</td>
                        <td>Samsung</td>
                        <td>Unit</td>
                        <td>2,000,000</td>
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
                          <h4 className="modal-title">Add New Asset</h4>
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
                                    Asset Id
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
                                    Brand
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
                                      Category
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
                                      UOM
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
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                  >
                                    Price
                                  </label>
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="recipient-name"
                                  />
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

export default SetupAsset;
