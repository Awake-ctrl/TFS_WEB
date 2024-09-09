// import React from 'react';
import './recentposts.css'

const Recentposts = () => {
  return (
      <div className="recent-posts-0">
         <h3 className="widget-title">Recent Posts</h3>
         <ul className="recent-posts">
            <li className="recent-post-media">
                <a className="recent-post-image" href="">

                </a>
                <div className="media-body">
                    <h4 className="recent-post-title">
                        <a href="">put post title here</a>
                    </h4>
                    <div className="post-date"> dd/mm/yy </div>
                </div>
            </li>
         </ul> 
      </div>
  );
};

export default Recentposts;
