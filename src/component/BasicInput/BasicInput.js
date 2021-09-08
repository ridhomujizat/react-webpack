import React from "react";
import "./basicinput.style.scss";

export default function BasicInput(props) {
  return (
    <input
      className="basic-input"
      value={props.value || ""}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      type={props.type}
      onChange={(e) => {
        e.preventDefault();
        props.onChange(e);
      }}
      required
    />
  );
}
