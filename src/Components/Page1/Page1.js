import React from 'react';
import { Link } from "react-router-dom";
import './page.css';
import calendar1 from "../../Assets/calendar1.jpeg";
import calendar2 from "../../Assets/calendar2.jpg";
import calendar3 from "../../Assets/calendar3(a).png";
import P1 from '../../Assets/p1.png';
import P2 from '../../Assets/p2.png';
import P3 from '../../Assets/p3.png';

const Page1 = () => {
    return (
        <div>
            <div className="home_img" />
            <div className="home_content">
                <h1>Appointy helps you schedule meetings without the back-and-forth emails</h1>
                <Link className="p-links" to="/scheduleevent">Schedule</Link>
            </div>

            <div className="home_middle">

                <div className="home_middle_content">
                    <div>
                        <h3 className="home_h3">Appointy - simple, functional, powerful: no compromises!</h3>
                        <p className="home_p">Our online scheduling software has everything you need to grow and manage your business in one easy to use and powerful user interface</p>
                    </div>
                    <div style={{ marginTop: "25px", marginBottom: "40px" }}>
                        <h3 className="home_h3">Implement social distancing guidance and adapt to the post-COVID19 world</h3>
                        <p className="home_p">Appointy’s online scheduling software can help you manage occupancy and follow local safety guidelines while reopening business after COVID19</p>
                    </div>
                    <Link className="homefeatures" to="/features1"><a className="home_learn_more" href="/features"> Learn More </a></Link>
                </div>
                <div className="home_middle_images">
                    <div className="home_middle_image">
                        <img alt="home_middle_images" className="home_middle_img photo-1" src={calendar1} />
                        <img alt="home_middle_images" className="home_middle_img photo-2" src={calendar2} />
                        <img alt="home_middle_images" className="home_middle_img photo-3" src={calendar3} />
                    </div>
                </div>
            </div>

            <div className="testimonials3">
                <div className="inner3">
                    <h1>Testimonials</h1>
                    <div className="border3"></div>
                        <div className="row3">

                            <div className="col3">
                                <div className="testimonial3">
                                    <img src={P1} alt="" />
                                    <div className="name3">User 1</div>
                                    <div className="stars3">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>
                                    I just started using Appointy a week ago. I can't say enough about the product and their customer service. Definitely would recommend it for your business!
                                    </p>
                                </div>
                            </div>

                            <div className="col3">
                                <div className="testimonial3">
                                    <img src={P2} alt="" />
                                    <div className="name3">User 2</div>
                                    <div className="stars3">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <p>
                                    Nothing but impressed so far. This is by far the most configurable and useable scheduling app I've found. I had all but given up hope. Well done, Appointy!
                                    </p>
                                </div>
                            </div>

                            <div className="col3">
                                <div className="testimonial3">
                                    <img src={P3} alt="" />
                                    <div className="name3">User 3</div>
                                    <div className="stars3">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                        <p>
                                        I just worked with Appointy ... and they were awesome! I have been rather impressed by the level of service of you guys.This software is so full featured! Thanks v much and I am sure I will 'go live' very soon.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default Page1;