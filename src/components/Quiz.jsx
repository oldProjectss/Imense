import React, { useState } from 'react';
import info from '../assets/img/info.svg';
import plus from '../assets/img/plus.svg';
import mines from '../assets/img/mines.svg';

const Quiz = ({ data }) => {
  const { name, details, defaultVal, icon, valType, on } = data;
  const [count, setCount] = useState(defaultVal);
  const [camOn, setcamOn] = useState(on);

  const handleOn = () => {
    setcamOn((prevcamOn) => !prevcamOn);
  };

  const handlePlus = () => {
    if (count === 100) return;
    if (count > 100) {
      setCount(100);
      return;
    }
    setCount((prevCount) => prevCount + 1);
  };

  const handleMines = () => {
    if (count === 0) return;
    if (count < 0) {
      setCount(0);
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      {name === 'Webcam validation' ? (
        <div className="p-2 mb-2 mr-2 bg-white rounded-md shadow shadow-md min-w-[176px] w-[176px]">
          <div className="flex justify-end">
            <img className="cursor-pointer" src={info} alt="info" />
          </div>
          <div className="flex flex-col justify-center items-center text-sm pb-4">
            <img className="py-2" src={icon} alt="icon" />
            <p className="text-[#313131] font-bold py-2">{name}</p>
          </div>
          <button type="button" className={`${camOn ? 'bg-[#daffdf]' : 'bg-[#ff386a]/20'} flex justify-center items-center m-auto -mt-2 mb-3 w-10 h-6 font-bold rounded-full`} onClick={handleOn}>
            <span className={`${camOn ? 'left-3 bg-[#47ca5b]' : '-left-3 bg-[#ff3849]'} w-7 h-7 rounded-full relative`}></span>
          </button>
        </div>
      ) : (
        <div className="p-2 mb-2 mr-2 bg-white rounded-md shadow shadow-md min-w-[176px] w-[176px]">
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
            <span className="border border-1 border-[#2c8eff] text-[#2c8eff] text-center w-2/3 rounded mx-1">
              {count}
              {valType}
            </span>
            <button className="w-1/3">
              <img src={plus} alt="plus button" onClick={handlePlus} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
