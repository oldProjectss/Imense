import React from 'react';
import upload from '../assets/img/photo_upload.svg';
import safety from '../assets/img/securitytraining1.svg';

const Training = () => {
  return (
    <div className="flex justify-center items-start my-4 h-[480px]">
      <div className="bg-white shadow shadow-md px-4 rounded-md mr-2 w-3/4 h-full">
        <div className="flex my-2 my-4">
          <div className="flex flex-col w-full items-between px-2">
            <div className="flex justify-between font-bold">
              <p className="text-[#616161] font-bold">Category</p>
              <a className="text-[#1b8bce]" href="#">
                Add new +
              </a>
            </div>
            <select className="w-full border border-[#dcdcdc] text-[#4e4e4e] bg-transparent font-bold rounded-md p-3 my-2">
              <option value="1">🦺 Safety</option>
              <option value="2">🦺 Safety 2</option>
              <option value="3">🦺 Safety 3</option>
            </select>
          </div>
          <div className="flex flex-col w-full items-between px-2">
            <div className="flex justify-between font-bold">
              <p className="text-[#616161] font-bold">Topic</p>
              <a className="text-[#1b8bce]" href="#">
                Add new +
              </a>
            </div>
            <select className="w-full border border-[#dcdcdc] text-[#4e4e4e] bg-transparent font-bold rounded-md p-3 my-2">
              <option value="1">🦺 VCA</option>
              <option value="2">🦺 VCA 2</option>
              <option value="3">🦺 VCA 3</option>
            </select>
          </div>
          <div className="flex flex-col w-full items-between px-2">
            <p className="text-[#616161] font-bold">Category</p>
            <select className="w-full border border-[#dcdcdc] text-[#4e4e4e] bg-transparent font-bold rounded-md p-3 my-2">
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
            </select>
          </div>
        </div>
        <div className="flex w-full my-4">
          <div className="flex flex-col w-full items-between px-2 w-2/3">
            <p className="text-[#616161] font-bold">Training</p>
            <select className="w-full border border-[#dcdcdc] text-[#4e4e4e] bg-transparent font-bold rounded-md p-3 my-2">
              <option value="1">Working at height</option>
              <option value="2">Working at height 2</option>
              <option value="3">Working at height 3</option>
            </select>
          </div>
          <div className="flex flex-col w-full items-between px-2 w-1/3">
            <p className="text-[#616161] font-bold">Assign To</p>
            <select className="w-full border border-[#dcdcdc] text-[#4e4e4e] bg-transparent font-bold rounded-md p-3 my-2">
              <option value="1">Internal workers</option>
              <option value="2">Internal workers 2</option>
              <option value="3">Internal workers 3</option>
            </select>
          </div>
        </div>
        <div className="flex w-full mt-4">
          <div className="flex flex-col w-1/3">
            <div className="flex flex-col w-full items-between px-2 my-2">
              <div className="flex justify-between font-bold">
                <p className="text-[#616161] font-bold">Departments</p>
                <p className="text-[#b8b8b8]">Optional</p>
              </div>
              <select className="w-full border border-[#dcdcdc] text-[#888] italic bg-transparent rounded-md p-3 my-2" defaultValue="0">
                <option value="0" disabled>
                  Select departments
                </option>
                <option value="1">🦺 Safety</option>
                <option value="2">🦺 Safety 2</option>
                <option value="3">🦺 Safety 3</option>
              </select>
            </div>
            <div className="flex flex-col w-full items-between px-2 my-2">
              <div className="flex justify-between font-bold">
                <p className="text-[#616161] font-bold">Fonctions</p>
                <p className="text-[#b8b8b8]">Optional</p>
              </div>
              <select className="w-full border border-[#dcdcdc] text-[#888] italic bg-transparent rounded-md p-3 my-2" defaultValue="0">
                <option value="0" disabled>
                  Select functions
                </option>
                <option value="1">🦺 Safety</option>
                <option value="2">🦺 Safety 2</option>
                <option value="3">🦺 Safety 3</option>
              </select>
            </div>
          </div>
          <div className="flex w-2/3">
            <div className="flex flex-col w-full items-between px-2">
              <p className="text-[#616161] font-bold">Description</p>
              <textarea className="w-full border border-[#dcdcdc] text-[#4e4e4e] italic bg-transparent rounded-md p-3 my-2 w-full h-full" placeholder="Type here..." />
            </div>
          </div>
        </div>
        {/* end */}
      </div>
      <div className="bg-white shadow shadow-md p-4 rounded-md mx-2 w-2/4 h-full ">
        <p className="text-[#616161] font-bold">Image</p>
        <div className="flex flex-col justify-center items-center border border-4 border-dashed p-10 my-4 rounded-md h-3/4">
          <img className="mb-2 cursor-pointer" src={upload} alt="placeholder" />
          <p className="text-[#b4b4b4] text-center">
            Drag and drop your image here Or{' '}
            <a className="text-[#1b8bce]" href="#">
              browse files
            </a>
          </p>
        </div>
        <p className="text-[#b4b4b4] font-bold mt-10">*Only JPG, PNG files are allowed. Image must be less than 2 MB</p>
      </div>
      <div className="bg-white shadow shadow-md p-4 rounded-md ml-2 w-1/4 h-full ">
        <p className="text-[#616161] font-bold">Training file</p>
        <div className="flex flex-col justify-center items-center border border-4 border-dashed p-5 my-4 rounded-md">
          <img className="mb-2 cursor-pointer" src={upload} alt="placeholder" />
          <p className="text-[#b4b4b4] font-bold text-center">
            Drag and drop your image here Or{' '}
            <a className="text-[#1b8bce]" href="#">
              browse files
            </a>
          </p>
        </div>
        <div className="flex justify-between items-center text-sm p-2 rounded-md bg-[#47ca5b]">
          <p className="text-white">
            Completed
            <br />
            workingAtHeight.pdf
          </p>
          <button className="bg-white hover:bg-white/90 text-[#b5b5b5] rounded-full w-6 font-bold text-center h-6">
            <i className="fas fa-close"></i>
          </button>
        </div>
        <p className="text-[#b4b4b4] font-bold mt-2">*Only Video, PDF and SlideShow files are allowed.</p>
        <hr className="mt-4 mb-2" />
        <p className="font-bold relative h-3 w-fit -top-5 left-28 text-[#b5b5b5] bg-white">OR</p>
        <p className="text-[#616161] font-bold">Media URL</p>
        <input className="w-full border border-[#b4b4b4] rounded-md p-2 my-2" type="text" placeholder="https://youtu.be/1g4hoZx8-o4" />
      </div>
    </div>
  );
};

export default Training;
