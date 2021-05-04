import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Page1 from "../Components/Page1/Page1";

function Home() {
  return (
    <div>
      <Navbar active={false} />
      <Page1 />
    </div>
  );
}

export default Home;
