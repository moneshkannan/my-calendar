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


const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
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
            <Route path="/Forgotpassword" component={Forgotform} />
            <Route path="/Otp" component={otpform} />
            <Route path="/confirm" component={Confirm} />
            <ProtectedRoute path="/calendar" component={Calendar} />
            <AdminRoute path="/scheduleevent" component={Scheduleevent} />
            <Route path="/profile" component={Profile} />
            <ProtectedRoute path="/contactUS" component={Contactus} />
            <Route path="/teampage" component={Devteam} />
            <Route path="*" component={Errorpage} />
          </Switch>
        </Router>
      }
    </>
  );
}

export default App;