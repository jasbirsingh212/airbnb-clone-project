import React from "react";
import LabelDesc from "./LabelDesc";

const Input = ({ label, type, onChange, placeholder, descriptions, className='' }) => {
  return (
    <>
      <div className="flex flex-col mb-5">
        <LabelDesc label={label} description={descriptions} />
        <input
          className={` ${className} border border-gray-300 p-2 rounded-full focus:border-primary focus:outline-none focus:shadow-input `}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
