import React from 'react';
import "./newevents.css";

function NewEvents() {
    return (
<div>
    <div class="col-12 col-md-11 newevents_col1">
    <a className="newevents_col1_title">New Events</a>
    </div>
    <div className="newevents newevents_item1">
        <div className="newevents_main">
        <div className="newevents_items">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="meet 1" />
        </div>
        <div className="newevents_buttons">
        <button type="button" class="btn btn-success newevents_button">Accept</button>
        <button type="button" class="btn btn-danger newevents_button">Reject</button>
        </div>
        </div>
    </div>
    {/*  */}
    <div className="newevents newevents_item1">
        <div className="newevents_main">
        <div className="newevents_items">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="meet 2" />
        </div>
        <div className="newevents_buttons">
        <button type="button" class="btn btn-success newevents_button">Accept</button>
        <button type="button" class="btn btn-danger newevents_button">Reject</button>
        </div>
        </div>
    </div>
    {/*  */}
    <div className="newevents newevents_item1">
        <div className="newevents_main">
        <div className="newevents_items">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="meet 3" />
        </div>
        <div className="newevents_buttons">
        <button type="button" class="btn btn-success newevents_button">Accept</button>
        <button type="button" class="btn btn-danger newevents_button">Reject</button>
        </div>
        </div>
    </div>
    {/*  */}
    <div className="newevents newevents_item1">
        <div className="newevents_main">
        <div className="newevents_items">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="meet 4" />
        </div>
        <div className="newevents_buttons">
        <button type="button" class="btn btn-success newevents_button">Accept</button>
        <button type="button" class="btn btn-danger newevents_button">Reject</button>
        </div>
        </div>
    </div>
    {/*  */}
    <div className="newevents newevents_item1">
        <div className="newevents_main">
        <div className="newevents_items">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="meet 5" />
        </div>
        <div className="newevents_buttons">
        <button type="button" class="btn btn-success newevents_button">Accept</button>
        <button type="button" class="btn btn-danger newevents_button">Reject</button>
        </div>
        </div>
    </div>
</div>
    )
}

export default NewEvents
