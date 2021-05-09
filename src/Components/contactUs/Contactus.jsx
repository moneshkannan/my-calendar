import React from "react";
import classes from "./contactUs.module.css";
import contact from "../../Assets/contactUs.svg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className={classes.contactus}>
        <div className={classes.content}>
          <div className={classes.text}>
            <h1 className={classes.contactus_header}>We are here to help</h1>
            <p className={classes.contactUs_para}>
            Have questions? At Appointy, we love talking to our clients. You can reach us via email or chat
            </p>
            <a className={classes.contactmail} href="mailto:appointyteam@gmail.com"> appointyteam@gmail.com </a>
          </div>
          <div>
            <img src={contact} className={classes.content_img} alt="" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contactus;
