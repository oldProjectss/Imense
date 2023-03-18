import React, { useState, useRef, useEffect } from 'react';
import arrowDown from '../assets/img/arrow_down.svg';
import bin from '../assets/img/bin.svg';

const CustomSelect = ({ options, defaultValue, icon, style }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const optionRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (optionRef.current && !optionRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative bg-white" ref={optionRef}>
      <button type="button" className="flex justify-between items-center w-full border border-[#dcdcdc] text-[#4e4e4e] bg-transparent font-bold rounded-md p-3 my-2" id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={() => setIsOpen(!isOpen)}>
        <div className={`${style} flex items-center justify-center`}>
          {icon && <img src={icon} alt="icon" className="w-6 h-full mr-2" />}
          <span>{selectedOption}</span>
        </div>
        {defaultValue === 'Working at height' ? <img src={bin} alt="icon" className="w-4 h-full" /> : <img src={arrowDown} alt="icon" className="w-3 h-3" />}
      </button>
      {isOpen && (
        <div className="bg-white z-10 top-12 w-full cursor-pointer font-bold absolute right-0 mt-2 w-56 rounded-md shadow-lg border">
          {options.map((option) => (
            <div key={option} className={`flex py-1 px-3 hover:bg-gray-100 ${selectedOption === option ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`} onClick={() => handleOptionClick(option)}>
              {icon && <img src={icon} alt="icon" className="h-full mr-2" />}
              <span>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
