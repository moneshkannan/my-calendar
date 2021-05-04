import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ScheduledEvents from "../Components/scheduleevent/scheduleevent";

function ScheduledEventspage() {
  return (
    <div>
      <Navbar active={true} />
      <ScheduledEvents />
    </div>
  );
}

export default ScheduledEventspage;
