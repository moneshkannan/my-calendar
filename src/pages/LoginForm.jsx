import React from 'react'
import { Login } from '../Components/form/Login'
import loginimg from '../Assets/Login-amico.png';
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';
//import SignupForm from './SignupForm';

function LoginForm() {
    return (
        <div>
            <Navbar active={true}/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <Login/>
                        <h4 className="mt-5">Do not have an Account
                        <Link to="/signup" style={{marginLeft:"1rem"}}>Sign up</Link>
                    </h4>
                    </div>
                    <div className="col-md-7 my-auto">
                        <img className="img-fluid w-80" src={loginimg} alt=""/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default LoginForm
