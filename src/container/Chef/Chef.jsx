import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chefs" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's work"/>
      <h1 className="headtext__cormorant">
        What We Belive IN
      </h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim laudantium dolorem maiores nihil. Ipsum est maiores nam provident eum?
          </p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, ipsum?</p>
      </div>
      <div className="app__chef-sign">
        <p>kevin lou</p>
        <p className="p__opensans">
          chef & founder
        </p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
