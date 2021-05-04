import './App.css';
import { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loader from './Assets/Loader.gif';
import Signup from './pages/Signup';
import Home from './pages/Home';
// import EventsBar from './Components/Eventsbar/EventsBar';
import Navbar from './Components/Navbar/Navbar';
import ScheduledEvents from './Components/Scheduledevents/ScheduledEvents';
import NewEvents from './Components/NewEvents/NewEvents';
import Calendar from './Components/calendar/calendar';

// import Views from './Components/views/views'

import Scheduleevent from './Components/scheduleevent/scheduleevent';
import Confirm from './Components/confirm/confirm';
import Contactus from './Components/contactUs/Contactus';

function App() {

  useEffect(() => {
    window.onload = function () {
      document.getElementById('loader').style.display = 'none'
    }
  })

  return (

    <div className="App">

      <div className="loader" id="loader">
        <div className="loader_div">
          <img src={Loader} alt="Loading..." width="250"></img>
        </div>
      </div>

      <Router>
        <Switch>
          <Route exact path="/Login" component={Signup} />
          <Route path="/"> <Home /></Route>
          <Route path="/scheduleevent"><Scheduleevent /></Route>
          <Route path="/confirm"><Confirm /></Route>
          <Route path="/calendar">
            {/* <Views /> */}
            <Calendar />
          </Route>
          <Route path="/scheduledevents"><Navbar /><ScheduledEvents /></Route>
          <Route path="/newevents"><Navbar /><NewEvents /></Route>
          <Route path="/contactUS" component={Contactus} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;