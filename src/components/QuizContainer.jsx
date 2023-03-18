import React from 'react';
import { Quiz } from './';
import { quizSettings } from '../constants';

const QuizContainer = () => {
  return (
    // <div>
    <div className="flex overflow-y-auto w-full">
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
