import React from 'react';
import Link from 'gatsby-link';
import About from '../components/About.js'
import Projects from '../components/Projects.js';
// import "../assets/css/main.css";

const IndexPage = () => (
  <div className="main">
    <About />
    <Projects/>

    <h1>Technologies I Enjoy</h1>
    <h1>Languages</h1>
    <h1>Experience</h1>
    <h1>Education</h1>
    <h1>Get In Touch</h1>
  </div>
)

export default IndexPage
