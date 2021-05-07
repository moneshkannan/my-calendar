import React from "react";
import { Signup } from "../Components/form/Signup";
import signupImg from "../Assets/signup.png";
import Navbar from "../Components/Navbar/Navbar";

function SignupForm() {
  return (
    <div>
      <Navbar active={true} />
      <div className="container" style={{ marginTop: "6rem" }}>
        <div className="row">
          <div className="col-md-5">
            <Signup />
          </div>
          <div className="col-md-7 my-auto">
            <img className="img-fluid w-100" src={signupImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
