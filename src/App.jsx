import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Work from './pages/Work.jsx';
import Ideas from './pages/Ideas.jsx';
import About from './pages/About.jsx';
import Career from './pages/Career.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Ideas />} />
      <Route path='/work' element={<Work/>} />
      <Route path='/About' element={<About />} />
      <Route path='/Career' element={<Career />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Services' element={<Services />} />

    </Routes>

  );
};

export default App;
