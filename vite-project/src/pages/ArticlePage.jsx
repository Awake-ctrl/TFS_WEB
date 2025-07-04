// import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Article from '../Components/Article/Article'
import Heading_and_line from '../Components/sidebar/heading_and_line2'
import Recentposts from "../Components/sidebar/recentposts2";
import Socials from "../Components/sidebar/socials2";
import FeedbackForm from '../Components/sidebar/subscriptionform2';
import Footer from '../Components/Footer/Footer'
import ImageCardGroup from '../Components/ImageCardSlide/ImageCardGroup';
import '../Components/sidebar/sidebar.css'
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
      <ImageCardGroup />

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