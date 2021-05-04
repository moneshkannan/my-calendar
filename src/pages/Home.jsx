import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Page1 from "../Components/Page1/Page1";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar active={false} />
      <Page1 />
      <Footer />
    </div>
  );
}

export default Home;
