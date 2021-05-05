import React, { Component } from 'react';
import './Navbar.css';
import Appointy from '../../Assets/Appointy12.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {
        clicked: false,
        active: this.props.active,
        valid: this.props.active
    }



    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (!this.state.valid) {
            if (window.scrollY >= 100) {
                this.setState({ active: true });
            }
            else {
                this.setState({ active: false });
            }
        }
    }



    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className={`NavbarItems ${this.state.active && 'navbar_active'}`}>
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
                        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                            <a className="nav-links" href="/">Home</a> 
                        </Link>
                    </li>

                    <li>
                        <Link to="/teampage" style={{ textDecoration: "none", color: "#fff" }}>
                            <a className="nav-links" href="/teampage">Team</a>
                        </Link>
                    </li>

                    <li>
                        <a className="nav-links" href="/#">Features</a>
                    </li>

                    <li>
                        <Link to="/contactUS" style={{ textDecoration: "none", color: "#fff" }}>  
                            <a className="nav-links" href="/contactUS">Contact Us</a>
                        </Link>
                    </li>

                    <li className="nav_btn">
                        <Link to="/login" className="myAccount" style={{ textDecoration: "none", color: "#fff" }}>
                            <a className="nav-myAccount" href="login" style={{ textDecoration: "none", color: "#fff" }}>My Account</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;