import React from "react";
import './App.css';
import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Calendar from './Components/calendar/calendar';
import Scheduleevent from './Components/scheduleevent/scheduleevent'
import Confirm from './Components/confirm/confirm';
import Contactus from './Components/contactUs/Contactus';
import { ProtectedRoute, AdminRoute } from "./service/routeGuard";
import Notification from './service/NotificationService';
import history from "./utils/history";
import Errorpage from './pages/Errorpage';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import Forgotform from './pages/Forgotform';
import otpform from './pages/otpform';
import Loader from './Components/Loader/Loader';
import Devteam from './pages/Devteam';
import Profile from "./pages/Profile";
import Features from './Components/Features/Features';
import Resetform from './pages/Resetform';


const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])

  return (
    <>
      {loading ? <Loader /> :
        <Router history={history}>
          <Notification />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/features1" component={Features} />
            <Route path="/Forgotpassword" component={Forgotform} />
            <Route path="/Otp" component={otpform} />
            <Route path="/confirm" component={Confirm} />
            <ProtectedRoute path="/calendar" component={Calendar} />
            <AdminRoute path="/scheduleevent" component={Scheduleevent} />
            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="/contactUS" component={Contactus} />
            <Route path="/teampage" component={Devteam} />
            <Route path="/Resetpassword" component={Resetform} />
            <Route path="*" component={Errorpage} />
          </Switch>
        </Router>
      }
    </>
  );
}

export default App;