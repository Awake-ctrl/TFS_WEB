// import React from 'react'
import { Navbar, Footer, Heading_and_line, Recentposts, FeedbackForm, Socials } from '../All_imports';
import { Article, ImageCardGroup } from '../All_imports'
import '../components/Sidebar/sidebar.css'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const ArticlePage = () => {

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
    <div className='Main'>
      <Navbar />

      <div id="article-page-article-onset"></div>
      <div className="content">
      <div className="wrapper">
      <div className="wrapper2">
          
          <div className="article">
            <Article/>
          </div> 
          <aside>
          <Recentposts />
              <br></br>
              <FeedbackForm />
              <br></br>
              <Heading_and_line 
               heading={"Archives"}
              />
              <br></br>
              <Heading_and_line 
                heading={"Contact Us"}
              />
              <br></br>
              <Socials />
          </aside>
        </div>
      </div>
      </div>


      <Footer />
    </div>
  )
}

export default ArticlePage