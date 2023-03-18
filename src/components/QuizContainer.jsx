import React from 'react';
import { Quiz } from './';
import { quizSettings } from '../constants';

const QuizContainer = () => {
  return (
    // <div>
    <div className="flex overflow-x-auto overflow-y-hidden w-full custom-scrollbar">
      {quizSettings.map((setting) => (
        <Quiz key={setting.id} data={setting} />
      ))}
      {quizSettings.map((setting) => (
        <Quiz key={setting.id} data={setting} />
      ))}
    </div>
    // </div>
  );
};

export default QuizContainer;
