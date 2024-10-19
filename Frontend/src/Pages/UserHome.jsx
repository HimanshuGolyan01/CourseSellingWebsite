import React from 'react';

const UserHome = () => {
//   const handleBrowseClick = () => {
   
//     console.log('Browse clicked');
//   };

//   const handlePurchasesClick = () => {
    
//     console.log('Purchases clicked');
//   };

//   const handleSettingsClick = () => {
    
//     console.log('Settings clicked');
//   };

  return (
    <div className="flex h-screen bg-gray-100 font-rubik">
      
      <div className="w-64 bg-gray-400 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">User Menu</h2>
        <button
        //   onClick={handleBrowseClick}
          className="w-full text-left px-4 py-2 mb-2 bg-black hover:bg-gray-600 rounded-lg"
        >
          Browse
        </button>
        <button
        //   onClick={handlePurchasesClick}
          className="w-full text-left px-4 py-2 mb-2 bg-black hover:bg-gray-600 rounded-lg"
        >
          Purchases
        </button>
        <button
        //   onClick={handleSettingsClick}
          className="w-full text-left px-4 py-2 bg-black hover:bg-gray-600 rounded-lg"
        >
          Settings
        </button>
      </div>

      
      <div className="flex-1 flex flex-col p-4 ml-[5rem]">
        <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>
        <hr className="border-t border-gray-300 w-full mb-4" />

        
        <div className="flex flex-wrap -mx-4 justify-start">
          <div className="px-4">
           
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard!</h2>
              <p className="mb-6 text-lg">Here you can browse courses, view your purchases, and manage your settings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
