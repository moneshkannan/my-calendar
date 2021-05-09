import React, { useState, useEffect } from 'react';
import "./myacc.css";
import axios from 'axios';
import API from '../../service/api';
import Loader from '../Loader/Loader';
import Notification from "../../service/NotificationService";
import Footer from '../Footer/Footer';

function MyAcc() {


    const [isLoading, setisLoading] = useState(true);

    // fetch function
    const url = `${API}/fetch_user_id/${localStorage.getItem("id")}`;
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setUser(res.data.response)
                setisLoading(false)
            })
            .catch(err => { console.log(err) })
    }, [url])

    //update function
    const [update, setUpdate] = useState({
        name: ''
    })
    const updateURL = `${API}/update_user_id/${localStorage.getItem("id")}`
    function handle(e) {
        const newupdate = { ...update }
        newupdate[e.target.id] = e.target.value
        setUpdate(newupdate)
        //console.log(newupdate)
    }
    function submit(e) {
        e.preventDefault();
        axios.patch(updateURL, {
            name: update.name
        }).then(res => {
            Notification.show({ status: true, message: "Updated successfully..." });
        }).catch(err => {
            if (err.response) {
                Notification.show(err.response)
            }
        })
    }
    //change password
    const changePasswordURL = `${API}/changePassword`
    const [password, setPassword] = useState({
        email: "",
        newPassword: ""
    })


    const passwordhandle = (e) => {
        const addPassword = { ...password }
        addPassword[e.target.id] = e.target.value
        setPassword(addPassword)
    }


    function passwordsubmit(e) {
        e.preventDefault();

        axios.post(changePasswordURL, {
            email: user.email,
            newPassword: password.newPassword
        }).then(res => {
            Notification.show(res.data)
        }).catch(err => {
            if (err.response) {
                Notification.show(err.response)
            }
        })
    }
    function showPassword() {
        var password = document.getElementById("newPassword")
        if (password.type === "password") {
            password.type = 'text'
        }
        else {
            password.type = 'password'
        }
    }
    return (

        <>
            { isLoading ? <Loader /> :
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
                                                    <h4>{user.name}</h4>
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
                                                    {user.name}
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Email</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    {user.email}
                                                </div>
                                            </div>
                                            <hr />

                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Role</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    {user.role}
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
                                                                <label htmlFor="exampleInputPassword1">email</label>
                                                                <input type="email" className="form-control" id="email" value={user.email} readOnly />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputPassword2">set New Password</label>
                                                                <input
                                                                    type="password"
                                                                    value={password.newPassword}
                                                                    onChange={(e) => passwordhandle(e)}
                                                                    className="form-control"
                                                                    id="newPassword"
                                                                    placeholder="Password"
                                                                />
                                                                <div className="m-1">
                                                                    <input type="checkbox" onClick={() => showPassword()} />
                                                                    <span style={{ marginLeft: "1rem" }}>show Password</span>
                                                                </div>
                                                                <div style={{ color: "red" }}>
                                                                    <span>Note</span>
                                                                    <ul>
                                                                        <li>password must be at least 8 characters</li>
                                                                        <li>must have One Number and one Special Character</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button onClick={(e) => { passwordsubmit(e) }} type="button" className="btn btn-primary">Save changes</button>
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
                                                                <input
                                                                    type="text" className="form-control" onChange={(e) => handle(e)} id="name" value={update.name} placeholder={user.name} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputPassword1">Email</label>
                                                                <input type="email" className="form-control" id="email" value={user.email} readOnly />
                                                            </div>
                                                            {/* <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Photo</label><br />
                                                            <input type="file" id="img" name="img" accept="image/*"></input>
                                                        </div> */}
                                                            {/* <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Password</label>
                                                            <input type="password" className="form-control" id="password" placeholder="Password" />
                                                        </div> */}
                                                            {/* <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Location</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                        </div> */}
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary" onClick={(e) => { submit(e) }}>Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            }

        </>
    )
}

export default MyAcc;