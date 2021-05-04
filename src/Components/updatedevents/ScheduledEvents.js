import React from 'react';
import Calendar from "../calendar/calendar.js";
import "./scheduledevents.css";

function ScheduledEvents() {
    return (
        <div>
            <div class="col-12 col-md-11 newevents_col1">
            <a className="newevents_col1_title">Scheduled Events</a>
            </div>
            <Calendar/>
        </div>
    )
}

export default ScheduledEvents
