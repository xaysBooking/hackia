import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed mx-auto inset-0 flex items-center justify-center bg-opacity-50">
      <div className="bg-white p-4 flex flex-col items-center rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold">Notification</h2>
        someting went wrong!
        <button
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
