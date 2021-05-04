import React from 'react'
import './views.css'
import {Link} from 'react-router-dom';

function views() {
    return (
        
     <div>
        <Link to="/scheduleevent">
     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Event Details</button>


</Link>
      </div>  
        
        
        
    );
}

export default views;

