import React, { useEffect, useState } from 'react';
import './Banner.css';
import backgroundSuit from '../assets/backgroundSuit.webp';

const Banner = ({ title }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="banner">
      <div 
        className="banner-image parallax" 
        style={{ 
          backgroundImage: `url(${backgroundSuit})`,
          transform: `translateY(${offset * 0.5}px)`
        }}
      >
        <div className="banner-overlay"></div>
      </div>
      <div className="banner-text">
        <h2>{title}</h2>
        <p>Where all our great things begin</p>
      </div>
      <div className="banner-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L1440,160L1440,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;