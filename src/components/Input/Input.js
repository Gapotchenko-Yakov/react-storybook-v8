import React from "react";
import "./Input.css";

const Input = (props) => {
  const { size, value, changeHandler, ...rest } = props;
  return (
    <input
      className={`input input-${size}`}
      value={value}
      onChange={(e) => changeHandler(e)}
      {...rest}
    />
  );
};

export default Input;
