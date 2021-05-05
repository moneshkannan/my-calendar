import React from "react";
import LoaderIMG from "../../Assets/Loader.gif";

const Loader = () => {
  return (
    <div className="loader" id="loader">
      <div className="loader_div">
        <img src={LoaderIMG} alt="Loading..." width="250"></img>
      </div>
    </div>
  );
};

export default Loader;
