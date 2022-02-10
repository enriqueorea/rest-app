import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';


const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">
          about us
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image" />
        <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsam laudantium quia assumenda, temporibus itaque!</p>
        <button type='button' className='custom__button'>See More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">
          Our history
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image" />
        <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsam laudantium quia assumenda, temporibus itaque!</p>
        <button type='button' className='custom__button'>See More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
