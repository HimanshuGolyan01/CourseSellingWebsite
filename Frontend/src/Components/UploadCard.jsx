import React from 'react';

const UploadCard = ({ title, description, onUpload }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-">{title}</h2>
      <p className="mb-6 text-lg">{description}</p>
      <button
        onClick={onUpload}
        className="bg-blue-600 text-white hover:bg-blue-500 rounded-lg px-6 py-3 text-lg"
      >
        Upload Course
      </button>
    </div>
  );
};

export default UploadCard;
