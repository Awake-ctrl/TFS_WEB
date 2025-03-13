// import React from 'react';
import './recentposts.css';

const Recentposts = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB');

  return (
      <div className="recent-post-wrapper">
         <h3 className="recent-post-widget-title">New Posts</h3>
         <ul className="recent-post-content-container">
            <li className="recent-post-content-wrapper">
                <a className="recent-post-content-image" href=""></a>
                <div className="recent-post-content-text">
                    <h4 className="recent-post-content-title">
                        <a href="#">No new posts added currently</a>
                    </h4>
                    <div className="recent-post-content-date">{formattedDate}</div>
                </div>
            </li>
         </ul> 
      </div>
  );
};

export default Recentposts;
