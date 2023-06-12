import React from "react";

const Alert = ({ message, type }) => {
  console.log(message);

  const getAlertOfType = (type) => {
    switch (type) {
      case "red":
        return `text-red-800 bg-red-300 dark:text-red-400`;

      default:
        return `text-green-800 bg-green-200 dark:text-green-400`;
    }
  };

  return (
    <div
      className={`flex justify-center p-4 mb-4 ${getAlertOfType(
        type
      )}  rounded-lg  dark:bg-gray-800 `}
      role="alert"
    >
      <div className="ml-3 text-sm font-medium ">{message}</div>
    </div>
  );
};

export default Alert;
