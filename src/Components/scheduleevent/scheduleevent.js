import React from 'react';
import { Link } from 'react-router-dom';
import clock from "../../Assets/clock.png";
import calendar from "../../Assets/calendar.svg";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './scheduleevent.css';
import Navbar from '../Navbar/Navbar';

function scheduleevent() {
    return (
        <>
        <Navbar active={true}/>
        <div className="scheduleeventmain">
            <div class="container">
            <div class="row">

            <div class="col-sm">
            <div className="arrow-col-1">
            <div className="backarrow"><ArrowBackIcon/></div>
            <div className="cod">Codingmart</div>
            <div className="price">PricingReview</div><br/>
            <p className="clock"><img src={clock} alt="clock" className="clock_image"/> 15 min</p>
            <p className="calendar"><img src={calendar} alt="calendar" class="calendar_image"/> 2.00pm Friday,May 6</p>
            <div class= "vertical"></div>
            </div>
            </div>
            
            <div class="col-sm">
            <div className="arrow-col-2">
            <div className="details">Enter Details</div><br/>
            <div className="eventname">
            <label>EventName</label><br/>
            <input type="text" id="eventname" className="intname mb-1 form-control"></input></div>
            <div className="description">
            <label>Description</label><br/>
            <textarea id="description" className="descriptiontext mb-1 form-control" placeholder="write a summary and any details your invitees should know about the event"></textarea></div>
            <div className="organizer">
            <label>Organizer</label><br/>
            <input type="text" id="Organizer" className="organizer mb-1 form-control"></input></div>
            <div className="starttime">
            <label>Start Time</label><br/>
            <input type="text" id="starttime" className="starttime mb-1 form-control"></input></div>
            <div className="endtime">
            <label>End Time</label><br/>
            <input type="text" id="endtime" className="endtime mb-1 form-control"></input></div>
            <div className="meet">
            <label>Meet URL</label><br/>
            <input type="text" id="meet" className="meet mb-1 form-control"></input></div>
            <div className="shareurl">
            <label>Share URL</label><br/>
            <input type="text" id="shareurl" className="shareurl mb-1 form-control"></input></div>
            <div className="participants">
            <label>Participants</label><br/>
            <input type="text" id="participants" className="participants mb-1 form-control"></input></div><br/>
            <div className="submit">
                <Link to ="/confirm">
                <button className="btn btn-primary  text-center">Schedule Event</button>
                </Link>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
    );
}

export default scheduleevent;
