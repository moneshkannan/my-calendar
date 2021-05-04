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
                <h4>Column 1</h4>
                <ui className="list-unstyled">
                <li>Column 1</li>
                <li>Column 1</li>
                <li>Column 1</li>
                </ui>
            </div>
            {/* Column2 */}
            <div className="col">
                <h4>Column 1</h4>
                <ui className="list-unstyled">
                <li>Column 1</li>
                <li>Column 1</li>
                <li>Column 1</li>
                </ui>
            </div>
            {/* Column3 */}
            <div className="col">
                <h4>Column 1</h4>
                <ui className="list-unstyled">
                <li>Column 1</li>
                <li>Column 1</li>
                <li>Column 1</li>
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