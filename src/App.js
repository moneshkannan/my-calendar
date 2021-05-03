import './App.css';
import { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Loader from './Assets/Loader.gif';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {

  useEffect(() => {
    window.onload = function(){
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
          <Route exact path="/" component={Home}/>
          <Route exact path="/Login" component={Signup}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
