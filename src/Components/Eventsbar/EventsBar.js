import React from 'react';
import { Link } from 'react-router-dom';
import './eventsbar.css';

function EventsBar() {
    return (
        <div className="eventsbar_main">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-11 events_col1">
                        <a href="/" className="events_col1_title">My Appointy</a>
                        <div className="events_buttons">
                            <Link to="/newevents">
                                <div className="events_button"><button type="button" className="btn btn-lg btn-primary">New Events</button></div>
                            </Link>
                            <Link to="/scheduledevents">
                                <div className="events_button"><button type="button" className="btn btn-lg btn-primary">Scheduled Events</button></div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-md-1 events_col2">
                        <div className="events_create">
                            <div className="create_button"><button type="button" className="btn btn-lg btn-success">Create +</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsBar
