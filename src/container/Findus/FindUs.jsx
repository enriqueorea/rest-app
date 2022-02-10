import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (

  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext__cormorant">Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <p className="p__cormorant" style={{color:'#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri 11:00 am - 00:00 am</p>
        <p className="p__opensans">Sat - Sun 10:00 am - 00:00 am
        </p>
        <button type='button' className='custom__button' style={{marginTop: '2rem'}}>See more</button>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="Find us" />
    </div>
  </div>

);

export default FindUs;
