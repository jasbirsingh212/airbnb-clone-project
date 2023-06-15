import React from 'react'

const LabelDesc = ({label, description}) => {
  return (
    <>
      <label className="mb-1 text-xl">{label}</label>
      <p className="text-gray-400 mb-2">{description}</p>
    </>
  );
}

export default LabelDesc