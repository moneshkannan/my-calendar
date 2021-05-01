import React from 'react'
import './Navbar.css';
import Appointy from '../../Assets/Appointy12.png';

const Navbar = () => {

    return (
      <div className="topnav" >
          <div className="Logo">
            <img src={Appointy} alt="Logo"></img>
          </div>

          <div className="topnav" id="myTopnav">
            <a href="#account" class="active">My Account</a>
            <a href="#team">Team</a>
            <a href="#features">Features</a>
          </div>
      </div>
    )
}


export default Navbar;