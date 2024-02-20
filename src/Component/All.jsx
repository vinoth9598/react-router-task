import React from 'react';
import './css/App.css';
import image1 from "./image/image1.png";
import image2 from "./image/image2.png";
import image3 from "./image/image3.png";
import Content from './Content/Content';
import Difference from './Content/Difference';
import Development from './Content/Development';


function All() {
  return (
    <div className='container'>
        <div className='col-f'>
            <div className='content'>
                <img src={image1 } className='image' />
           
                <h2>Backend Development Roadmap: A Complete Guide 2024</h2>
                <Content/>
            </div>
        </div>
        <div className='col-s'>
            <div className='content'>
                <img src={image2 } className='image' />
                <h2>Frontend vs Backend Development: Top 7 Differences </h2>
                <Difference/>
            </div>

        </div>
        <div className='col-t'>
            <div className='content'>
                <img src={image3 } className='image' />
                <h2>Comprehensive List of Project Ideas for Frontend Development [2024]</h2>
                <Development/>
            </div>

        </div>
    </div>
  )
}

export default All;
