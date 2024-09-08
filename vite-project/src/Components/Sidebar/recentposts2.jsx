import React from 'react';
import './recentposts.css'

const Recentposts = () => {
  return (
      <div class="recent-posts-0">
         <h3 class="widget-title">Recent Posts</h3>
         <ul class="recent-posts">
            <li class="recent-post-media">
                <a class="recent-post-image" href="">

                </a>
                <div class="media-body">
                    <h4 class="recent-post-title">
                        <a href="">put post title here</a>
                    </h4>
                    <div class="post-date"> dd/mm/yy </div>
                </div>
            </li>
         </ul> 
      </div>
  );
};

export default Recentposts;
