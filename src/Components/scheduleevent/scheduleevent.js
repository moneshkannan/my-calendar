import React, { useEffect, useState } from 'react';
import './scheduleevent.css';
import Navbar from '../Navbar/Navbar';
import moment from "moment";
import axios from "axios";
import API from "../../service/api";
import Notification from "../../service/NotificationService";
const Scheduleevent = () => {


    const [data, setData] = useState({
        eventName: "",
        description: "",
        organizer: "",
        startTime: "",
        endTime: "",
        eventDate: moment(new Date()).format("YYYY-MM-DD"),
        meetURL: "",
        participants: []
    })

    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userEmail, setUserEmail] = useState([]);
    const [checkAll, setCheckAll] = useState(false);


    useEffect(() => {
        if (data.startTime !== "" && data.endTime !== "" && data.eventDate !== "") {
            setIsValid(true);
        }
        else {
            setIsValid(false);
            setShow(false)
        }
    }, [data])

    const handleEvents = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setShow(false)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const organizer = localStorage.getItem("email");
        const token = localStorage.getItem("token");
        const newObj = { ...data }
        newObj['organizer'] = organizer
        let partEmail = [];
        let participantsEmail = [];
        partEmail = userEmail.filter((data) => data.status === true);
        partEmail.forEach((i) => [
            participantsEmail.push(i.email)
        ])

        newObj['participants'] = participantsEmail;

        console.log(newObj)

        axios.post(`${API}/schedule/insert`, newObj, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(res => {
            Notification.show(res.data);
            setIsLoading(false);
        }).catch(err => {
            if (err.response) {
                Notification.show(err.response.data);
            }
            setIsLoading(false);
        })
    }

    const fetchUsers = (e) => {
        e.preventDefault();
        setShow(true)
        setLoading(true)
        const token = localStorage.getItem("token");

        axios.get(`${API}/fetchUsers`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(res => {
            let newArr = [];
            res.data.response_data.data.forEach(element => {
                if (slotAvailablity(element.events) === true) {
                    newArr.push({ status: false, email: element.email })
                }
            })
            setUserEmail(newArr);
            Notification.show(res.data);
            setLoading(false)
        }).catch(err => {
            if (err.response) {
                Notification.show(err.response.data);
            }
            setLoading(false)
        })
    }


    const slotAvailablity = (eventsArr) => {


        let s1 = Date.parse(`${data.eventDate}, ${data.startTime}`);
        let s2 = Date.parse(`${data.eventDate}, ${data.endTime}`);
        let status = true;
        eventsArr.forEach((events) => {
            let t1 = Date.parse(events.eventDetails.startDate);
            let t2 = Date.parse(events.eventDetails.endDate);

            if ((t1 >= s1 && t1 <= s2) || (t2 >= s1 && t2 <= s2)) {
                status = false;
            }
        })

        return status;

    }


    const handleEmailCheckEvent = (index, e) => {
        const emails = [...userEmail];
        emails[index].status = !emails[index].status;
        setUserEmail(emails)
    }

    const handleAllEmailCheckEvent = (status) => {
        console.log(status)
        const emails = [...userEmail];
        emails.forEach((data) => [
            data.status = !status
        ]);
        setCheckAll(!checkAll)
        setUserEmail(emails)
    }

    return (
        <>
            <Navbar active={true} />
            <div className="scheduleeventmain">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className="arrow-col-2">
                                <div className="details">Enter Details</div><br />
                                <div className="eventname form-group">
                                    <label className="event_label">EventName</label><br />
                                    <input
                                        type="text"
                                        id="eventname"
                                        className="intname mb-1 form-control"
                                        name="eventName"
                                        value={data.eventName}
                                        onChange={handleEvents}
                                    />
                                </div>
                                <div className="description form-group">
                                    <label className="event_label">Description</label><br />
                                    <textarea
                                        id="description"
                                        className="descriptiontext mb-1 form-control"
                                        placeholder="write a summary and any details your invitees should know about the event"
                                        name="description"
                                        value={data.description}
                                        onChange={handleEvents}
                                    ></textarea>
                                </div>

                                <div className="starttime form-group">
                                    <label className="event_label">Event Date</label><br />
                                    <input
                                        type="date"
                                        id="starttime"
                                        className="starttime mb-1 form-control"
                                        name="eventDate"
                                        value={data.eventDate}
                                        onChange={handleEvents}
                                    ></input></div>


                                <div className="starttime form-group">
                                    <label className="event_label">Start Time</label><br />
                                    <input
                                        type="time"
                                        id="starttime"
                                        className="starttime mb-1 form-control"
                                        name="startTime"
                                        value={data.startTime}
                                        onChange={handleEvents}
                                    ></input></div>
                                <div className="endtime form-group">
                                    <label className="event_label">End Time</label><br />
                                    <input
                                        type="time"
                                        id="endtime"
                                        name="endTime"
                                        className="endtime mb-1 form-control"
                                        value={data.endTime}
                                        onChange={handleEvents}
                                    ></input></div>
                                <div className="meet form-group">
                                    <label className="event_label">Meet URL</label><br />
                                    <input
                                        type="text"
                                        id="meet"
                                        className="meet mb-1 form-control"
                                        name="meetURL"
                                        value={data.meetURL}
                                        onChange={handleEvents}
                                    />
                                </div>
                                <div className="submit form-group">
                                    <button
                                        onClick={handleSubmit}
                                        className="btn btn-primary 
                                         text-center btn-block btn-lg"
                                    >
                                        {isLoading ? <i className="bx bx-loader-circle bx-spin"></i> : "  Schedule Event"}
                                    </button>
                                </div>

                            </div>

                        </div>

                        <div className="col-12 col-md-6 event-bottom">
                            {isValid && <div className="event_part_button">
                                <button className="event_part_btn" onClick={fetchUsers}>Add Participants</button>
                            </div>}
                            {show ? loading ? <div>  <i className="bx bx-loader-circle bx-spin" style={{ marginLeft: "15rem", marginTop: "10rem", fontSize: "5rem" }}></i> </div> :

                                < div className="event_table">
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">S.NO</th>
                                                <th scope="col">
                                                    Choose
                                                <input
                                                        style={{ marginLeft: "10px" }}
                                                        type="checkbox"
                                                        checked={data.status}
                                                        value={checkAll}
                                                        onChange={(e) => handleAllEmailCheckEvent(checkAll)} />
                                                </th>
                                                <th scope="col">Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                userEmail.map((data, i) => {

                                                    return <tr key={i}>
                                                        <th scope="row">{i + 1}</th>
                                                        <td> <input
                                                            type="checkbox"
                                                            checked={data.status}
                                                            value={data.status}
                                                            onChange={(e) => handleEmailCheckEvent(i, e)} /> </td>
                                                        <td>{data.email}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>

                                : null}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Scheduleevent;
