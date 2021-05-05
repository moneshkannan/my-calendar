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
                <h4>Contact</h4>
                <ui className="list-unstyled">
                <li>Appointy Team</li>
                <li><i className="fas fa-envelope"></i><a href="mailto:appointyteam@gmail.com" style={{textDecoration:"none", color:"white"}}> appointyteam@gmail.com </a></li>
                </ui>
            </div>
            {/* Column2 */}
            <div className="col">
                <h4>Menu</h4>
                <ui className="list-unstyled">
                <li>Team</li>
                <li>Features</li>
                <li>Contact us</li>
                </ui>
            </div>
            {/* Column3 */}
            <div className="col">
                <h4>Connect with us</h4>
                <ui className="list-unstyled">
                <li><i className="fab fa-linkedin"></i> LinkedIn</li>
                <li><i className="fab fa-twitter"></i> Twitter</li>
                <li><i className="fab fa-facebook"></i> Facebook</li>
                </ui>
            </div>
            </div>
            <hr />
            <div className="row">
            <p className="col-sm" style={{textAlign:"center"}}>
                © Copyright 2021 Appointy | All rights reserved | Terms Of Service | Privacy
            </p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Footer;