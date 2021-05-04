import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import NewEvents from "../Components/NewEvents/NewEvents";

function NewEventsPage() {
  return (
    <div>
      <Navbar active={true} />
      <NewEvents />
    </div>
  );
}

export default NewEventsPage;
