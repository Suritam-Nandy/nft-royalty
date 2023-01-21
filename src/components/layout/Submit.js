import React from "react";

const Submit = (props) => {
  return (
    <div className="bg-blue w-max drop-shadow-lg  rounded-xl px-16 py-1 text-white text-lg font-medium shadow-md hover:bg-blueDark hover:shadow-lg focus:bg-blueDark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blueDark active:shadow-lg transition duration-150 ease-in-out">
      <label className="text-white">{[props.name]}</label>
    </div>
  );
};

export default Submit;
