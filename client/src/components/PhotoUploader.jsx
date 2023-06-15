import React from "react";
import LabelDesc from "./LabelDesc";
import { AiOutlineCloudUpload } from "react-icons/ai";

const PhotoUploader = ({
  label,
  desscription,
  type,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <LabelDesc label={label} description={desscription} />
      <div className="grid grid-cols-3 gap-2 mb-1">
        <input
          className={`col-span-2 border border-gray-300 p-2 rounded-full focus:border-primary focus:outline-none focus:shadow-input `}
          type={type}
          onChange={onChange}
          placeholder={"Add image URL for the place"}
        />
        <button className="bg-primary text-white p-0 rounded-full">
          Add URL
        </button>
      </div>

      <div className="flex bg-grey-lighter mt-4 mb-5">
        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-primary hover:text-white">
          <AiOutlineCloudUpload className="w-8 h-8" />
          <span className="mt-2 text-base leading-normal">Select a file</span>
          <input type="file" className="hidden" />
        </label>
      </div>
    </>
  );
};

export default PhotoUploader;
