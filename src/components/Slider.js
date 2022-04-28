import React from "react";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div>
      <Link to="./">
        <img alt="" src={require("../assets/bander1.webp")}></img>
      </Link>
    </div>
  );
};
export default Slider;
