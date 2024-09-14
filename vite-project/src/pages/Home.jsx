// import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ImageCardGroup from "../Components/ImageCardSlide/ImageCardGroup";

import ArticleCards from '../Components/Article/ArticleCards'
import Heading_and_line from '../Components/sidebar/heading_and_line2'
import Recentposts from "../Components/sidebar/recentposts2";
import Socials from "../Components/sidebar/socials2";
import Footer from '../Components/Footer/Footer'
import FeedbackForm from "../Components/sidebar/subscriptionform2";
import '../Components/sidebar/sidebar.css'



const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageCardGroup />
      
      <div className="content">
        <div className="wrapper">
        <div className="wrapper2">
        
        
          <div className="article">
          <ArticleCards />
          <ArticleCards />
          <ArticleCards />
          <ArticleCards />
          <ArticleCards />
          <ArticleCards />
          <ArticleCards />
          <ArticleCards />
          <ArticleCards />
          </div> 
          
          <aside>

            <Heading_and_line />
            <br></br>
            <Recentposts/>
            <br></br>
            <FeedbackForm/>
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

export default Home
