import React from "react";
import "react-fontawesome";
var FontAwesome = require("react-fontawesome");

const Heart = props => {
  let classes = props.liked ? "fas fa-heart" : "far fa-heart-o";

  return (
    <FontAwesome
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className={classes}
      name="heart"
    />
  );
};

export default Heart;
