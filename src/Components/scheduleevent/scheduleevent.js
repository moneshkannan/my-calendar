import React, { useState } from 'react';
import './scheduleevent.css';
import Navbar from '../Navbar/Navbar';
import moment from "moment";
import axios from "axios";
import API from "../../service/api";
import Notification from "../../service/NotificationService";
// import Loader from '../Loader/Loader';
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

    // const [isValid, setIsValid] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userEmail, setUserEmail] = useState([]);
    const [checkAll, setCheckAll] = useState(false);



    const handleEvents = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

        // if (data.startTime !== "" && data.endTime !== "" && data.eventDate !== "") {
        //     setIsValid(true);
        // }
        // else {
        //     setIsValid(false);
        // }
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
        const token = localStorage.getItem("token");

        axios.get(`${API}/fetchUsers`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(res => {
            let newArr = [];
            res.data.response_data.data.forEach(element => {
                newArr.push({ status: false, email: element.email })
            });
            setUserEmail(newArr);
            Notification.show(res.data);
        }).catch(err => {
            if (err.response) {
                Notification.show(err.response.data);
            }
        })
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
                <div class="container">
                    <div class="row">

                        <div class="col-sm">
                            <div className="arrow-col-2">
                                <div className="details">Enter Details</div><br />
                                <div className="eventname">
                                    <label>EventName</label><br />
                                    <input
                                        type="text"
                                        id="eventname"
                                        className="intname mb-1 form-control"
                                        name="eventName"
                                        value={data.eventName}
                                        onChange={handleEvents}
                                    />
                                </div>
                                <div className="description">
                                    <label>Description</label><br />
                                    <textarea
                                        id="description"
                                        className="descriptiontext mb-1 form-control"
                                        placeholder="write a summary and any details your invitees should know about the event"
                                        name="description"
                                        value={data.description}
                                        onChange={handleEvents}
                                    ></textarea>
                                </div>

                                <div className="starttime">
                                    <label>Event Date</label><br />
                                    <input
                                        type="date"
                                        id="starttime"
                                        className="starttime mb-1 form-control"
                                        name="eventDate"
                                        value={data.eventDate}
                                        onChange={handleEvents}
                                    ></input></div>


                                <div className="starttime">
                                    <label>Start Time</label><br />
                                    <input
                                        type="time"
                                        id="starttime"
                                        className="starttime mb-1 form-control"
                                        name="startTime"
                                        value={data.startTime}
                                        onChange={handleEvents}
                                    ></input></div>
                                <div className="endtime">
                                    <label>End Time</label><br />
                                    <input
                                        type="time"
                                        id="endtime"
                                        name="endTime"
                                        className="endtime mb-1 form-control"
                                        value={data.endTime}
                                        onChange={handleEvents}
                                    ></input></div>
                                <div className="meet">
                                    <label>Meet URL</label><br />
                                    <input
                                        type="text"
                                        id="meet"
                                        className="meet mb-1 form-control"
                                        name="meetURL"
                                        value={data.meetURL}
                                        onChange={handleEvents}
                                    />
                                </div><br/>
                                <div className="submit">
                                    <button
                                        onClick={handleSubmit}
                                        className="btn btn-primary 
                                         text-center btn-block"
                                    >
                                        {isLoading ? <i className="bx bx-loader-circle bx-spin"></i> : "  Schedule Event"}
                                    </button>
                                </div>

                            </div>

                        </div>

                        <div class="col-sm">
                            <div>
                                <button onClick={fetchUsers}>Add Participants</button>
                            </div><br/>

                            <div>
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">S.NO</th>
                                            <th scope="col">
                                                Choose
                                                <input
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

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Scheduleevent;
