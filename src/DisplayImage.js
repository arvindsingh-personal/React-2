import React, { Component } from 'react'

export default class DisplayImage extends Component {
  render() {
    return (
      <div div className='displayimage' >
        <img src ={ './Images/'+this.props.url } />
      </div>
    )
  }
}
