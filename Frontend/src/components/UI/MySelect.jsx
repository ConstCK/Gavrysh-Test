import React, { useState } from "react";
import "../../styles/MySelect.scss";

const MySelect = (props) => {
  const [data, setData] = useState(props.data);
  return (
    <select
      className="select"
      onChange={(event) => {
        props.handler(event.target.value);
      }}
    >
      <option defaultValue={null} className="option">
        {props.title}
      </option>
      {data.map((element) => {
        return (
          <option className="option" key={element.id} value={element.name}>
            {element.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
