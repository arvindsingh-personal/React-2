// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index1.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';
import NavBar from './NavBar';
import Profile from './Profile';
import Trends from './Trends';
import Feed from './Feed';
import Follow from './Follow';
import React, { Component } from 'react'
export class Index1 extends Component {
  render() {
    return (
      <div className='container1'>   
          <NavBar /> 
        <div className='section'>
          <div className='combined'>
            <Profile />
            <Trends />
          </div>
          <Feed />
          <Follow />
        </div>
      </div>
    )
  }
}

export default Index1;


