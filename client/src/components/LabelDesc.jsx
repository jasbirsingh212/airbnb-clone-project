import React from 'react'

const LabelDesc = ({label, description}) => {
  return (
    <>
      <label className="text-xl">{label}</label>
      <p className="text-gray-400 mb-2">{description}</p>
    </>
  );
}

export default LabelDesc