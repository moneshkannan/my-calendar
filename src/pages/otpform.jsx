import React from 'react'
import { Otp } from '../Components/form/otp';
import OTP from '../Assets/OTP.svg';
import Navbar from '../Components/Navbar/Navbar';
//import SignupForm from './SignupForm';

function otpform() {
    return (
        <div>
            <Navbar active={true}/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <Otp/>
                    </div>
                    <div className="col-md-7 my-auto">
                        <img className="img-fluid w-80" src={OTP} alt=""/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default otpform
