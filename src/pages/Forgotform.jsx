import React from "react";
import { Forgotpassword } from "../Components/form/Forgotpassword";
import Forgot from "../Assets/Forget.svg";
import Navbar from "../Components/Navbar/Navbar";

function Forgotform() {
  return (
    <div>
      <Navbar active={true} />
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">
            <Forgotpassword />
          </div>
          <div className="col-md-5 my-auto mobile">
            <img className="img-fluid w-80" src={Forgot} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgotform;
