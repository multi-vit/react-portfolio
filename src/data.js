import week9Demo from './assets/week-9.gif';
import virtualKeyboard from './assets/virtual-keyboard.gif';

export const projects = [
  {
    title: 'Project Week',
    description: `After only 8 weeks of learning to code, I worked as part of a team of 4 on a brief of improving life on the School of Code for remote bootcampers. 
    We created an app with code snippets and links to helpful resources and presented it to a panel of senior developers and industry professionals.`,
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
