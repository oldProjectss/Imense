import React, { useState } from 'react';
import info from '../assets/img/info.svg';
import plus from '../assets/img/plus.svg';
import mines from '../assets/img/mines.svg';

const Quiz = ({ data }) => {
  const { name, details, defaultVal, icon, valType, on } = data;
  const [count, setCount] = useState(defaultVal);
  const handlePlus = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleMines = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="p-2 mb-2 bg-white rounded-md shadow shadow-md">
      <div className="flex justify-end">
        <img className="cursor-pointer" src={info} alt="info" />
      </div>
      <div className="flex flex-col justify-center items-center text-sm pb-4">
        <img className="py-2 px-15" src={icon} alt="icon" />
        <p className="text-[#313131] font-bold">{name}</p>
      </div>
      <div className="flex justify-between items-center font-bold">
        <button className="w-1/3" onClick={handleMines}>
          <img src={mines} alt="mines button" />
        </button>
        <span className="border border-1 border-[#2c8eff] text-[#2c8eff] text-center w-2/3 rounded mx-1">{count}{valType}</span>
        <button className="w-1/3">
          <img src={plus} alt="plus button" onClick={handlePlus} />
        </button>
      </div>
    </div>
  );
};

export default Quiz;
