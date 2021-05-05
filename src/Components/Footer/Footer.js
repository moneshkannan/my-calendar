import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="page-container">
        <div className="main-footer">
        <div className="container" style={{textAlign:"center"}}>
            <div className="row">
            {/* Column1 */}
            <div className="col">
                <h4>Explore</h4>
                <ui className="list-unstyled">
                <li>Home</li>
                <li>Team</li>
                <li>Feature</li>
                <li>Contact Us</li>
                <li>Calendar</li>
                <li>Events</li>
                <li>Meeting</li>
                </ui>
            </div>
            {/* Column2 */}
            <div className="col">
                <h4>Follow Us</h4>
                <ui className="list-unstyled">
                <li>Linked In</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
                </ui>
            </div>
            {/* Column3 */}
            <div className="col">
                <h4>My Account</h4>
                <ui className="list-unstyled">
                <li>Sign Up/Sign In</li>
                <li>Login</li>
                <li>Register</li>
                </ui>
            </div>
            </div>
            <hr />
            <div className="row">
            <p className="col-sm" style={{textAlign:"center"}}>
                © Appointy | All rights reserved | Terms Of Service | Privacy
            </p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Footer;