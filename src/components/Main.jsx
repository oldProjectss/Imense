import React from 'react';
import Training from './Training';

const Main = () => {
  return (
    <div className="flex flex-col m-10">
      <div className="flex justify-between mb-2">
        <h1 className="text-[#7c7c7c] text-xl font-bold">Edit Training "Working At Height"</h1>
        <div className="flex justify-center items-center">
          <a href="#" className="text-[#b5b5b5] font-bold py-2 px-4 rounded">
            Cancel
          </a>
          <button className="bg-[#eb7421] hover:bg-[#eb7421]/90 text-white font-bold py-2 px-4 rounded">Update & Save</button>
        </div>
      </div>
      <Training />
    </div>
  );
};

export default Main;
