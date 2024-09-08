import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ImageCardGroup from "../Components/ImageCardSlide/ImageCardGroup";

import ArticleCards from '../Components/Article/ArticleCards'
import Heading_and_line from '../Components/Sidebar/heading_and_line2'
import Footer from '../Components/Footer/Footer'
import '../Components/Sidebar/sidebar.css'



const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageCardGroup />
      
      <div className="content">
        <div className='wrapper'>
        
        
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
        </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
