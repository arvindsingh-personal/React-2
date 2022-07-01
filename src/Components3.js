import React, { Component } from 'react'
import Components4 from './Components4'
import Components5 from './Components5'
export default class Components3 extends Component {
  render() {
    return (
      <div className='section1'>
        Components3
        <div className='section1-data'>
          <Components4 />
          <Components5 />
        </div>
      </div>
    )
  }
}
