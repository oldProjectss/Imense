import randomIcon from '../assets/img/random_question.svg';
import timerIcon from '../assets/img/timer.svg';
import scoreIcon from '../assets/img/score.svg';
import webcamIcon from '../assets/img/webcam.svg';
import timeIcon from '../assets/img/time.svg';
import attemptsIcon from '../assets/img/attempts.svg';

const navBar = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/',
  },
  {
    id: 2,
    name: 'Training',
    path: '#training',
  },
  {
    id: 3,
    name: 'Users',
    path: '#users',
  },
  {
    id: 4,
    name: 'More ',
    path: '#more',
  },
];

const quizSettings = [
  {
    id: 1,
    name: 'Random questions',
    details: 'Random questions from the database',
    defaultVal: 10,
    icon: randomIcon,
    valType: '',
    on: true,
  },
  {
    id: 2,
    name: 'Time per question',
    details: 'When the countdown is finished, the system will automatically move to the next question.',
    defaultVal: 45,
    icon: timerIcon,
    valType: 's',
    on: true,
  },
  {
    id: 3,
    name: 'Passing score',
    details: 'Select the passing score',
    defaultVal: 80,
    icon: scoreIcon,
    valType: '%',
    on: true,
  },
  {
    id: 4,
    name: 'Webcam validation',
    details: 'The system will take a picture of the user when the quiz starts and will compare it with the picture taken when the quiz ends.',
    defaultVal: 0,
    icon: webcamIcon,
    valType: '',
    on: true,
  },
  {
    id: 5,
    name: 'Time Expected',
    details: 'The expected time to complete the quiz',
    defaultVal: 30,
    icon: timeIcon,
    valType: 'min',
    on: true,
  },
  {
    id: 6,
    name: 'Attempts',
    details: 'The number of attempts allowed',
    defaultVal: 3,
    icon: attemptsIcon,
    valType: '',
    on: true,
  },
];

export { navBar, quizSettings };
