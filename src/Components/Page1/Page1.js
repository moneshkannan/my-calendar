import React from 'react';
import './Page1.css';
import HomeImage from '../../Assets/HomeImage.svg';

const Page1 = () => {

    return (
        <div>
            <div className="page1">
                <img src={HomeImage} alt="Calendar Appointy" width= "450" height= "320"></img>
            </div>
            <div className="Text">
                <h1>Appointy helps you schedule meetings without the back-and-forth emails</h1>
            </div>
            <div className="email-box">
                <form class="email-box">
                    <input type="email" placeholder="Enter your email"/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        </div>
    )
}


export default Page1;