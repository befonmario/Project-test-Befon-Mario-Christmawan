import React from 'react';
import './Banner.css';
import backgroundSuit from '../assets/backgroundSuit.webp';

const Banner = ({ title }) => {
  return (
    <div className="banner">
      <div className="banner-image" style={{ backgroundImage: `url(${backgroundSuit})` }}>
        <div className="banner-overlay"></div>
      </div>
      <div className="banner-text">
        <h2>{title}</h2>
        <p>Where all our great things begin</p>
      </div>
      <div className="banner-wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,288L1440,160L1440,320L0,320Z"></path></svg>
      </div>
    </div>
  );
};

export default Banner;
