import React from 'react';
import UploadCard from '../Components/UploadCard';
import Uploadcourse from './Uploadcourse';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
   const Navigate = useNavigate();
  return (
    <div className="flex h-screen bg-gray-100 font-rubik">
      
      <div className="w-64 bg-gray-400 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Menu</h2>
        <button className="w-full text-left px-4 py-2 mb-2 bg-black hover:bg-gray-600 rounded-lg"
        onClick={() =>  Navigate("/AdminHome")}>
          Home
        </button>
        <button className="w-full text-left px-4 py-2 mb-2 bg-black hover:bg-gray-600 rounded-lg"
        onClick={() =>  Navigate('/Dashboard')}>

          Dashboard
        </button>
        <button className="w-fu9ll text-left px-4 py-2 bg-black hover:bg-gray-600 rounded-lg"
        onClick={() => Navigate("/MyCourses")}>
          My Courses
        </button>
      </div>

      
      <div className="flex-1 flex flex-col p-4 ml-[5rem] font-rubik">
        <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
        <hr className="border-t border-gray-300 w-full mb-4" />
        <div className="flex flex-wrap -mx-4 justify-start">
     </div>

        <div>
       <UploadCard
        title={"Click To Upload Your course"}
        description={"Upload your course details"}
       />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
