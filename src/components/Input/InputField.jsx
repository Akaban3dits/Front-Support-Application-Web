import React from "react";
import "./InputField.css";

const InputField = ({ type, placeholder, value, onChange, icon }) => (
  <div className="input">
    <ion-icon
      name={icon}
      style={{
        color: "#797979",
        fontSize: "24px",
        marginLeft: "10px",
        marginRight: "5px",
      }}
    ></ion-icon>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default InputField;
