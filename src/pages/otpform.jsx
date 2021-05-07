import React from "react";
import { Otp } from "../Components/form/otp";
import OTP from "../Assets/OTP.svg";
import Navbar from "../Components/Navbar/Navbar";
//import SignupForm from './SignupForm';

function otpform() {
  return (
    <div>
      <Navbar active={true} />
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">
            <Otp />
          </div>
          <div className="col-md-5 my-auto mobile">
            <img className="img-fluid w-80" src={OTP} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default otpform;
