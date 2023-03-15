import React, { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg';
import search from '../assets/img/Iconsearch.svg';
import notification from '../assets/img/notification_alert.svg';
import profile from '../assets/img/profile.svg';
import english from '../assets/img/english.svg';
import { navBar } from '../constants';

const NavBar = () => {
  const [searchInput, setSearchInput] = useState(false);

  const handleSearch = () => {
    if (document.querySelector('.search_input').value === 'Quick Search ...') {
      setSearchInput(false);
    } else {
      setSearchInput(true);
    }
  };

  return (
    <nav className="flex justify-around items-center bg-white shadow inner-shadow-xl h-[70px]">
      <img src={logo} alt="logo" />
      <div className="flex items-center border h-[32px] p-2 rounded-md bg-[#f7f7f7]">
        <img className={`${searchInput ? 'hidden' : 'block'}`} src={search} alt="search" />
        <input className={`search_input border-none outline-none bg-[#f7f7f7] pl-2 `} onKeyDown={() => handleSearch()} type="text" placeholder="Quick Search ..." />
      </div>

      <ul className="flex text-[#b6b6b6] text-sm">
        {navBar.map((item) => (
          <li className="mx-4" key={item.id}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <button className="text-[#b6b6b6] text-sm rounded-md py-2 mx-2">
          <img src={notification} alt="notifications" />
        </button>
        <button className="text-[#b6b6b6] text-sm rounded-md py-2 mx-2">
          <img src={english} alt="notifications" />
        </button>
        <button className="flex items-center text-[#b6b6b6] text-sm rounded-md py-2 mx-2">
          <img src={profile} alt="notifications" />
          <div className="pl-2 flex flex-col items-center justify-center">
            <p className="text-[#6b6b6b] rounded-md">Blaise Defloo</p>
            <p className="text-[#9f9f9f] rounded-md">Administrator</p>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
