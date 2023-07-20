import React, { Component } from 'react';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown } from 'react-icons/fa';
import Hello from '../images/Hello.jpg';

class CarouselImages extends Component {
  render() {
    return (
      
      <div className='classes.carousel'>
          <div className={classes.image_container}>
            <img className={classes.image} src={Hello} alt='myImage' />
            <div className={classes.h1}>
              <h1>I'm Abhijeet</h1>
              <a
                href='https://evarsity.srmist.edu.in/srmwebonline/exam/onlineResult.jsp'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW CV <FaArrowCircleDown />
              </a>

              <a
                href='https://github.com/Abhikush27'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW REACT PROJECTS <GoProject />
              </a>
            </div>
          </div>
          </div>
        
    );
  }
}
export default CarouselImages;
