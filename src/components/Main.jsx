import React from 'react';
import { QuizContainer, Training, TrainingQuiz } from './';

const Main = () => {
  return (
    <div className="flex flex-col m-10 mx-16">
      <div className="flex justify-between items-end mb-2">
        <h1 className="text-[#7c7c7c] text-xl font-bold">Edit Training "Working At Height"</h1>
        <div className="flex justify-center items-center">
          <a href="#" className="text-[#b5b5b5] font-bold py-2 px-4 rounded">
            Cancel
          </a>
          <button className="bg-[#eb7421] hover:bg-[#eb7421]/90 text-white font-bold py-2 px-4 rounded">Update & Save</button>
        </div>
      </div>
      <Training />
      <TrainingQuiz />
      <QuizContainer />
    </div>
  );
};

export default Main;
