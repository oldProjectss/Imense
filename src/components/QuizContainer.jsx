import React from 'react';
import { Quiz } from './';
import WebcamQuiz from './WebcamQuiz';
import { quizSettings } from '../constants';

const QuizContainer = () => {
  return (
    // <div>
      <div className="flex justify-start items-center overflow-scroll w-full">
        {quizSettings.map((setting) => (
          <Quiz key={setting.id} data={setting} />
        ))}
        {/* <WebcamQuiz /> */}
      </div>
    // </div>
  );
};

export default QuizContainer;
