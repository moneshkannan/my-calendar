import './App.css';
import { useEffect } from 'react';
import Loader from './Assets/Loader.gif';
import Navbar from './Components/Navbar/Navbar';
import Page1 from './Components/Page1/Page1';

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

      <Navbar />
      <Page1 />

    </div>
  );
}

export default App;
