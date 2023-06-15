import React from 'react'
import LabelDesc from './LabelDesc';

const TextArea = ({label, descriptions, onChange, placeholder, rows, cols}) => {
  return (
    <>
      <div className="flex flex-col mb-5">
        <LabelDesc label={label} description={descriptions} />
        <textarea
          className="border border-gray-300 p-2 rounded-md focus:border-primary focus:outline-none focus:shadow-input"
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
        />
      </div>
    </>
  );
}

export default TextArea