import './App.css';
import { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom'
import Loader from './Assets/Loader.gif';
//import Signup from './pages/Signup';
import Home from './pages/Home';
//import ScheduledEvents from './pages/ScheduledEventspage';
import NewEvents from './pages/NewEventsPage';
import Calendar from './Components/calendar/calendar';
import Scheduleevent from './Components/scheduleevent/scheduleevent'
import Confirm from './Components/confirm/confirm';
import Contactus from './Components/contactUs/Contactus';
import Team from './Components/team/team';
//import Views from './Components/views/views'
import { ProtectedRoute } from "./service/routeGuard";
import Notification from './service/NotificationService';
import history from "./utils/history";
import Errorpage from './pages/Errorpage';
// import SignupForm from './pages/SignupForm';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';


const App = () => {

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


      <Router history={history}>
        <Notification />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={LoginForm} />
          <Route path="/signup" component={SignupForm}/>
          <Route path="/confirm" component={Confirm} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/scheduleevent" component={Scheduleevent} />
          <Route path="/newevents" component={NewEvents} />
          <Route path="/contactUS" component={Contactus} />
          <Route path="/teampage" component={Team}/>
          <ProtectedRoute path="/contactUS" component={Contactus} />
          <Route component={Errorpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;