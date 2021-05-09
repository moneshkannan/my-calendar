import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
    return (<>

        <div className="main-footer" style={{ textAlign: "center" }}>
            <div className="main_row">
                {/* Column1 */}
                <div className="">
                    <h4 style={{ fontWeight: "bold" }}>Contact</h4>
                    <ui className="list-unstyled">
                        <li style={{ color: "rgba(255,255,255,0.7)" }}>Appointy Team</li>
                        <li><i className="fas fa-envelope"></i><a href="mailto:appointyteam@gmail.com" style={{ textDecoration: "none", color: "rgba(255,255,255,0.7)" }}> appointyteam@gmail.com </a></li>
                    </ui>
                </div>
                {/* Column2 */}
                <div className="">
                    <h4 style={{ fontWeight: "bold" }}>Menu</h4>
                    <ui className="list-unstyled">
                        <li>
                            <Link to="/teampage" style={{ textDecoration: "none", color: "rgba(255,255,255,0.7)" }}>
                                <a href="/teampage" style={{ textDecoration: "none", color: "rgba(255,255,255,0.7)" }}>Team</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/features1" style={{ textDecoration: "none", color: "rgba(255,255,255,0.7)" }}>
                                <a href="/features" style={{ textDecoration: "none", color: "rgba(255,255,255,0.7)" }}>Features</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contactUS" style={{ textDecoration: "none", color: "rgba(255,255,255,0.7)" }}>
                                <a href="/contactUS" style={{ textDecoration: "none", color: "rgba(255,255,255,0.7)" }}>Contact Us</a>
                            </Link>
                        </li>
                    </ui>
                </div>
                {/* Column3 */}
                <div className="">
                    <h4 style={{ fontWeight: "bold" }}>Connect with us</h4>
                    <ui className="list-unstyled">
                        <li style={{ color: "rgba(255,255,255,0.7)" }}><i className="fab fa-linkedin" style={{ color: "#E83A59" }}></i> LinkedIn</li>
                        <li style={{ color: "rgba(255,255,255,0.7)" }}><i className="fab fa-twitter" style={{ color: "#E07C24" }}></i> Twitter</li>
                        <li style={{ color: "rgba(255,255,255,0.7)" }}><i className="fab fa-facebook" style={{ color: "#2827CC" }}></i> Facebook</li>
                    </ui>
                </div>
            </div>
        </div>
        <div className="line"></div>
        <div style={{ backgroundColor: "#03182c", textAlign: "center", color: "rgba(255,255,255,0.5)", padding: "15px" }} className="copy_right">
            © Copyright 2021 Appointy | All rights reserved | Terms Of Service | Privacy
        </div>

    </>
    );
}

export default Footer;