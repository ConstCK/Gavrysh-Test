import React from "react";
import "../../styles/MyArea.scss";

const MyArea = (props) => {
  return (
    <div className="area">
      <label className="area-label" htmlFor="areaField">
        {props.label}
      </label>
      <textarea
        name="areaField"
        className="area-field"
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => {
          {
            props.handler(e.target.value);
          }
        }}
      ></textarea>
    </div>
  );
};

export default MyArea;
