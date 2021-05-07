import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./myacc.css";
import Footer from '../Footer/Footer';


function MyAcc() {
    return (
        <>
            <Navbar active={true} />
            <div className="myAcc">
                <div className="container">
                    <div className="main-body">
                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                            <div className="mt-3">
                                                <h4>Pavithiran</h4>
                                                <p className="text-secondary mb-1">Intern</p>
                                                <p className="text-muted font-size-sm">Chennai</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=" col-md-8 userdetails">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                pavithiran
                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                pavithiran.b@codingmart.com
                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Phone</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                9791098863
                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Password</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                n****3
                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-sm">
                                                <button className="btn btn-primary userpgbtn" data-toggle="modal" data-target="#editdetails">Edit Details</button>
                                                <button className="btn btn-primary" data-toggle="modal" data-target="#changepass">Change Password</button>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="modal fade" id="changepass" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLongTitle">Change Password</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div>
                                                    <form>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Old Password</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword2">New Password</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword3">Confirm New Password</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="modal fade" id="editdetails" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLongTitle">Change Password</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div>
                                                    <form>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Name</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Email</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Phone</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Photo</label><br />
                                                            <input type="file" id="img" name="img" accept="image/*"></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Designation</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Location</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyAcc;