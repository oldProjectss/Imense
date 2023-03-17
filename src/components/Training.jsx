import React from 'react';
import upload from '../assets/img/photo_upload.svg';

const Training = () => {
  return (
    <div className="flex justify-center items-start my-4 h-max">
      <div className="bg-white shadow shadow-md p-4 rounded-md mr-2 w-3/4 h-full"></div>
      <div className="bg-white shadow shadow-md p-4 rounded-md mx-2 w-2/4 h-full">
        <p className="text-[#616161] font-bold">Image</p>
        <div className="flex flex-col justify-center items-center border border-dashed p-10 my-4 rounded-md">
          <img className="mb-2" src={upload} alt="placeholder" />
          <p className="text-[#b4b4b4] font-bold text-center">
            Drag and drop your image here Or{' '}
            <a className="text-[#1b8bce]" href="#">
              browse files
            </a>
          </p>
        </div>
        <p className="text-[#b4b4b4] font-bold">*Only JPG, PNG files are allowed. Image must be less than 2 MB</p>
      </div>
      <div className="bg-white shadow shadow-md p-4 rounded-md ml-2 w-1/4 h-full">
        <p className="text-[#616161] font-bold">Training file</p>
        <div className="flex flex-col justify-center items-center border border-dashed p-5 my-4 rounded-md">
          <img className="mb-2" src={upload} alt="placeholder" />
          <p className="text-[#b4b4b4] font-bold text-center">
            Drag and drop your image here Or{' '}
            <a className="text-[#1b8bce]" href="#">
              browse files
            </a>
          </p>
        </div>
        <div className="flex justify-between items-center my-2 p-2 rounded-md bg-[#47ca5b]">
          <p className="text-white">
            Completed
            <br />
            workingAtHeight.pdf
          </p>
          <button className="bg-white hover:bg-white/90 text-[#b5b5b5] rounded-full w-fit h-fit px-2">X</button>
        </div>
        <p className="text-[#b4b4b4] font-bold">*Only Video, PDF and SlideShow files are allowed.</p>
        <hr className="mt-4 mb-2" />
        <p className="font-bold relative h-3 w-fit -top-5 left-28 text-[#b5b5b5] bg-white">OR</p>
        <p className="text-[#616161] font-bold">Media URL</p>
        <input className="w-full border border-[#b4b4b4] rounded-md p-2 my-2" type="text" placeholder="https://youtu.be/1g4hoZx8-o4" />
      </div>
    </div>
  );
};

export default Training;
