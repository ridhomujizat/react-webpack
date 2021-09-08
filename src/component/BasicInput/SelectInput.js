import React from "react";
import "./basicinput.style.scss";

export default function SelectInput(props) {
  return (
    <select
      value={props.value || ""}
      name={props.name}
      id={props.id}
      className="basic-input select-option"
      required
      onChange={(e) => {
        e.preventDefault();
        props.onChange(e);
      }}
    >
      <option value="" disabled hidden>
        Please Select {props.placeholder}
      </option>
      {props.data.map((val, index) => (
        <option key={index} value={val.value}>
          {val.label}
        </option>
      ))}
    </select>
  );
}
