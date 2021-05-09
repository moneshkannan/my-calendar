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
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">
            <Signup />
          </div>
          <div className="col-md-5 my-auto mobile">
            <img
              className="img-fluid"
              style={{ width: "60rem" }}
              src={signupImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
