import React from 'react'
import { Forgotpassword } from '../Components/form/Forgotpassword';
import Forgot from '../Assets/Forget.svg';
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';
//import SignupForm from './SignupForm';

function Forgotform() {
    return (
        <div>
            <Navbar active={true}/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <Forgotpassword/>
                        <h4 className="mt-5">Remembered password!!!
                            <Link to="/Login" style={{marginLeft:"1rem"}}>Signin</Link>
                        </h4>
                    </div>
                    <div className="col-md-7 my-auto">
                        <img className="img-fluid w-80" src={Forgot} alt=""/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Forgotform
