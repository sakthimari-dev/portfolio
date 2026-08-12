// ============================================
//  Skills.js — Portfolio Software Skills Slide
//  Exact match: black bg + blue radial glow +
//  cascading diagonal icon stack (right side)
// ============================================
import React, { useState } from 'react';
import './Skills.css';

// ── SVG Icon Components ──────────────────────

const HTML5Icon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.2 0L5.6 27.4L16 30.4L26.4 27.4L28.8 0H3.2Z" fill="#E44D26"/>
    <path d="M16 2.8V27.8L24.2 25.6L26.2 2.8H16Z" fill="#F16529"/>
    <path d="M11.8 12.4H16V9.6H8.8L9.6 17.6H16V14.8H12.4L11.8 12.4Z" fill="white"/>
    <path d="M9.6 19.4L10.2 25.6L16 27.2V24.4L13.2 23.6L13 21.6H9.6V19.4Z" fill="#EBEBEB"/>
    <path d="M16 12.4V14.8H19.2L18.8 18.6L16 19.4V22.2L21.4 20.6L21.6 18.4L22.2 12.4H16Z" fill="white"/>
    <path d="M16 9.6V12.4H22.4L22.6 9.6H16Z" fill="white"/>
  </svg>
);

const CSS3Icon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.2 0L5.6 27.4L16 30.4L26.4 27.4L28.8 0H3.2Z" fill="#1572B6"/>
    <path d="M16 2.8V27.8L24.2 25.6L26.2 2.8H16Z" fill="#33A9DC"/>
    <path d="M16 14.6H12.2L11.8 11.6H16V8.8H8.6L9.4 17.4H16V14.6Z" fill="white"/>
    <path d="M16 21L13.2 20.2L13 18.4H10.2L10.6 22.6L16 24.2V21Z" fill="#EBEBEB"/>
    <path d="M16 14.6V17.4H19.4L19 20.4L16 21.2V24.2L21.6 22.6L22 18.6L22.4 14.6H16Z" fill="white"/>
    <path d="M16 8.8V11.6H22.8L23 8.8H16Z" fill="white"/>
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" fill="#F7DF1E"/>
    <path
      d="M9.2 24.8L11.6 23.3C12 24.2 12.5 24.9 13.5 24.9C14.5 24.9 15 24.4 15 22.9V14H17.8V22.9C17.8 25.9 16 27.3 13.6 27.3C11.4 27.3 10.1 26.1 9.2 24.8Z"
      fill="#323330"
    />
    <path
      d="M18.8 24.5L21.2 23C21.8 24 22.6 24.8 24 24.8C25.2 24.8 26 24.2 26 23.3C26 22.2 25.2 21.8 23.9 21.2L23.2 20.9C21.1 20 19.7 18.8 19.7 16.6C19.7 14.6 21.3 13.1 23.7 13.1C25.4 13.1 26.6 13.7 27.5 15.2L25.2 16.8C24.7 15.9 24.2 15.6 23.7 15.6C23.1 15.6 22.7 16 22.7 16.6C22.7 17.3 23.1 17.6 24.4 18.2L25.1 18.5C27.5 19.5 28.9 20.7 28.9 23C28.9 25.5 26.9 27.3 24.2 27.3C21.5 27.3 19.8 25.9 18.8 24.5Z"
      fill="#323330"
    />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="2.8" fill="#61DAFB"/>
    <ellipse cx="16" cy="16" rx="14.5" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
    <ellipse
      cx="16" cy="16" rx="14.5" ry="5.5"
      stroke="#61DAFB" strokeWidth="1.5" fill="none"
      transform="rotate(60 16 16)"
    />
    <ellipse
      cx="16" cy="16" rx="14.5" ry="5.5"
      stroke="#61DAFB" strokeWidth="1.5" fill="none"
      transform="rotate(120 16 16)"
    />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.47 14.53L17.47 2.53a1.8 1.8 0 00-2.54 0l-2.54 2.54 3.22 3.22a2.14 2.14 0 012.71 2.71l3.1 3.1a2.14 2.14 0 11-1.28 1.28l-2.9-2.9v7.6a2.14 2.14 0 11-1.76 0V12.4a2.14 2.14 0 01-1.16-2.8L11.1 6.38 2.53 14.95a1.8 1.8 0 000 2.54L14.53 29.47a1.8 1.8 0 002.54 0L29.47 17.07a1.8 1.8 0 000-2.54z"
      fill="white"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C8.27 2 2 8.27 2 16c0 6.19 4.01 11.44 9.58 13.29.7.13.96-.3.96-.67v-2.34c-3.9.85-4.72-1.88-4.72-1.88-.64-1.62-1.56-2.05-1.56-2.05-1.27-.87.1-.85.1-.85 1.41.1 2.15 1.45 2.15 1.45 1.25 2.14 3.28 1.52 4.08 1.16.13-.9.49-1.52.89-1.87-3.11-.35-6.38-1.56-6.38-6.93 0-1.53.55-2.78 1.44-3.76-.14-.35-.62-1.78.14-3.71 0 0 1.18-.38 3.85 1.44A13.4 13.4 0 0116 8.8c1.19.01 2.39.16 3.51.47 2.67-1.82 3.85-1.44 3.85-1.44.76 1.93.28 3.36.14 3.71.9.98 1.44 2.23 1.44 3.76 0 5.38-3.28 6.57-6.4 6.92.5.43.95 1.29.95 2.6v3.85c0 .37.25.81.96.67C25.99 27.44 30 22.19 30 16 30 8.27 23.73 2 16 2z"
      fill="white"
    />
  </svg>
);

const PostmanIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" fill="#FF6C37"/>
    <path
      d="M18.5 10.5l-7 5.5 7 5.5V10.5z"
      fill="white"
      opacity="0.9"
    />
    <path
      d="M13 13l5.5 3-5.5 3V13z"
      fill="#FF6C37"
    />
    <circle cx="21" cy="16" r="2.5" fill="white" opacity="0.85"/>
    <path
      d="M8 16h5M21 13v6"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

const VSCodeIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28 5.09L21.73 2 11.82 12.2 5.56 7.64 2 9.36v13.28l3.56 1.72 6.26-4.56L21.73 30 28 26.91V5.09z"
      fill="#007ACC"
    />
    <path
      d="M28 5.09L21.73 2 11.82 12.2 5.56 7.64 2 9.36l6.18 6.64L2 22.64l3.56 1.72 6.26-4.56L21.73 30 28 26.91V5.09z"
      fill="#1BA8E0"
      opacity="0.5"
    />
    <path
      d="M5.56 23.36L2 22.64v-1.28l3.56 1.28v1.72zM5.56 8.64V10.36L2 9.36v1.28l3.56-1.28V8.64z"
      fill="white"
      opacity="0.25"
    />
    <path
      d="M21.73 2l-9.91 10.2L5.56 7.64l6.26 8.36-6.26 8.36 6.26-4.56L21.73 30V2z"
      fill="white"
      opacity="0.15"
    />
    <path
      d="M22 7.5L12.5 16 22 24.5V7.5z"
      fill="white"
      opacity="0.45"
    />
    <path
      d="M5.56 12.5L12.5 16 5.56 19.5V12.5z"
      fill="white"
      opacity="0.45"
    />
  </svg>
);

const NPMIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="8" width="30" height="16" rx="2" fill="#CC3333"/>
    <rect x="4" y="11" width="8" height="10" fill="white"/>
    <rect x="4" y="11" width="2.5" height="7" fill="#CC3333"/>
    <rect x="13" y="11" width="7" height="10" fill="white"/>
    <rect x="15.5" y="11" width="2.5" height="7" fill="#CC3333"/>
    <rect x="22" y="11" width="7" height="7" fill="white"/>
  </svg>
);

// ── Skills data ──────────────────────────────

const SKILLS = [
  { id: 'html5',   label: 'HTML5',      cardClass: 'card--html5',   Icon: HTML5Icon,   tooltip: 'HTML5'      },
  { id: 'css3',    label: 'CSS3',       cardClass: 'card--css3',    Icon: CSS3Icon,    tooltip: 'CSS3'       },
  { id: 'js',      label: 'JavaScript-ES6', cardClass: 'card--js',      Icon: JSIcon,      tooltip: 'JavaScript' },
  { id: 'react',   label: 'React.js',   cardClass: 'card--react',   Icon: ReactIcon,   tooltip: 'React.js'   },
  { id: 'git',     label: 'Git',        cardClass: 'card--git',     Icon: GitIcon,     tooltip: 'Git'        },
  { id: 'github',  label: 'GitHub',     cardClass: 'card--github',  Icon: GitHubIcon,  tooltip: 'GitHub'     },
  { id: 'postman', label: 'Postman',    cardClass: 'card--postman', Icon: PostmanIcon, tooltip: 'Postman'    },
  { id: 'vscode',  label: 'VS Code',    cardClass: 'card--vscode',  Icon: VSCodeIcon,  tooltip: 'VS Code'    },
  { id: 'npm',     label: 'NPM',        cardClass: 'card--npm',     Icon: NPMIcon,     tooltip: 'NPM'        },
];

// ── Component ────────────────────────────────

const Skills = () => {

 const [activeIndex, setActiveIndex] = useState(0);



  return (
    <section className="skills-section">

      {/* Left: bold title */}
      <div className="skills-title">
        <h2>SOFTWARE<br />SKILLS</h2>
      </div>

     
      {/* Author credit */}
      

      <div className="selected-skill">
  {SKILLS[activeIndex].label}
</div>

      {/* Right: cascading icon stack */}
 <div className="skills-stack">
  {SKILLS.map(({ id, label, cardClass, Icon, tooltip }, index) => (
    <div
      key={id}
      onClick={() => setActiveIndex(index)}
      className={`skill-card ${cardClass} ${
        activeIndex === index ? "active-card" : "inactive-card"
      }`}
    >
      <span className="skill-card-tooltip">{tooltip}</span>

      <div className="skill-card-icon">
        <Icon />
      </div>

      <span className="skill-card-label">{label}</span>
    </div>
  ))}
</div>

    </section>
  );
};

export default Skills;
