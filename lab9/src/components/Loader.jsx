import React from "react";
import loader from "../assets/img/GitHub-Mark-Light.png";
import "../assets/css/Loader.css";

const Loader = React.memo(() => (
  <div className="loader">
    <img src={loader} alt="Loading" />
  </div>
));

export default Loader;
