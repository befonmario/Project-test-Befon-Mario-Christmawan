import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoSuitMedia from '../assets/suitmedia_logo_putih.png';

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${show ? 'show' : 'hide'}`}>
      <div className="logo">
        <Link to="/"><img src={logoSuitMedia} alt="Suitmedia Logo" /></Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li className={location.pathname === '/work' ? 'active' : ''}>
            <Link to="/work">Work</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === '/services' ? 'active' : ''}>
            <Link to="/services">Services</Link>
          </li>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Ideas</Link>
          </li>
          <li className={location.pathname === '/career' ? 'active' : ''}>
            <Link to="/career">Career</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;