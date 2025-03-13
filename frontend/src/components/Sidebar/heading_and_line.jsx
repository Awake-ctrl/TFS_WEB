// import React from 'react';
import './heading_and_line.css'
// import React from 'react';

const Heading_and_line = ({heading}) => {

  return (
    <div className="heading-and-line-wrapper">
        <h3 className="heading-and-line-widget-heading">{heading}</h3>
        <div className="heading-and-line-widget-text">
        {heading === "Archives" ? (
          <div>
            <p>NONE</p>
            
          </div>
        ) : (
          <div>
            <p><strong>Phone No:</strong> 11111111111</p>
            <p><strong>Email:</strong><a href="mailto:tfs@iitpkd.ac.in" style={{ textDecoration: "none" }}> tfs@iitpkd.ac.in</a></p>
          </div>
        )}

            
        </div>
    </div>
  );
};

export default Heading_and_line;
