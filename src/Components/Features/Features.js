import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Features.css';
import '../Developers/stylo.scss';
import Schedule from '../../Assets/Schedule1.jpg';
import Flexible from '../../Assets/Flexible.jpg';
import Control from '../../Assets/Control.jpg';
import Team from '../../Assets/Team1.jpg';
import Share from '../../Assets/Share.jpg';
import Rules from '../../Assets/Rules.jpg';

const Features = () => {
    return (
        <div className="main hero">
            <Navbar />
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <h1 className="featuretitle">Features that everyone will enjoy...</h1>
            <div className="container12">
                <div className="card12">
                    <div className="imgBox12">
                        <img src={Schedule} alt="Santhosh" width="300px"></img>
                    </div>
                    <div className="details12">
                        <h2>Schedule</h2>
                        <p>Organiser schedule an event and the event is added to your calendar as well as the preference for that event will be mailed.</p>
                    </div>
                </div>
                <div className="card12">
                    <div className="imgBox12">
                        <img src={Flexible} alt="Santhosh"  width="300px"></img>
                    </div>
                    <div className="details12">
                        <h2>Flexible</h2>
                        <p>Supports 1-on-1, mini events, school & college events and collective availability meetings.</p>
                    </div>
                </div>
                <div className="card12">
                    <div className="imgBox12">
                        <img src={Control} alt="Santhosh"  width="300px"></img>
                    </div>
                    <div className="details12">
                        <h2>Control</h2>
                        <p>Prevent last minute meetings, create secret event types, Password protection and many more.</p>
                    </div>
                </div>
                <div className="card12">
                    <div className="imgBox12">
                        <img src={Team} alt="Santhosh"  width="300px"></img>
                    </div>
                    <div className="details12">
                        <h2>Grows with your team</h2>
                        <p>Works great for individuals, teams, students, officials and departments.</p>
                    </div>
                </div>
                <div className="card12">
                    <div className="imgBox12">
                        <img src={Share} alt="Santhosh"  width="300px"></img>
                    </div>
                    <div className="details12">
                        <h2>Share your link</h2>
                        <p>Share your Appointy links via email with preference option and the event will be updated also in participant's Appointy calendar.</p>
                    </div>
                </div>
                <div className="card12">
                    <div className="imgBox12">
                        <img src={Rules} alt="Santhosh"  width="300px"></img>
                    </div>
                    <div className="details12">
                        <h2>Create simple rules</h2>
                        <p>Setup is easy. Let Appointy know your availability preferences and it’ll do the work for you.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}


export default Features;