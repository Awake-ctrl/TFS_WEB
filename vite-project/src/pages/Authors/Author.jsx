// import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ImageCardGroup from "../../Components/ImageCardSlide/ImageCardGroup";

import ArticleCards from '../../Components/Article/ArticleCards'
import Heading_and_line from '../../Components/sidebar/heading_and_line2'
import Recentposts from "../../Components/sidebar/recentposts2";
import Socials from "../../Components/sidebar/socials2";
import Footer from '../../Components/Footer/Footer'
import SubscriptionForm from "../../Components/sidebar/subscriptionform2";
import '../../Components/sidebar/sidebar.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const Author = () => {

  const authorName = "Author"; 
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
      <Navbar />
      <ImageCardGroup />
      

      <div className="article-page-author-name">
        <h1><h1>Author</h1>{authorName}</h1>
      </div>
      
      
      
      <div className="content">
        <div className="wrapper">
        <div className="wrapper2">
          <div className="article">
          <div id="author-page-author-onset"></div>
          <ArticleCards />
          <ArticleCards />
          </div> 
          
          <aside>

            <Heading_and_line />
            <br></br>
            <Recentposts/>
            <br></br>
            <SubscriptionForm/>
            <br></br>
            <Socials/>
          </aside>
        </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Author;
