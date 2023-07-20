import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/My icon.jpg'

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        
        <div style={{ color: 'black', fontWeight: 'bold' }} className='tagtop'>
          # hello_world
        </div>
        <div style={{ color: 'black', fontWeight: 'bold' }} className=''>
          # coding
        </div>
        <h1>
          
          <pre> Abhijeet Chawla</pre> 
          
        </h1>

        <img src={logo} />
        <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
          <a
            href='https://mail.google.com/mail/u/1/#inbox'
            rel='opener noreferrer'
            target='_blank'
            className='fa fa-envelope'
          >abhijeetchawla33@gmail.com</a>{' '}
          
        </p>

        <ul className='sidebar-nav'>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#projects' className='links'>
              Projects
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#about' className='links'>
              About
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#interest' className='links'>
              Interest
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#education' className='links'>
              Education
            </Link>
          </li>
          
        </ul>

        <div className='flip-card-back'>
          <ul className='sidebar-nav'>
            <li className='sidebar-nav-icons'>
              <a
                href='https://github.com/Abhikush27'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-github fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://www.linkedin.com/in/abhijeet-chawla-92b6a2223/'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-linkedin fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='mailto:mittalsam98@gmail.com'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-envelope fa-lg'
              ></a>
            </li>
          </ul>
        </div>
        <div
          style={{
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '30%'
          }}
          className='tagtop'
        >
          Made with{' '}
          <a href='' style={{ textDecoration: 'none' }} className='fa fas fa-heart fa-lg'></a> by
          me.
        </div>
      </div>
    );
  }
}

export default Sidebar;
