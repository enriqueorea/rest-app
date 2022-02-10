import React from "react";

import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Lorem ipsum dolor sit.</p>
        <p className="p__opensans">228-818-3423</p>
        <p className="p__opensans">228-182-2132</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer logo" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium veniam laboriosam inventore totam quaerat recusandae?
        </p>
        <img src={images.spoon} className="spoon__img" alt="spon" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Lorem ipsum dolor sit.</p>
        <p className="p__opensans">228-818-3423</p>
        <p className="p__opensans">228-182-2132</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 rest.All rights Reserve</p>
    </div>
  </div>
);

export default Footer;
