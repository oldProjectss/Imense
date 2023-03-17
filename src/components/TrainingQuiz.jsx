import React from 'react';
import upload from '../assets/img/photo_upload.svg';
import checktrue from '../assets/img/checkboxTrue.svg';
import checkfalse from '../assets/img/checkboxfalse.svg';

const TrainingQuiz = () => {
  return (
    <div className="flex flex-col justify-start items-start my-4 w-full bg-white p-8 shadow shadow-md rounded-md">
      <h2 className="text-[#616161] font-bold text-xl">Training quiz</h2>
      <p className="text-[#b4b4b4] mt-2">Here you can manage the questions by clicking on the “Add Question” button and choose from the available types of question. You can add up to 100 questions.</p>
      <hr className="w-full my-6" />
      <div className="flex bg-[#f8f8f8] border border-[#ebebeb] shadow shadow-sm p-8 mb-4 rounded-md w-full">
        <div className="w-3/4 mr-10">
          <div className="flex justify-between font-bold text-xl">
            <p>Question 1</p>
            <i className="fas fa-close text-[#c7c7c7]"></i>
          </div>
          <p className="bg-white px-4 py-6 my-2 rounded-md text-[#616161] font-bold border border-[#ebebeb]">Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.</p>
          <div className="flex justify-between items-center bg-white py-2 px-4 my-2 mt-4 rounded-md font-bold text-[#616161] border border-[#ebebeb]">
            <p>True</p>
            <div className="flex">
              <img className="mx-4 h-10" src={checktrue} alt="checkbox" />
              <img src={upload} alt="upload" />
            </div>
          </div>
          <div className="flex justify-between items-center bg-white py-2 px-4 rounded-md font-bold text-[#616161] border border-[#ebebeb]">
            <p>False</p>
            <div className="flex">
              <img className="mx-4 h-10" src={checkfalse} alt="checkbox" />
              <img src={upload} alt="upload" />
            </div>
          </div>
        </div>
        <div className="bg-transparent w-1/4">
          <div className="flex justify-between">
            <p className="text-[#616161] font-bold">Question Image</p>
            <p className="text-[#b1b1b1] font-bold">Optional</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-4 border-dashed p-20 mt-4 rounded-md h-3/4">
            <img className="mb-2" src={upload} alt="placeholder" />
            <p className="text-[#b4b4b4] text-center">
              Drag and drop your image here Or{' '}
              <a className="text-[#1b8bce]" href="#">
                browse files
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-[#f8f8f8] border border-[#ebebeb] shadow shadow-sm p-8 my-4 rounded-md w-full">
        <div className="w-3/4 mr-10">
          <div className="flex justify-between font-bold text-xl">
            <p>Question 1</p>
            <i className="fas fa-close text-[#c7c7c7]"></i>
          </div>
          <p className="bg-white px-4 py-6 my-2 rounded-md text-[#616161] font-bold border border-[#ebebeb]">Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.</p>
          <div className="flex justify-between items-center bg-white py-2 px-4 my-2 mt-4 rounded-md font-bold text-[#616161] border border-[#ebebeb]">
            <p>True</p>
            <div className="flex">
              <img className="mx-4 h-10" src={checktrue} alt="checkbox" />
              <img src={upload} alt="upload" />
            </div>
          </div>
          <div className="flex justify-between items-center bg-white py-2 px-4 rounded-md font-bold text-[#616161] border border-[#ebebeb]">
            <p>False</p>
            <div className="flex">
              <img className="mx-4 h-10" src={checkfalse} alt="checkbox" />
              <img src={upload} alt="upload" />
            </div>
          </div>
        </div>
        <div className="bg-transparent w-1/4">
          <div className="flex justify-between">
            <p className="text-[#616161] font-bold">Question Image</p>
            <p className="text-[#b1b1b1] font-bold">Optional</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-4 border-dashed p-20 mt-4 rounded-md h-3/4">
            <img className="mb-2" src={upload} alt="placeholder" />
            <p className="text-[#b4b4b4] text-center">
              Drag and drop your image here Or{' '}
              <a className="text-[#1b8bce]" href="#">
                browse files
              </a>
            </p>
          </div>
        </div>
      </div>
      <button className='p-4 mt-2 bg-[#e1efff] text-[#2c8eff] w-full font-bold text-2xl rounded-md'>Add Question +</button>
    </div>
  );
};

export default TrainingQuiz;
