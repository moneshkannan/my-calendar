import React from 'react'
import './Page1.css';

const Page1 = () => {

    return (
        <div>
            <div className="page1">
                <img src="https://assets.calendly.com/assets/landing/homepage/hero-c7322cf6fde0bb0e852c466af957fd7330c8e8607dfe0854947a3cc00a5dfa77.png" alt="Calendar Appointy" width= "380" height= "340"></img>
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