import React from 'react';
import './confirm.css';
import clock from "../../Assets/clock.png";
import calendar from "../../Assets/calendar.svg";

function confirm() {
    return (
        <div className="confirmed">
            <div className="one">Confirmed!</div>
            <br />
            <div className="two">You are scheduled with Codingmart</div><br /><br /><hr className="ho2"></hr>
            <div className="price">Pricing Review</div><br />
            <p className="four"><img src={clock} alt="clock" className="clockimage" /> 15 min</p>
            <p className="five"><img src={calendar} alt="calendar" className="calendarimage" /> 2.00pm Friday,May 6</p>
        </div>
    );
}

export default confirm;
