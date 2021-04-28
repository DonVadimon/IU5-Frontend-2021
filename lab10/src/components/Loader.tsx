import React from "react";
import loader from "../assets/img/GitHub-Mark-Light.png";
import "../assets/css/Loader.css";

// eslint-disable-next-line react/require-default-props
const Loader = React.memo(({ small = false }: { small?: boolean }) => (
  <div className={"loader".concat(small ? " small" : "")}>
    <img src={loader} alt="Loading" />
  </div>
));

export default Loader;
