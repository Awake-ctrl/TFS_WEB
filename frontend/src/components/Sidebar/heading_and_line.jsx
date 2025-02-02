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
            <p>Archive1</p>
            <p>Archive2</p>
            <p>Archive3</p>
            <p>Archive4</p>
            <p>Archive5</p>
            <p>Archive6</p>
            <p>Archive7</p>
            <p>Archive8</p>
            <p>Archive9</p>
            <p>Archive10</p>
            <p>Archive11</p>
          </div>
        ) : (
          <div>
            <p><strong>Phone No:</strong> 111111111111</p>
            <p><strong>Email:</strong> 111111@smail.iitpkd.ac.in</p>
          </div>
        )}

            
        </div>
    </div>
  );
};

export default Heading_and_line;
