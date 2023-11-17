import React from "react";
import "../../styles/MyButton.scss";

const MyButton = (props) => {
  return (
    <button className="button" onClick={props.eventHandler}>
      {props.title}
    </button>
  );
};

export default MyButton;
