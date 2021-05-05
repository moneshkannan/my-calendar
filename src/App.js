import './App.css';
import { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom'
import Loader from './Assets/Loader.gif';
import Home from './pages/Home';
import Calendar from './Components/calendar/calendar';
import Scheduleevent from './Components/scheduleevent/scheduleevent'
import Confirm from './Components/confirm/confirm';
import Contactus from './Components/contactUs/Contactus';
//import Team from './Components/team/team';
import { ProtectedRoute, AdminRoute } from "./service/routeGuard";
import Notification from './service/NotificationService';
import history from "./utils/history";
import Errorpage from './pages/Errorpage';
import AccPage from './Components/AccPage/MyAcc';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import Forgotform from './pages/Forgotform';
import otpform from './pages/otpform';
import Devteam from './pages/Devteam';


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
          <Route path="/signup" component={SignupForm} />
          <Route path="/Forgotpassword" component={Forgotform} />
          <Route path="/Otp" component={otpform} />
          <Route path="/confirm" component={Confirm} />
          <ProtectedRoute path="/calendar" component={Calendar} />
          <AdminRoute path="/scheduleevent" component={Scheduleevent} />
          <Route path="/accpage" component={AccPage} />
          <ProtectedRoute path="/contactUS" component={Contactus} />
          <Route path="/teampage" component={Devteam} />
          <Route path="**" component={Errorpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;