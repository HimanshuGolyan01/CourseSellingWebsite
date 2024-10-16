import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="inline-block w-96 h-60 rounded-lg border border-gray-700 shadow-lg bg-white p-6 mt-[10rem] ml-[10rem] mb-[10rem]">
      <h2 className="text-xl font-bold mt-4 font-rubik">{title}</h2>
      <p className="text-gray-700 mt-5 font-rubik">{description}</p>
    </div>
  );
}

export default Card;