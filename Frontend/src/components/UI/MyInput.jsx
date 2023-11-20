import React from "react";
import "../../styles/MyInput.scss";

const MyInput = (props) => {
  return (
    <div className="input">
      <label className="input-label" htmlFor="inputField">
        {props.label}
      </label>
      <input
        name="inputField"
        className="input-field"
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => {
          {
            props.handler(e.target.value);
          }
        }}
      ></input>
    </div>
  );
};

export default MyInput;
