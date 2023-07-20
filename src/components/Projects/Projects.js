import React from 'react';
import classes from './Projects.module.css';
import money from '../images/money.jpg';
import hotel from '../images/hotel.jpeg';
import travel from '../images/travel-log.png';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const cardItem = [
  {
    link: 'https://github.com/Abhikush27/Web-Development',
    title: 'Expense Tracker',
    techStack: 'Tech Stack: ReactJs',
    desc: 'The Expense Tracker allows users to easily track their income and expenses, providing them with valuable insights into their spending habits.',
    image: money
  },
  {
    link: 'https://github.com/Abhikush27/Hotel-Booking',
    title: 'Hotel Booking',
    techStack: 'Tech Stack- MERN stack',
    desc: 'Play real time chess with your friends online by sharing a link.',
    image: hotel
  },
  {
    link: 'https://travel-log-frontend-two.vercel.app/',
    title: 'Personal Portfolio',
    techStack: 'Tech Stack- ReactJs',
    desc: 'A full stack application to store / list places you have visited. You can log every visit on map.',
    image: travel
  },
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <li>
        <a href={cardItem.link} className={classes.card} target='_blank'>
          <img src={cardItem.image} className={classes.card__image} alt='' />
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
                <span className={classes.card__status}>{cardItem.techStack}</span>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
          </div>
        </a>
      </li>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
       
      </ScrollAnimation>
    </div>
  );
}
