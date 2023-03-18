import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/img/logo.svg';
import search from '../assets/img/Iconsearch.svg';
import notification from '../assets/img/notification_alert.svg';
import profile from '../assets/img/profile.svg';
import en from '../assets/img/english.svg';
import nl from '../assets/img/nederlands.svg';
import es from '../assets/img/spain.svg';
import de from '../assets/img/germany.svg';
import settings from '../assets/img/setting.svg';
import policies from '../assets/img/policie.svg';
import logout from '../assets/img/logout.svg';
import arrow from '../assets/img/arrow_down.svg';
import { navBar } from '../constants';

const NavBar = () => {
  const [searchInput, setSearchInput] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const languageDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  const handleLanguageDrop = () => {
    setLanguageDropdown((prevState) => !prevState);
  };

  const handleProfileDrop = () => {
    setProfileDropdown((prevState) => !prevState);
  };

  const changeLanguage = (e) => {
    console.log(e.target.firstChild);
  };

  const handleSearch = () => {
    if (document.querySelector('.search_input').value === '') {
      setSearchInput(false);
    } else {
      setSearchInput(true);
    }
  };

  const handleDocumentClick = (e) => {
    if (languageDropdownRef.current && !languageDropdownRef.current.contains(e.target)) {
      setLanguageDropdown(false);
    }
    if (profileDropdownRef.current && !profileDropdownRef.current.contains(e.target)) {
      setProfileDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <nav className="flex justify-around items-center bg-white shadow shadow-md h-[70px]">
      <img className="cursor-pointer" src={logo} alt="logo" />
      <div className="flex items-center border h-[32px] p-2 rounded-md bg-[#f7f7f7] w-96">
        <img className={`${searchInput ? 'hidden' : 'block'}`} src={search} alt="search" />
        <input className={`${searchInput ? 'pl-0' : 'pl-2'} search_input border-none outline-none bg-[#f7f7f7]`} onChange={() => handleSearch()} type="text" placeholder="Quick Search ..." />
      </div>

      <ul className="flex text-[#b6b6b6] text-sm">
        {navBar.map((item, i) => (
          <li className="mx-4 flex justify-center items-center hover:text-[#2C8EFF] font-bold" key={item.id}>
            <a className="" href="#">
              {item.name}
            </a>
            <img src={arrow} alt="arrow" className={`${navBar.length - 1 === i ? 'block' : 'hidden'} pl-2`} />
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <button className="text-[#b6b6b6] text-sm rounded-md py-2 mx-2">
          <img src={notification} alt="notifications" />
        </button>

        {/* Lang */}
        <div ref={languageDropdownRef}>
          <button className="text-[#b6b6b6] text-sm rounded-md py-2 mx-2" onClick={handleLanguageDrop}>
            <img src={en} alt="lang" />
          </button>

          <ul className={` ${languageDropdown ? 'block' : 'hidden'} absolute py-2 px-4 top-16 bg-white rounded-md shadow shadow-xl`}>
            <li className='hover:bg-gray-100'>
              <button className="flex justify-center items-center text-[#b6b6b6] text-sm rounded-md p-2" onClick={(e) => changeLanguage(e)}>
                <img src={en} alt="eng" />
                <p className="pl-2 text-[#6b6b6b] rounded-md">English (EN)</p>
              </button>
            </li>
            <li className='hover:bg-gray-100'>
              <button className="flex justify-center items-center text-[#b6b6b6] text-sm rounded-md p-2" onClick={(e) => changeLanguage(e)}>
                <img className="rotate-90" src={nl} alt="fr" />
                <p className="pl-2 text-[#6b6b6b] rounded-md">Français (FR)</p>
              </button>
            </li>
            <li className='hover:bg-gray-100'>
              <button className="flex justify-center items-center text-[#b6b6b6] text-sm rounded-md p-2" onClick={(e) => changeLanguage(e)}>
                <img src={nl} alt="nl" />
                <p className="pl-2 text-[#6b6b6b] rounded-md">Nederlands (NL)</p>
              </button>
            </li>
            <li className='hover:bg-gray-100'>
              <button className="flex justify-center items-center text-[#b6b6b6] text-sm rounded-md p-2" onClick={(e) => changeLanguage(e)}>
                <img src={es} alt="es" />
                <p className="pl-2 text-[#6b6b6b] rounded-md">Español (ES)</p>
              </button>
            </li>
            <li className='hover:bg-gray-100'>
              <button className="flex justify-center items-center text-[#b6b6b6] text-sm rounded-md p-2" onClick={(e) => changeLanguage(e)}>
                <img src={de} alt="de" />
                <p className="pl-2 text-[#6b6b6b] rounded-md">Deutsch (DE)</p>
              </button>
            </li>
          </ul>
        </div>

        {/* Profile menu */}
        <div ref={profileDropdownRef}>
          <button className="flex items-center text-[#b6b6b6] text-sm rounded-md py-2 mx-2" onClick={handleProfileDrop}>
            <img src={profile} alt="notifications" />
            <div className="pl-2 flex flex-col items-center justify-center">
              <p className="text-[#6b6b6b] rounded-md">Blaise Defloo</p>
              <p className="text-[#9f9f9f] rounded-md">Administrator</p>
            </div>
          </button>

          <ul className={` ${profileDropdown ? 'block' : 'hidden'} absolute py-2 px-4 top-16 bg-white rounded-md shadow shadow-xl`}>
            <li>
              <p className="pl-2 text-[#6b6b6b] font-bold">BESIX Group</p>
            </li>
            <li>
              <p className="pl-2 text-[#6b6b6b] rounded-md">besix.group@besix.be</p>
            </li>
            <hr className="my-2" />
            <li className='hover:bg-gray-100'>
              <button className="flex justify-center items-center text-[#b6b6b6] text-sm rounded-md p-2">
                <img src={settings} alt="settings" />
                <p className="pl-2 text-[#6b6b6b] rounded-md">Profile settings</p>
              </button>
            </li>
            <li className='hover:bg-gray-100'>
              <button className="flex justify-center items-center text-[#b6b6b6] text-sm rounded-md p-2">
                <img src={policies} alt="policies" />
                <p className="pl-2 text-[#6b6b6b] rounded-md">Our policies</p>
              </button>
            </li>
            <li className='hover:bg-gray-100'>
              <button className="flex justify-center items-center text-[#b6b6b6] text-sm rounded-md p-2">
                <img src={logout} alt="Log out" />
                <p className="pl-2 text-[#6b6b6b] rounded-md">Log out</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
