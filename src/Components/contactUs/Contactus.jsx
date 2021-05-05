import React from "react";
import classes from "./contactUs.module.css";
import contact from "../../Assets/contactUs.svg";
import Navbar from "../Navbar/Navbar";


const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className={classes.contactus}>
        <div className={classes.content}>
          <div className={classes.text}>
            <h1 className={classes.contactus_header}>Contact Us</h1>
            <p className={classes.contactUs_para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              corporis sunt qui incidunt praesentium dolorem quos officiis minus
              nihil totam tempora cor Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maxime corporis sunt qui incidunt praesentium
              dolorem quos officiis minus nihil totam tempora cor rupti id,
              temporibus, unde doloribus. Voluptatibus doloremque illum fuga.
            </p>
          </div>
          <div>
            <img src={contact} className={classes.content_img} alt="" />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contactus;
