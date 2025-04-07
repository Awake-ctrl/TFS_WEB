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
          <a
  href="https://sites.google.com/iitpkd.ac.in/tfs-iit-palakkad/home"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: 'black' }}
>
  Old Website Link
</a>
            
          </div>
        ) : (
          <div>
            <p><strong>Phone&nbsp;:</strong> +91 7794011990</p>
            <p><strong>Email&nbsp;:</strong><a href="mailto:tfs@iitpkd.ac.in" style={{ textDecoration: "none" }}> tfs@iitpkd.ac.in</a></p>
          </div>
        )}

            
        </div>
    </div>
  );
};

export default Heading_and_line;
