import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import PlacesForm from "./PlacesForm";

const Accommodations = () => {
  const [actions, setActions] = useState(0);

  const handleClick = () => {
    setActions(1);
  };
  return (
    <div className="flex justify-center">
      {actions === 0 && (
        <button
          onClick={(e) => handleClick(1)}
          className="flex gap-2 items-center border border-gray-300 bg-primary text-white py-4 px-6 rounded-full hover:shadow-md"
        >
          <AiOutlinePlusCircle className="w-6 h-6" />
          <span>Add Place</span>
        </button>
      )}

      {actions === 1 && <PlacesForm />}
    </div>
  );
};

export default Accommodations;
