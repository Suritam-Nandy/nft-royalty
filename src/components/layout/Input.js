import React from "react";

const Input = (props) => {
  const {
    type = "",
    placeholder = "",
    name = "name",
    value = "",
    onChange,
  } = props;
  return (
    <input
      type={type}
      className="form-control w-48 shadow appearance-none border border-ash rounded text-xs  py-0.5 px-1 text-black leading-3 focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
