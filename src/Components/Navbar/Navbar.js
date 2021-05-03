import React, { Component } from 'react';
import './Navbar.css';
import Appointy from '../../Assets/Appointy12.png';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
              <div className="navbar-logo">
                <Link to="/">
                <img src={Appointy} alt="Logo"></img>
                </Link>
              </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            <li>
                                <a className="nav-links" href="/#">
                                Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-links" href="/#">
                                Team
                                </a>
                            </li>
                            <li>
                                <a className="nav-links" href="/#">
                                Features
                                </a>
                            </li>
                            <li>
                                <a className="nav-links" href="/#">
                                Contact Us
                                </a>
                            </li>
                            <li>
                            <Link to="/login"><a className="nav-links" href="/#">
                                My Account
                                </a></Link>
                            </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar