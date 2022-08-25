import week9Demo from '../assets/project-images/week-9.gif';
import virtualKeyboard from '../assets/project-images/virtual-keyboard.gif';
import seasonalDemo from '../assets/project-images/seasonal-demo.gif';
import pythonQuiz from '../assets/project-images/quiz-app.gif';

const projects = [
  {
    title: 'Project Week',
    description: `After only 8 weeks of learning to code, I worked as part of a team of 4 to create a full-stack app aimed at improving life on the School of Code for remote bootcampers.`,
    src: week9Demo,
    alt: 'Week 9 Project Screenshot',
    github: 'https://github.com/SchoolOfCode/w9_frontend-project-team-16',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Virtual Keyboard',
    description: `Using HTML, CSS and Vanilla JavaScript to create a Virtual Keyboard. Lots learnt about creating HTML, appending them to the DOM and using event listeners.`,
    src: virtualKeyboard,
    alt: 'Virtual Keyboard Screenshot',
    github: 'https://github.com/multi-vit/virtual-keyboard',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Project Month',
    description: `For the final 4 weeks of School of Code, I worked as part of a team of 6 to create a full-stack app aimed at informing and enabling users to make choices about seasonal food.`,
    src: seasonalDemo,
    alt: 'Final Project Screenshot',
    github: 'https://github.com/SchoolOfCode/final-project_front-end-12',
    techStack: ['Next.js', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Python GUI Quiz',
    description: `A basic quiz app created in python, with questions supplied by the Open Trivia Database (opentdb.com).`,
    src: pythonQuiz,
    alt: 'Python Quiz Screenshot',
    github: 'https://github.com/multi-vit/python-gui-quiz-app',
    techStack: ['Python'],
  },
];

export default projects;
