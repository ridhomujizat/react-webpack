import React from "react";
import BasicInput from "./BasicInput";
import SelectInput from "./SelectInput";
export default function index(props) {
  switch (props.type) {
    case "select":
      return <SelectInput {...props} />;
    default:
      return <BasicInput {...props} />;
  }
}
