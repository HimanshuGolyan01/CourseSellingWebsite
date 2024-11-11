import React from 'react';

const AllCourseCard = ({ imageUrl, title, description, price , label}) => {
    return (
      <div> 
        <div className="bg-gray-200 shadow-xl hover:shadow-2xl transition-shadow rounded-lg overflow-hidden p-4">
            <div className="relative">
                <img
                    src={imageUrl}
                    alt="Course Thumbnail"
                    className="w-full h-48 object-cover rounded-md"
                />
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800 truncate">{title}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {description}
                </p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold text-blue-600">₹{price}</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                    Buy Course
                </button>
            </div>
        </div>
        </div>
    );
};

export default AllCourseCard;
