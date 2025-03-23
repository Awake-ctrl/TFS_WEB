// import React from 'react'
import { Navbar, Footer, Team } from '../All_imports'
import "../components/About/About.css";
import "../components/About/Team"

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ABOUT_US = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [location]);
  
  return (
    <div>
      <div id="about-page-onset"></div>
      <Navbar/>

        <h1 className='About_us-heading'> About Us </h1>
        <p className ="About_us-para">
          <span className='About_us-textspan'>
           Media provides a way for people to exercise their Right to Information. A journalist must strive to discover trends and dissect happenings. To abide by this and to cater to the students with a platform to amplify their opinions, we at IIT Palakkad founded 
          </span>

          <label>
          <span className='About_us-namespan'>
          &nbsp;&nbsp;&nbsp;THE FLEET STREET&nbsp;&nbsp;&nbsp;
          </span>
          </label>

          <span className='About_us-textspan'>
           , our very own student media body!
          </span>
        </p>

        <p className='About_us-para'>
          <span className='About_us-textspan'>
            In England, Media finds its roots in this very street in London – a pioneer hub of publishing and printing. The Fleet Street still remains a monument when it comes to the English media. We are also taking the first step, the beginning of something which will hopefully leave a mark in the course of time, hence the name. Be free, be vibrant and let yourideas flow. Send in your articles, write-ups, stories and whatever you think should reach the Institute community.
          </span>
        </p>

        <br></br>
        <br></br>

        {/* Add the downloadable PDF link */}
         <a 
            href="./TFS_Constitution.pdf" 
            download="TFS_Constitution.pdf" 
            className="download-link"
         >
           Download Constitution PDF
         </a>

        <Team />
        <h2> Contact Us </h2>
        <div>
          <p className='About_us-para'> 
           <div className='About_us-center'>Karthikeya - 11111111111 - <a href="mailto:tfs@iitpkd.ac.in" style={{ textDecoration: "none" }}> tfs@iitpkd.ac.in</a></div>
         </p>
        </div>
      <Footer/>

    </div>
      
  
  )
}

export default ABOUT_US