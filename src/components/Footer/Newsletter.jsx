import React from 'react';
import  SubHeading  from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter"/>
      <h1 className="headtext__cormorant">Subscribe to our newsletter</h1>
      <p className="p__opensans">and never miss lastest updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder='Enter Your Email address' />
      <button className="custom__button">suscribe</button>
    </div>
  </div>
);

export default Newsletter;
