import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllCourseCard from '../Components/AllCourseCard';
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  async function BrowserHandler() {
    Navigate("/UserHome")
  }
  useEffect(() => {
    async function fetchAllCourses() {
      const response = await axios.get("http://localhost:3000/api/v1/course/preview");
      setCourses(response.data.courses);
    }
    fetchAllCourses();
  }, []);

  return (
    <div className="flex h-full bg-gray-100 font-rubik">
      <div className="w-64 bg-gray-400 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">User Menu</h2>
        <button className="w-full text-left px-4 py-2 mb-2 bg-black hover:bg-gray-600 rounded-lg" onClick={BrowserHandler}>Browse</button>
        <button className="w-full text-left px-4 py-2 mb-2 bg-black hover:bg-gray-600 rounded-lg">Purchases</button>
        <button className="w-full text-left px-4 py-2 bg-black hover:bg-gray-600 rounded-lg">Settings</button>
      </div>

      <div className="flex-1 flex flex-col p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>
          <hr className="border-t border-gray-300 w-full mb-4" />
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-xl hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard!</h2>
            <p className="mb-6 text-lg">Here you can browse courses, view your purchases, and manage your settings.</p>
          </div>
        </div>

        <hr className="border-t border-gray-300 w-full mb-4" />  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses && courses.map((item, index) => (
            <AllCourseCard
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              label="Buy Now"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
