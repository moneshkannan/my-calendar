import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

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
                    <li>
                        <Link to="/teampage" style={{ textDecoration: "none", color: "#fff" }}>
                            <a href="/teampage"  style={{ textDecoration: "none", color: "#fff" }}>Team</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/features1" style={{ textDecoration: "none", color: "#fff" }}>
                            <a href="/features"  style={{ textDecoration: "none", color: "#fff" }}>Features</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contactUS" style={{ textDecoration: "none", color: "#fff" }}>
                            <a href="/contactUS"  style={{ textDecoration: "none", color: "#fff" }}>Contact Us</a>
                        </Link>
                    </li>
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