import React from 'react'
import { Link } from 'react-router-dom';
import clock from "../../Assets/clock.png";
import calendar from "../../Assets/calendar.svg";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './scheduleevent.css'

function scheduleevent() {
    return (
        <div className="scheduleeventmain">
            <div class="container">
            <div class="row">

            <div class="col-sm">
            <div className="arrow-col-1">
            <div className="backarrow"><ArrowBackIcon/></div>
            <div className="cod">Codingmart</div>
            <div className="price">PricingReview</div><br/>
            <p className="four"><img src={clock} alt="clock" class="clockimage"/> 15 min</p>
            <p className="five"><img src={calendar} alt="calendar" class="calendarimage"/> 2.00pm Friday,May 6</p>
            </div>
            </div>
            
            <div class="col-sm">
            <div className="arrow-col-2">
            <div className="details">Enter Details</div><br/>
            <div className="name">
            <label>Name</label><br/>
            <input type="text" id="name" className="intname mb-1 form-control"></input></div>
            <div className="email">
            <label>Email</label><br/>
            <input type="text" id="email" className="emailtext mb-1 form-control"></input></div><br/>

            <div className="submit">
                <Link to ="/confirm">
                <button className="btn btn-primary  text-center">Schedule Event</button>
                </Link>
            </div>


            <div className="event"></div>
            </div>
            </div></div>
           </div>
        </div>
    )
}

export default scheduleevent;
