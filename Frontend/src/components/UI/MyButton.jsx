import React from "react";
import "../../styles/MyButton.scss";

const MyButton = (props) => {
  return (
    <button
      className="button"
      onClick={props.handler}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};

export default MyButton;
