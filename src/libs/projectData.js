import week9Demo from '../assets/project-images/week-9.gif';
import virtualKeyboard from '../assets/project-images/virtual-keyboard.gif';
//TODO add final project and python project (keep description inside limit for mobile card)
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
];

export default projects;
