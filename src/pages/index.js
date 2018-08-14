import React from 'react';
import Link from 'gatsby-link';
import About from '../components/About.js'
import Portfolio from '../components/Portfolio.js';
import Tech from '../components/Tech';
import Education from '../components/Education.js';
import Honors from '../components/Honors.js';
import Contact from '../components/Contact';
// import "../assets/css/main.css";

const IndexPage = () => (
  <div className="main">
    <About />
    <Portfolio/>
    <Tech/>
    <Education/>
    <Honors/>
    <Contact/>
  </div>
)

export default IndexPage
