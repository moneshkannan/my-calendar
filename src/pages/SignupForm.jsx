import React from 'react'
import { Signup } from '../Components/form/Signup';
import signupImg from '../Assets/signup.png';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

function SignupForm() {
    return (
        <div>
            <Navbar active={true}/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <Signup/>
                        <h4 style={{marginTop:"2rem"}}>Already Have an Account
                            <Link to="/Login" style={{marginLeft:"1rem"}}>Sign in</Link>
                        </h4>
                    </div>
                    <div className="col-md-7 my-auto">
                        <img className="img-fluid w-100" src={signupImg} alt=""/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SignupForm
