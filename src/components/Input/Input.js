import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const { size, placeholder, ...rest } = props;

  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <input
      className={`input input-${size}`}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      {...rest}
    />
  );
};

export default Input;
