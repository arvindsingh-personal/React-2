import React, { Component } from 'react'
import DisplayImage from './DisplayImage';
import './style.css';


const images = ['image1.jpg', 'image2.webp', 'image3.webp', 'image4.webp', 'image5.webp', 'image6.webp', 'image7.webp', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.webp', 'image12.webp', 'image13.jpeg', 'image14.jpeg'];

export default class PropstocallDisplayImage extends Component {
  render() {
    return (
      <div className='gallery'>
        <span>Image Gallery</span>
        <div className='imagecaller'>
          {images.map(image =>
            (<DisplayImage url={image} />))}
        </div>
      </div>
    )
  }
}