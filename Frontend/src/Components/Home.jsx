import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <div>
                <h1 className="font-rubik font-bold text-7xl text-center mt-[12rem] bg-gradient-to-r from-gray-700 via-gray-500 to-white bg-clip-text text-transparent">
                    Launch Your Course in Seconds, <br /> Empower Minds for a Lifetime.
                </h1>
                <h1 className='font-BebasNeue text-2xl text-center mt-[4rem]'>
                    Turn your expertise into income while changing lives. <br /> It's not just a course, it's a movement.
                </h1>
                <div className="flex flex-col items-center space-y-4 mt-[2rem]">
                    <button 
                        onClick={() => navigate("/Signupadmin")}
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 font-rubik">
                        Create a Course
                    </button>
                    <button 
                        onClick={() => navigate("/Signupuser")} 
                        className="px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-black font-rubik">
                        Buy a Course
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
