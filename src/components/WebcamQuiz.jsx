import React, { useState } from 'react';
import info from '../assets/img/info.svg';
import webcam from '../assets/img/webcam.svg';

const WebcamQuiz = () => {
  const [on, setOn] = useState(true);

  const handleOn = () => {
    setOn((prevOn) => !prevOn);
  };

  return (
    <div className="p-2 mb-2 bg-white rounded-md shadow shadow-md">
      <div className="flex justify-end">
        <img className="cursor-pointer" src={info} alt="info" />
      </div>
      <div className="flex flex-col justify-center items-center text-sm px-4 pb-4">
        <img className="py-2" src={webcam} alt="icon" />
        <p className="text-[#313131] font-bold py-2">Webcam validation</p>
      </div>
      <button type="button" className={`${on ? 'bg-[#daffdf]' : 'bg-[#ff386a]/20'} flex justify-center items-center m-auto -mt-2 mb-3 w-10 h-6 font-bold rounded-full`} onClick={handleOn}>
        <span className={`${on ? 'left-3 bg-[#47ca5b]' : '-left-3 bg-[#ff3849]'} w-7 h-7 rounded-full relative`}></span>
      </button>
    </div>
  );
};

export default WebcamQuiz;
