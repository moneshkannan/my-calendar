import './App.css';
import { useEffect } from 'react';
import Loader from './Assets/Loader.gif';

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

      <h1>Hi My Calenly</h1>
    </div>
  );
}

export default App;
