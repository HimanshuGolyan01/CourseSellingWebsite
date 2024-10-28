import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Uploadcourse = () => {
  const navigate = useNavigate();
  const [coursename, setCoursename] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("1");

  return (
    <div>
      <div>
        <h1 className='font-rubik text-5xl font-bold ml-[5rem] mt-[2rem] from-gray-700 via-gray-500 to-white'>Upload Course</h1>
        <hr className="my-4 border-gray-600" />
        <h2 className='text-3xl font-BebasNeue font-semibold ml-[5rem] '>Course Setup</h2>
        <h1 className='font-BebasNeue ml-[5rem]'>Complete All required fields (5/5)</h1>
        <hr className="my-4 border-gray-500" />
      </div>
      
      <div className="w-[55rem] ml-[5rem] mt-10 p-8 bg-white border border-gray-200 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold font-rubik mb-6 text-gray-800">Add Course</h2>
        <form>
          <div className="mb-4">
            <label className=" text-gray-700 font-rubik font-semibold">Course Name</label>
            <input 
              onChange={(e) => setCoursename(e.target.value)}
              type="text" 
              className="w-full p-2 mt-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter course name"
              value={coursename}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-rubik">Image URL</label>
            <input 
              onChange={(e) => setImageURL(e.target.value)}
              type="text" 
              className="w-full p-2 mt-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter image URL"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-rubik">Description</label>
            <input 
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 mt-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter course description"
              value={description}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Price (INR)</label>
            <input 
              onChange={(e) => setPrice(e.target.value)}
              type="number" 
              className="w-full p-2 mt-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter price"
              value={price}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Upload Course
          </button>
        </form>
      </div>

      <hr className="my-4 border-gray-500" />
    </div>
  );
};

export default Uploadcourse;
