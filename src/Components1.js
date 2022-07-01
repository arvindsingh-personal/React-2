import React, { Component } from 'react'
import Components2 from './Components2'
import Components3 from './Components3'
import Components6 from './Components6'
import './index.css';

export default class Components1 extends Component {
  render() {
    return (
      <div className='main'>
        React App
        <div className='container'>
          <Components2 />
          <div className='flex'>
          <Components3 />
          <Components6 />
          </div>
        </div>
      </div>
    )
  }
}
