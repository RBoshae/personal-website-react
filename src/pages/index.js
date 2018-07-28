import React from 'react';
import Link from 'gatsby-link';
import About from '../components/About.js'
import Projects from '../components/Projects.js';
import Experience from '../components/Experience';
import Education from '../components/Education.js';
import Contact from '../components/Contact';
// import "../assets/css/main.css";

const IndexPage = () => (
  <div className="main">
    <About />
    <Projects/>
    <Experience/>
    <Education/>
    <Contact/>
  </div>
)

export default IndexPage
