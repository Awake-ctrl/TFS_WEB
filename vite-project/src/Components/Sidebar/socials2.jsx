import React from 'react';
import './socials.css';  // Ensure the path is correct

const Socials = () => {
  return (
    <div className="social-widget">
      <h3 className="widget-title">Follow us on</h3>
      <ul className="social-list">
        <li className="social-item">
          <a href="#" target="_blank" title="Visit The Fleet Street, IIT Palakkad on Instagram">
            <span className="fa fa-instagram"></span>
          </a>
        </li>
        <li className="social-item">
          <a href="#" target="_blank" title="Visit The Fleet Street, IIT Palakkad on X">
            <span className="fa fa-twitter"></span>
          </a>
        </li>
        <li className="social-item">
          <a href="#" target="_blank" title="Visit The Fleet Street, IIT Palakkad on Facebook">
            <span className="fa fa-facebook"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;


 
