import React from 'react';
import "./css/component.css";
import './css/App.css';
import Content from './Content/Content';
import Difference from './Content/Difference';
import Development from './Content/Development';

import datascience1 from "./image/Datascience/datascience1.png";
import datascience2 from "./image/Datascience/datascience2.png";
import datascience3 from "./image/Datascience/datascience3.png";


function Datascience() {
  return (
    <div>
        <div className='para'>
          <div className='paragraph'>
            
            <h1>Data Science</h1>
                <p>
                  One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration.
                </p>
                <p>
                  The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!
                </p>  
          </div>

        </div>
        <div>
          <div className='container'>
              <div className='col-f'>
                  <div className='content'>
                      <img src={datascience1 } className='image' />
                
                      <h2>Backend Development Roadmap: A Complete Guide 2024</h2>
                      <Content/>
                  </div>
              </div>
              <div className='col-s'>
                  <div className='content'>
                      <img src={datascience2 } className='image' />
                      <h2>Frontend vs Backend Development: Top 7 Differences </h2>
                      <Difference/>
                  </div>

              </div>
              <div className='col-t'>
                  <div className='content'>
                      <img src={datascience3 } className='image' />
                      <h2>Comprehensive List of Project Ideas for Frontend Development [2024]</h2>
                      <Development/>
                  </div>

              </div>
          </div>
        </div>
        
        
    </div>
  )
}

export default Datascience;
