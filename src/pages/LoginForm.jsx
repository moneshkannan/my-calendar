import React from "react";
import { Login } from "../Components/form/Login";
import loginimg from "../Assets/Login-amico.png";
import Navbar from "../Components/Navbar/Navbar";

function LoginForm() {
  return (
    <div>
      <Navbar active={true} />
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">
            <Login />
          </div>
          <div className="col-md-5 my-auto mobile">
            <img className="img-fluid w-80" src={loginimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
